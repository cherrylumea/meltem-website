export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Short Message', type: 'text', rows: 2 },
    { name: 'mainImage', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'expiresAt', title: 'Expires At (Optional)', type: 'datetime' },
    { name: 'isPinned', title: 'Pin to Top', type: 'boolean', initialValue: false },
    { name: 'body', title: 'Full Details', type: 'array', of: [{ type: 'block' }] },
  ],
}