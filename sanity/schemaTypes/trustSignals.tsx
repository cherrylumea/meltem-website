export default {
  name: 'trustSignals',
  title: 'Trust Signals / Credentials',
  type: 'object',
  fields: [
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'credential',
          fields: [
            { name: 'label', title: 'Label (bold)', type: 'string' },
            { name: 'detail', title: 'Detail', type: 'string' },
          ],
          preview: { select: { title: 'label', subtitle: 'detail' } },
        },
      ],
    },
  ],
}
