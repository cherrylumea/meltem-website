export default {
  name: 'whySection',
  title: 'Why Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading (Italic)', type: 'string' },
    { name: 'body', title: 'Body Text', type: 'text' },
  ],
  preview: {
    select: { title: 'heading' },
  },
}
