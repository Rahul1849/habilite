// This file contains all the JSON-LD schema definitions for the hernia complete guide page
// These are exported as constants to be used in the page component

export const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.habiliteclinics.com/resources/hernia-complete-guide',
  name: 'Hernia – A Complete Guide by Dr. Kapil Agrawal',
  description: 'Hernia awareness hub by Dr. Kapil Agrawal. Take a 30-second hernia self-check, decode ultrasound reports, and follow a doctor-approved diet chart.',
  url: 'https://www.habiliteclinics.com/resources/hernia-complete-guide',
  inLanguage: 'en-IN',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Habilite Clinics',
    url: 'https://www.habiliteclinics.com'
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Hernia',
    alternateName: 'Abdominal Hernia',
    description: 'A hernia occurs when an organ or fatty tissue squeezes through a weak spot in a surrounding muscle or connective tissue.'
  },
  mainEntity: {
    '@type': 'MedicalWebPage',
    medicalAudience: {
      '@type': 'Patient'
    }
  }
}

export const medicalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://www.habiliteclinics.com/#organization',
  name: 'Habilite Clinics',
  alternateName: 'Habilite Clinics - Best Laparoscopic Surgery Center in Delhi',
  url: 'https://www.habiliteclinics.com',
  logo: 'https://www.habiliteclinics.com/logo.png',
  image: 'https://www.habiliteclinics.com/logo.png',
  description: 'Habilite Clinics is a leading laparoscopic surgery center in Delhi, India, specializing in hernia surgery, bariatric surgery, and advanced minimally invasive procedures.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Apollo Hospitals',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    postalCode: '110076',
    addressCountry: 'IN'
  },
  location: {
    '@type': 'Place',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139',
      longitude: '77.2090'
    }
  },
  telephone: '+91-99994-56455',
  email: 'contact@habiliteclinics.com',
  areaServed: {
    '@type': 'City',
    name: 'Delhi'
  },
  // Use schema.org MedicalSpecialty enumeration values
  medicalSpecialty: ['Surgical', 'Gastroenterologic', 'DietNutrition']
}

export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.habiliteclinics.com/dr-kapil-agrawal#physician',
  name: 'Dr. Kapil Agrawal',
  alternateName: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
  description: 'Dr. Kapil Agrawal is a renowned laparoscopic and robotic surgeon in Delhi, India, with 23+ years of experience and 7000+ successful surgeries. Specializes in hernia surgery, bariatric surgery, and advanced minimally invasive procedures.',
  url: 'https://www.habiliteclinics.com/dr-kapil-agrawal',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
  // Use schema.org MedicalSpecialty enumeration values
  medicalSpecialty: ['Surgical', 'Gastroenterologic', 'DietNutrition'],
  telephone: '+91-99994-56455',
  email: 'contact@habiliteclinics.com',
  knowsAbout: [
    'Hernia',
    'Hernia Repair',
    'Laparoscopic Surgery',
    'Robotic Surgery',
    'Bariatric Surgery'
  ],
  award: 'Best Laparoscopic Surgeon in Delhi, India',
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  sameAs: [
    'https://www.linkedin.com/in/dr-kapil-agrawal',
    'https://www.youtube.com/@drkapilagrawal',
    'https://www.facebook.com/habiliteclinics',
  ]
}

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.habiliteclinics.com/#localbusiness',
  name: 'Habilite Clinics - Best Hernia Surgery in Delhi',
  image: 'https://www.habiliteclinics.com/logo.png',
  url: 'https://www.habiliteclinics.com',
  telephone: '+91-99994-56455',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Apollo Hospitals',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    postalCode: '110076',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.6139',
    longitude: '77.2090'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Delhi'
    },
    {
      '@type': 'City',
      name: 'Noida'
    },
    {
      '@type': 'City',
      name: 'Gurgaon'
    },
    {
      '@type': 'State',
      name: 'Delhi NCR'
    }
  ]
})

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.habiliteclinics.com/resources/hernia-complete-guide#service',
  serviceType: 'Medical Procedure',
  name: 'Hernia Surgery - Laparoscopic Hernia Repair',
  description: 'Expert laparoscopic hernia surgery by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure for hernia repair with fast recovery and minimal scarring.',
  provider: {
    '@type': 'Physician',
    name: 'Dr. Kapil Agrawal',
    '@id': 'https://www.habiliteclinics.com/dr-kapil-agrawal#physician'
  },
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    availableLanguage: ['English', 'Hindi']
  },
  category: 'Laparoscopic Surgery',
  offers: {
    '@type': 'Offer',
    description: 'Laparoscopic Hernia Surgery Consultation',
    availability: 'https://schema.org/InStock'
  }
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.habiliteclinics.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resources',
      item: 'https://www.habiliteclinics.com/resources'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Hernia Complete Guide',
      item: 'https://www.habiliteclinics.com/resources/hernia-complete-guide'
    }
  ]
}

