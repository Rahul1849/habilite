// JSON-LD schemas for the Obesity Complete Guide page

import { SITE_URL } from '@/lib/seo/siteMetadata'

export const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${SITE_URL}/resources/obesity-complete-guide`,
  name: 'Obesity – A Complete Guide by Dr. Kapil Agrawal',
  description:
    'Obesity awareness hub featuring self-check tools, lab upload assistants, FAQs, and bariatric treatment pathways curated by Dr. Kapil Agrawal at Habilite Clinics.',
  url: `${SITE_URL}/resources/obesity-complete-guide`,
  inLanguage: 'en-IN',
  medicalAudience: {
    '@type': 'Patient',
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Obesity',
    alternateName: 'Chronic Weight Management',
    description:
      'Obesity is a chronic disease characterised by excessive body fat that increases the risk of diabetes, sleep apnea, fatty liver, and joint disorders.',
  },
}

export const medicalConditionSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalCondition',
  name: 'Obesity',
  alternateName: ['Severe Obesity', 'Morbid Obesity'],
  description:
    'A chronic metabolic condition defined by abnormal or excessive body fat accumulation that impairs health and daily functioning.',
  cause: {
    '@type': 'MedicalCause',
    name: 'Genetics, sedentary lifestyle, calorie-dense diets, hormonal imbalance, stress, and certain medications',
  },
  possibleTreatment: [
    {
      '@type': 'MedicalTherapy',
      name: 'Medically supervised nutrition and exercise therapy',
    },
    {
      '@type': 'TherapeuticProcedure',
      name: 'GLP-1 weight loss injections',
    },
    {
      '@type': 'SurgicalProcedure',
      name: 'Bariatric surgery (Sleeve Gastrectomy, Gastric Bypass, SADI-S)',
    },
  ],
  signOrSymptom: [
    'BMI above 30',
    'Excess waist circumference',
    'Snoring or sleep apnea',
    'Fatty liver or unexplained fatigue',
    'Joint pain or limited mobility',
  ],
}

export const medicalProcedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Bariatric and Metabolic Surgery',
  description:
    'Sleeve gastrectomy, gastric bypass, and SADI-S procedures performed at Habilite Clinics for chronic obesity with supervised pre- and post-operative care.',
  bodyLocation: 'Stomach / Digestive System',
  procedureType: 'Bariatric Surgery',
  followup: 'Comprehensive rehabilitation including diet modification, supplements, psychological support, and metabolic labs.',
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

