import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'journey',
  title: 'Guided journey',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'audienceTag',
      title: 'Audience',
      type: 'string',
      options: { list: ['general', 'student', 'researcher', 'press'] },
    }),
    defineField({
      name: 'stops',
      title: 'Stops',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stop',
          fields: [
            defineField({
              name: 'artwork',
              title: 'Artwork',
              type: 'reference',
              to: [{ type: 'artwork' }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'narrativeText',
              title: 'Narrative text for this stop',
              type: 'text',
              rows: 3,
              description: 'The connective story beat spoken/shown as the visitor arrives at this piece.',
            }),
          ],
          preview: {
            select: { title: 'artwork.title', subtitle: 'narrativeText' },
          },
        }),
      ],
    }),
  ],
})