export const getFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes hernia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hernias occur when an organ or fatty tissue squeezes through a weak spot in surrounding muscle or connective tissue. Common causes include congenital weakness, heavy lifting, chronic coughing, obesity, pregnancy, and previous surgeries.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is hernia surgery the only treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surgery is the only definitive treatment for hernias. Small, asymptomatic hernias may be monitored, but symptomatic or enlarging hernias require surgical repair to prevent complications like strangulation or obstruction.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can a hernia heal on its own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, hernias cannot heal on their own. The muscle wall defect will not repair itself. Surgery is necessary to fix the weakened area and prevent the hernia from enlarging or causing complications.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to leave a hernia untreated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While small, asymptomatic hernias can sometimes be monitored, leaving a symptomatic or enlarging hernia untreated can be dangerous. It may lead to strangulation (cutting off blood supply) or obstruction, which are medical emergencies.'
      }
    },
    {
      '@type': 'Question',
      name: 'What activities should be avoided if you have a hernia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid heavy lifting, straining during bowel movements, chronic coughing, and activities that increase abdominal pressure. Maintain a healthy weight, eat high-fiber foods to prevent constipation, and avoid smoking.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long is recovery after hernia surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients recover within 1-2 weeks after laparoscopic hernia surgery. You can return to normal activities within a few days, with full recovery typically taking 2-4 weeks. Dr. Kapil Agrawal provides personalized recovery guidance for each patient.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the symptoms of hernia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common symptoms include visible bulge in abdomen or groin, pain or discomfort in the affected area, heaviness or pressure sensation, pain that worsens with activity, and difficulty reducing the bulge.'
      }
    },
    {
      '@type': 'Question',
      name: 'When is hernia surgery necessary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surgery is necessary when the hernia causes pain, is enlarging, becomes irreducible, or shows signs of strangulation. Dr. Kapil Agrawal evaluates each case individually to determine the best treatment approach.'
      }
    }
  ]
})

export const getHowToSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Check for Hernia Symptoms - 30 Second Self-Check',
  description: 'A simple 30-second self-check guide to identify potential hernia symptoms. If two or more symptoms apply, consult with Dr. Kapil Agrawals hernia care team.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Check for visible bulge',
      text: 'Do you notice a visible bulge in your abdomen or groin area?'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Check for pain or discomfort',
      text: 'Do you experience pain or discomfort in the affected area?'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Check for heaviness',
      text: 'Do you feel a heaviness or pressure sensation?'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Check pain with activity',
      text: 'Does the pain worsen when you stand, cough, or strain?'
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Check for reducibility',
      text: 'Can you push the bulge back in, or does it stay out?'
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Check for nausea',
      text: 'Do you experience nausea or vomiting?'
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Check for constipation',
      text: 'Do you have difficulty with bowel movements?'
    },
    {
      '@type': 'HowToStep',
      position: 8,
      name: 'Consult if multiple symptoms',
      text: 'If two or more symptoms apply, its time to speak with Dr. Kapil Agrawals hernia care team for a personalized review.'
    }
  ],
  totalTime: 'PT30S'
})

export const getVideoObjectSchema = (story: { id: string; title: string; description: string; url: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: story.title,
  description: story.description,
  thumbnailUrl: `https://img.youtube.com/vi/${story.id}/hqdefault.jpg`,
  uploadDate: '2024-01-01',
  contentUrl: story.url,
  embedUrl: `https://www.youtube.com/embed/${story.id}`,
  publisher: {
    '@type': 'Organization',
    name: 'Habilite Clinics',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.habiliteclinics.com/logo.png'
    }
  }
})

