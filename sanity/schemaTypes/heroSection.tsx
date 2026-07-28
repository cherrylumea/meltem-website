export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Main Heading', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'ctaPrimaryText', title: 'Primary Button Text', type: 'string' },
    { name: 'ctaPrimaryLink', title: 'Primary Button Link', type: 'string' },
    { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
  ],
}