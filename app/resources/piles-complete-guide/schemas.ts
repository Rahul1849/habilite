import { SITE_URL } from '@/lib/seo/siteMetadata'

export const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${SITE_URL}/resources/piles-complete-guide`,
  name: 'Piles – A Complete Guide by Dr. Kapil Agrawal',
  description:
    'Comprehensive hemorrhoids guide covering self-check tools, report uploads, laser vs stapler options, and post-op recovery plans by Dr. Kapil Agrawal.',
  url: `${SITE_URL}/resources/piles-complete-guide`,
  inLanguage: 'en-IN',
  medicalAudience: {
    '@type': 'Patient',
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Hemorrhoids / Piles',
    description: 'Swollen veins in the lower rectum or anus causing bleeding, pain, prolapse, and discomfort.',
  },
}

export const medicalConditionSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalCondition',
  name: 'Piles',
  alternateName: ['Hemorrhoids'],
  description:
    'Piles are inflamed vascular cushions in the anal canal that cause bleeding, itching, and sometimes prolapse. They can be internal or external based on location.',
  cause: {
    '@type': 'MedicalCause',
    name: 'Chronic constipation, pregnancy, prolonged sitting, obesity, low-fibre diets, and genetic predisposition',
  },
  possibleTreatment: [
    {
      '@type': 'MedicalTherapy',
      name: 'Lifestyle modification with high-fibre diet, hydration, sitz baths, and medication',
    },
    {
      '@type': 'TherapeuticProcedure',
      name: 'Office procedures like rubber band ligation, sclerotherapy, and IRC',
    },
    {
      '@type': 'SurgicalProcedure',
      name: 'Laser hemorrhoidoplasty, stapler hemorrhoidopexy, DGHAL, and open hemorrhoidectomy',
    },
  ],
  signOrSymptom: [
    'Bright red bleeding during bowel movements',
    'Anal itching or burning sensation',
    'Painful swelling or lump around the anus',
    'Mucous discharge or staining',
    'Difficulty sitting or walking during flare-ups',
  ],
}

export const medicalProcedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Laser and Stapler Piles Surgery',
  description:
    'Minimally invasive laser, DGHAL, and stapler procedures performed by Dr. Kapil Agrawal for grades II–IV hemorrhoids with fast recovery and minimal recurrence.',
  bodyLocation: 'Anal Canal / Rectum',
  procedureType: 'Hemorrhoidectomy',
  followup: 'Pain control, fibre guidance, stool regulation, physical activity plan, and follow-up visits at 1 and 4 weeks.',
}

export const getItemListSchema = (name: string, description: string, items: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  description,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item,
  })),
})

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

