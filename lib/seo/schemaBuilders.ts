import { CLINIC_INFO, DOCTOR_INFO, SITE_URL, absoluteUrl } from './siteMetadata'

type BreadcrumbItem = {
  name: string
  url: string
}

type FAQItem = {
  question: string
  answer: string
}

type MedicalProcedureOptions = {
  name: string
  description: string
  url: string
  procedureType?: string
  bodyLocation?: string
  image?: string
  followup?: string
  preparation?: string
  howPerformed?: string
}

type ArticleSchemaOptions = {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  keywords?: string[]
}

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': `${SITE_URL}#organization`,
  name: CLINIC_INFO.name,
  alternateName: 'Habilite Clinics - Advanced Laparoscopic & Robotic Surgery',
  description: CLINIC_INFO.description,
  url: SITE_URL,
  logo: absoluteUrl(CLINIC_INFO.logo),
  image: absoluteUrl(CLINIC_INFO.image),
  telephone: CLINIC_INFO.telephonePrimary,
  email: CLINIC_INFO.emails[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC_INFO.address.streetAddress,
    addressLocality: CLINIC_INFO.address.locality,
    addressRegion: CLINIC_INFO.address.region,
    postalCode: CLINIC_INFO.address.postalCode,
    addressCountry: CLINIC_INFO.address.country,
  },
  location: {
    '@type': 'Place',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_INFO.geo.latitude,
      longitude: CLINIC_INFO.geo.longitude,
    },
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CLINIC_INFO.telephonePrimary,
      contactType: 'customer service',
      areaServed: CLINIC_INFO.areaServed,
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: CLINIC_INFO.telephoneSecondary,
      contactType: 'appointments',
      areaServed: CLINIC_INFO.areaServed,
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: CLINIC_INFO.socialProfiles,
})

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${SITE_URL}#medical-business`,
  name: CLINIC_INFO.name,
  description: CLINIC_INFO.description,
  url: SITE_URL,
  logo: absoluteUrl(CLINIC_INFO.logo),
  image: absoluteUrl(CLINIC_INFO.image),
  telephone: CLINIC_INFO.telephonePrimary,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC_INFO.address.streetAddress,
    addressLocality: CLINIC_INFO.address.locality,
    addressRegion: CLINIC_INFO.address.region,
    postalCode: CLINIC_INFO.address.postalCode,
    addressCountry: CLINIC_INFO.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CLINIC_INFO.geo.latitude,
    longitude: CLINIC_INFO.geo.longitude,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: CLINIC_INFO.openingHours.dayOfWeek,
    opens: CLINIC_INFO.openingHours.opens,
    closes: CLINIC_INFO.openingHours.closes,
  },
  areaServed: CLINIC_INFO.areaServed,
  sameAs: CLINIC_INFO.socialProfiles,
})

export const getPhysicianSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${DOCTOR_INFO.url}#physician`,
  name: DOCTOR_INFO.name,
  alternateName: [
    'Best Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
    'Best Laparoscopic Surgeon in Delhi - Dr. Kapil Agrawal',
    'Best Bariatric Surgeon in Delhi - Dr. Kapil Agrawal',
    'Best Robotic Surgeon in Delhi - Dr. Kapil Agrawal',
    'Best Laparoscopic Surgeon in India - Dr. Kapil Agrawal',
    'Best Bariatric Surgeon in India - Dr. Kapil Agrawal',
    'Best Robotic Surgeon in India - Dr. Kapil Agrawal',
  ],
  description: 'Dr. Kapil Agrawal is the best laparoscopic, bariatric, and robotic surgeon in Delhi, India with 23+ years of experience and 7000+ successful surgeries. Expert in advanced minimally invasive procedures including laparoscopic surgery, bariatric surgery, and robotic surgery.',
  url: DOCTOR_INFO.url,
  image: absoluteUrl(DOCTOR_INFO.image),
  medicalSpecialty: [
    'Laparoscopic Surgery',
    'Robotic Surgery',
    'Bariatric Surgery',
    'General Surgery',
    'Colorectal Surgery',
    'Weight Loss Surgery',
    'Metabolic Surgery',
  ],
  award: DOCTOR_INFO.award,
  sameAs: DOCTOR_INFO.sameAs,
  jobTitle: DOCTOR_INFO.title,
  telephone: CLINIC_INFO.telephonePrimary,
  email: CLINIC_INFO.emails[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC_INFO.address.streetAddress,
    addressLocality: CLINIC_INFO.address.locality,
    addressRegion: CLINIC_INFO.address.region,
    postalCode: CLINIC_INFO.address.postalCode,
    addressCountry: CLINIC_INFO.address.country,
  },
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'NCR' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: [
    'Best Laparoscopic Surgeon in Delhi',
    'Best Laparoscopic Surgeon in India',
    'Best Bariatric Surgeon in Delhi',
    'Best Bariatric Surgeon in India',
    'Best Robotic Surgeon in Delhi',
    'Best Robotic Surgeon in India',
    'Laparoscopic Surgery Delhi',
    'Bariatric Surgery Delhi',
    'Robotic Surgery Delhi',
    'Weight Loss Surgery Delhi',
  ],
  worksFor: {
    '@type': 'MedicalOrganization',
    '@id': `${SITE_URL}#organization`,
    name: CLINIC_INFO.name,
  },
})

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
})

