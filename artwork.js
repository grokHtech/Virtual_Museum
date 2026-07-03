import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Used for the shareable deep link, e.g. /artwork/low-tide-lagos',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Artist / creator',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      options: {
        list: [
          { title: 'Photography', value: 'photography' },
          { title: 'Poetry', value: 'poetry' },
          { title: 'Writing', value: 'writing' },
          { title: 'Painting', value: 'painting' },
          { title: 'Mural', value: 'mural' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    // ---- content ----
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'fullText',
      title: 'Full text (poetry / writing)',
      type: 'text',
      rows: 10,
      description: 'For poetry and writing pieces — the actual text, rendered natively rather than baked into an image.',
      hidden: ({ document }) => !['poetry', 'writing'].includes(document?.medium),
    }),
    defineField({
      name: 'curatorNotes',
      title: 'Curator notes',
      type: 'text',
      rows: 3,
      description: 'Internal curatorial context, not necessarily shown to every visitor.',
    }),
    defineField({
      name: 'advocacyNote',
      title: 'Advocacy context',
      type: 'text',
      rows: 3,
      description: 'Why this piece matters beyond the gallery wall — the context that makes it worth sharing.',
    }),
    defineField({
      name: 'accessibilityCaption',
      title: 'Accessibility caption',
      type: 'text',
      rows: 2,
      description: 'A structured long-description for screen readers — describe what is visually depicted, not just the title.',
      validation: (Rule) => Rule.required(),
    }),

    // ---- media ----
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'audioNarration',
      title: 'Audio narration',
      type: 'file',
      options: { accept: 'audio/*' },
      description: 'Optional narration or artist reading, with a transcript required alongside it for accessibility.',
    }),
    defineField({
      name: 'audioTranscript',
      title: 'Audio transcript',
      type: 'text',
      rows: 4,
      hidden: ({ document }) => !document?.audioNarration,
    }),

    // ---- 3D spatial placement (optional — 2D mode never depends on this) ----
    defineField({
      name: 'spatialPlacement',
      title: '3D spatial placement',
      type: 'object',
      description: 'Optional. If left empty, the piece still appears in list/2D mode and is auto-placed in 3D.',
      fields: [
        defineField({
          name: 'wall',
          title: 'Wall',
          type: 'string',
          options: { list: ['north', 'south', 'east', 'west'] },
        }),
        defineField({ name: 'x', title: 'X offset along wall', type: 'number' }),
      ],
    }),

    // ---- taxonomy ----
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'advocacyTheme',
      title: 'Advocacy theme',
      type: 'string',
      description: 'e.g. climate, migration, housing, identity — used to group cross-medium themed exhibits.',
    }),
    defineField({
      name: 'collection',
      title: 'Collection / exhibit',
      type: 'reference',
      to: [{ type: 'collection' }],
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Controls ordering within a wall/collection.',
    }),

    // ---- provenance / rights ----
    defineField({
      name: 'provenance',
      title: 'Provenance',
      type: 'object',
      fields: [
        defineField({ name: 'community', title: 'Community / origin', type: 'string' }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({ name: 'dateCreated', title: 'Date created', type: 'date' }),
        defineField({
          name: 'consentConfirmed',
          title: 'Rights / consent confirmed',
          type: 'boolean',
          description: 'Must be checked before publishing community-submitted work.',
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'artist', media: 'mainImage' },
  },
})
