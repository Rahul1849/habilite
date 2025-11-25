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
  medicalSpecialty?: string[]
  followup?: string
  preparation?: string
  howPerformed?: string
  areaServed?: string | string[]
  availableService?: string[]
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CLINIC_INFO.geo.latitude,
    longitude: CLINIC_INFO.geo.longitude,
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
  jobTitle: DOCTOR_INFO.title,
  description: DOCTOR_INFO.description,
  url: DOCTOR_INFO.url,
  image: absoluteUrl(DOCTOR_INFO.image),
  medicalSpecialty: DOCTOR_INFO.medicalSpecialty,
  award: DOCTOR_INFO.award,
  sameAs: DOCTOR_INFO.sameAs,
  worksFor: {
    '@id': DOCTOR_INFO.worksFor,
  },
  alumniOf: DOCTOR_INFO.education.map((institution) => ({
    '@type': 'EducationalOrganization',
    name: institution,
  })),
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
    provider: {
      '@type': 'Physician',
      name: DOCTOR_INFO.name,
      url: DOCTOR_INFO.url,
      image: absoluteUrl(DOCTOR_INFO.image),
      medicalSpecialty: DOCTOR_INFO.medicalSpecialty,
    },
    areaServed: options.areaServed || CLINIC_INFO.areaServed,
  }

  if (options.procedureType) schema.procedureType = options.procedureType
  if (options.bodyLocation) schema.bodyLocation = options.bodyLocation
  if (options.medicalSpecialty) schema.medicalSpecialty = options.medicalSpecialty
  if (options.followup) schema.followup = options.followup
  if (options.preparation) schema.preparation = options.preparation
  if (options.howPerformed) schema.howPerformed = options.howPerformed
  if (options.availableService) schema.availableService = options.availableService
  if (options.image) schema.image = absoluteUrl(options.image)

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

