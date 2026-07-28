export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'logoName', title: 'Logo Name', type: 'string' },
    { name: 'logoTitle', title: 'Logo Subtitle', type: 'string' },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link (e.g. #about)', type: 'string' },
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    },
    { name: 'ctaText', title: 'Header Button Text', type: 'string' },
    { name: 'ctaLink', title: 'Header Button Link', type: 'string' },
    { name: 'contactEmail', title: 'Contact Email', type: 'string' },
    { name: 'contactPhone', title: 'Contact Phone', type: 'string' },
    { name: 'contactLocation', title: 'Contact Location', type: 'string' },
    { name: 'footerTagline', title: 'Footer Tagline', type: 'text' },
    { name: 'footerText', title: 'Footer Copyright Text', type: 'string' },
  ],
}