export const getFAQSchema = (options: { title?: string; description?: string; faqs: FAQItem[] }) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  headline: options.title,
  description: options.description,
  mainEntity: options.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const getMedicalProcedureSchema = (options: MedicalProcedureOptions) => {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${absoluteUrl(options.url)}#medicalProcedure`,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.url),
  }

  // Only include valid MedicalProcedure properties according to schema.org
  if (options.procedureType) schema.procedureType = options.procedureType
  if (options.bodyLocation) schema.bodyLocation = options.bodyLocation
  if (options.followup) schema.followup = options.followup
  if (options.preparation) schema.preparation = options.preparation
  if (options.howPerformed) schema.howPerformed = options.howPerformed
  if (options.image) schema.image = absoluteUrl(options.image)

  return schema
}

type ServiceSchemaOptions = {
  name: string
  description: string
  url: string
  serviceType?: string
  category?: string
  areaServed?: string | string[]
  image?: string
}

export const getServiceSchema = (options: ServiceSchemaOptions) => {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(options.url)}#service`,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.url),
    provider: {
      '@type': 'Physician',
      '@id': `${DOCTOR_INFO.url}#physician`,
      name: DOCTOR_INFO.name,
      alternateName: 'Best Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
      url: DOCTOR_INFO.url,
      image: absoluteUrl(DOCTOR_INFO.image),
      medicalSpecialty: ['Laparoscopic Surgery', 'General Surgery', 'Bariatric Surgery', 'Colorectal Surgery'],
      telephone: CLINIC_INFO.telephonePrimary,
      email: CLINIC_INFO.emails[0],
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      availableLanguage: ['English', 'Hindi'],
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }

  // Only include valid Service properties according to schema.org
  if (options.serviceType) schema.serviceType = options.serviceType
  if (options.category) schema.category = options.category
  if (options.image) schema.image = absoluteUrl(options.image)

  // Handle areaServed - can be string, array, or object
  if (options.areaServed) {
    if (Array.isArray(options.areaServed)) {
      schema.areaServed = options.areaServed.map((area) => ({
        '@type': typeof area === 'string' && (area === 'India' || area === 'Delhi' || area === 'Delhi NCR') ? 'Country' : 'City',
        name: area,
      }))
    } else {
      schema.areaServed = {
        '@type': options.areaServed === 'India' || options.areaServed === 'Delhi' || options.areaServed === 'Delhi NCR' ? 'Country' : 'City',
        name: options.areaServed,
      }
    }
  } else {
    // Default area served
    schema.areaServed = [
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'NCR' },
      { '@type': 'Country', name: 'India' },
    ]
  }

  return schema
}

export const getArticleSchema = (options: ArticleSchemaOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: options.title,
  description: options.description,
  image: absoluteUrl(options.image),
  datePublished: options.datePublished,
  dateModified: options.dateModified || options.datePublished,
  url: absoluteUrl(options.url),
  keywords: options.keywords,
  author: {
    '@type': 'Person',
    name: DOCTOR_INFO.name,
    jobTitle: DOCTOR_INFO.title,
    url: DOCTOR_INFO.url,
    description: DOCTOR_INFO.description,
  },
  publisher: {
    '@type': 'Organization',
    name: CLINIC_INFO.name,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(CLINIC_INFO.logo),
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absoluteUrl(options.url),
  },
})

