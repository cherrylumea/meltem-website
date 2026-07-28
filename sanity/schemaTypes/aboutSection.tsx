export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Body Text', type: 'array', of: [{ type: 'block' }] },
    { name: 'linkText', title: 'Link Text', type: 'string' },
    { name: 'linkUrl', title: 'Link URL', type: 'string' },
  ],
}
