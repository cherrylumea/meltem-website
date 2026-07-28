export default {
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    { name: 'sectionTitle', title: 'Section Title (Optional)', type: 'string' },
    { name: 'services', title: 'Services List', type: 'array', of: [{ type: 'serviceCard' }] },
  ],
}