export default {
  name: 'valuePropSection',
  title: 'Value Proposition Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Main Heading (Italic)', type: 'string' },
    { name: 'bodyText', title: 'Body Text', type: 'array', of: [{ type: 'block' }] },
  ],
}
