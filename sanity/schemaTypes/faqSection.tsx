export default {
  name: 'faqSection',
  title: 'FAQ',
  type: 'object',
  fields: [
    { name: 'title', title: 'Section Title', type: 'string' },
    {
      name: 'items',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    },
  ],
}
