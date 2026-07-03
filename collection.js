import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Collection / Exhibit',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'curatorialStatement',
      title: 'Curatorial statement',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'roomId',
      title: 'Room ID',
      type: 'string',
      description: 'Which 3D room this exhibit occupies, e.g. "west-wing".',
    }),
    defineField({
      name: 'featuredJourney',
      title: 'Featured guided journey',
      type: 'reference',
      to: [{ type: 'journey' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'title', media: 'coverImage' },
  },
})
