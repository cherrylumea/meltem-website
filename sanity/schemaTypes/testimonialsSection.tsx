export default {
  name: 'testimonialsSection',
  title: 'Testimonials',
  type: 'object',
  fields: [
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text' },
            { name: 'author', title: 'Author', type: 'string' },
          ],
          preview: { select: { title: 'author', subtitle: 'quote' } },
        },
      ],
    },
  ],
}