export const getArticleSchema = (blog: { title: string; description: string; href: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: blog.title,
  description: blog.description,
  url: `https://www.habiliteclinics.com${blog.href}`,
  author: {
    '@type': 'Person',
    name: 'Dr. Kapil Agrawal',
    '@id': 'https://www.habiliteclinics.com/dr-kapil-agrawal#physician'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Habilite Clinics',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.habiliteclinics.com/logo.png'
    }
  }
})

export const medicalConditionSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalCondition',
  name: 'Hernia',
  alternateName: ['Abdominal Hernia', 'Inguinal Hernia', 'Umbilical Hernia'],
  description: 'A hernia occurs when an organ or fatty tissue squeezes through a weak spot in a surrounding muscle or connective tissue. They can cause pain, discomfort, and complications if left untreated. Common causes include congenital weakness, heavy lifting, chronic coughing, obesity, pregnancy, and previous surgeries.',
  possibleTreatment: {
    '@type': 'MedicalTherapy',
    name: 'Laparoscopic Hernia Repair',
    description: 'Minimally invasive surgical repair of the hernia'
  },
  signOrSymptom: [
    'Visible bulge in abdomen or groin',
    'Pain or discomfort in affected area',
    'Heaviness or pressure sensation',
    'Pain that worsens with activity',
    'Difficulty reducing the bulge'
  ]
}

export const medicalProcedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Laparoscopic Hernia Repair',
  alternateName: ['Laparoscopic Hernia Surgery', 'Keyhole Hernia Surgery'],
  description: 'Minimally invasive surgical procedure to repair hernia using small incisions and a laparoscope. Performed by Dr. Kapil Agrawal with 23+ years of experience.',
  procedureType: 'Surgical Procedure',
  preparation: 'Fasting, blood tests, ultrasound, pre-operative evaluation',
  followup: 'Post-operative care, diet modifications, activity restrictions',
  bodyLocation: 'Abdomen/Groin',
  status: 'Active',
  code: {
    '@type': 'MedicalCode',
    codingSystem: 'ICD-10',
    code: 'K40.9'
  }
}

export const getItemListSchema = (name: string, description: string, items: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  description,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item
  }))
})

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.habiliteclinics.com/#organization',
  name: 'Habilite Clinics',
  url: 'https://www.habiliteclinics.com',
  logo: 'https://www.habiliteclinics.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-99994-56455',
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: [
    'https://www.facebook.com/habiliteclinics',
    'https://www.youtube.com/@habiliteclinics',
    'https://www.instagram.com/habiliteclinics'
  ]
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.habiliteclinics.com/dr-kapil-agrawal#person',
  name: 'Dr. Kapil Agrawal',
  jobTitle: 'Senior Consultant - Laparoscopic & Robotic Surgeon',
  description: 'Best Laparoscopic Surgeon in Delhi, India with 23+ years of experience and 7000+ successful surgeries.',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
  url: 'https://www.habiliteclinics.com/dr-kapil-agrawal',
  sameAs: [
    'https://www.linkedin.com/in/dr-kapil-agrawal',
    'https://www.youtube.com/@drkapilagrawal'
  ],
  knowsAbout: [
    'Hernia Surgery',
    'Laparoscopic Surgery',
    'Robotic Surgery',
    'Bariatric Surgery',
    'Laser Surgery'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Apollo Group of Hospitals'
  }
}

export const medicalSpecialtySchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalSpecialty',
  name: 'Laparoscopic Hernia Surgery',
  description: 'Specialized medical field focusing on minimally invasive hernia surgery procedures',
}

export const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Hernia Consultation with Dr. Kapil Agrawal',
  description: 'Expert consultation for hernia evaluation and treatment planning',
  category: 'Medical Consultation',
  availability: 'https://schema.org/InStock',
  itemOffered: {
    '@type': 'Service',
    serviceType: 'Medical Consultation',
    provider: {
      '@type': 'Physician',
      name: 'Dr. Kapil Agrawal',
      '@id': 'https://www.habiliteclinics.com/dr-kapil-agrawal#physician'
    }
  },
  seller: {
    '@type': 'MedicalOrganization',
    name: 'Habilite Clinics',
    '@id': 'https://www.habiliteclinics.com/#organization'
  }
}

export const contactPointSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  telephone: '+91-99994-56455',
  contactType: 'Customer Service',
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  availableLanguage: ['English', 'Hindi'],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00'
  }
}

