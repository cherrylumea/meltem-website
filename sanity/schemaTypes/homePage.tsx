export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    { 
      name: 'sections', 
      title: 'Page Sections', 
      type: 'array', 
      of: [
        { type: 'heroSection' },
        { type: 'valuePropSection' },
        { type: 'trustSignals' },
        { type: 'aboutSection' },
        { type: 'servicesSection' },
        { type: 'whySection' },
        { type: 'journeySection' },
        { type: 'testimonialsSection' },
        { type: 'faqSection' },
        { type: 'resourcesSection' },
        { type: 'finalCta' },
        { type: 'contactSection' },
      ],
    },
  ],
}