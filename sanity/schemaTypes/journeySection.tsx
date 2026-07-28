export default {
  name: 'journeySection',
  title: 'Client Journey',
  type: 'object',
  fields: [
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'journeyStep',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
    },
  ],
}
