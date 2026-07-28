export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'mainImage', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    { name: 'author', title: 'Author', type: 'string', initialValue: 'Meltem Ersoy' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: { type: 'category' } }] },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
  ],
}