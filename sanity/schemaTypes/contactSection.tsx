export default {
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subheading', title: 'Subheading', type: 'string' },
    { name: 'introText', title: 'Intro Text', type: 'text' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'sessions', title: 'Sessions', type: 'string' },
    { name: 'fee', title: 'Fee', type: 'string' },
    { name: 'languages', title: 'Languages', type: 'string' },
    {
      name: 'formEndpoint',
      title: 'Form Endpoint (Formspree URL)',
      description: 'Paste the Formspree form URL here to receive submissions by email. Leave blank to disable sending.',
      type: 'url',
    },
  ],
}
