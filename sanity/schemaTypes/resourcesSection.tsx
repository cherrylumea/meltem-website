export default {
  name: 'resourcesSection',
  title: 'Resources',
  type: 'object',
  fields: [
    { name: 'title', title: 'Section Title', type: 'string' },
    {
      name: 'resources',
      title: 'Resource Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'resourceCard',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'linkText', title: 'Link Text', type: 'string' },
            { name: 'linkUrl', title: 'Link URL', type: 'string' },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    },
  ],
}
