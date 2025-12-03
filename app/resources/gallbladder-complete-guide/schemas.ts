// This file contains all the JSON-LD schema definitions for the gallbladder complete guide page
// These are exported as constants to be used in the page component

export const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.habiliteclinics.com/resources/gallbladder-complete-guide',
  name: 'Gallbladder – A Complete Guide by Dr. Kapil Agrawal',
  description: 'Gallbladder awareness hub by Dr. Kapil Agrawal. Take a 30-second gallbladder self-check, decode ultrasound reports, and follow a doctor-approved diet chart.',
  url: 'https://www.habiliteclinics.com/resources/gallbladder-complete-guide',
  inLanguage: 'en-IN',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Habilite Clinics',
    url: 'https://www.habiliteclinics.com'
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Gallbladder Stones',
    alternateName: 'Cholelithiasis',
    description: 'Gallstones are hardened deposits of digestive fluid that can form in your gallbladder.'
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
  description: 'Habilite Clinics is a leading laparoscopic surgery center in Delhi, India, specializing in gallbladder surgery, bariatric surgery, and advanced minimally invasive procedures.',
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
  medicalSpecialty: [
    'Laparoscopic Surgery',
    'Gallbladder Surgery',
    'Bariatric Surgery',
    'Robotic Surgery',
    'Laser Surgery'
  ]
}

export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://www.habiliteclinics.com/dr-kapil-agrawal#physician',
  name: 'Dr. Kapil Agrawal',
  alternateName: 'Dr. Kapil Agrawal - Best Laparoscopic Surgeon in Delhi',
  description: 'Dr. Kapil Agrawal is a renowned laparoscopic and robotic surgeon in Delhi, India, with 23+ years of experience and 7000+ successful surgeries. Specializes in gallbladder surgery, bariatric surgery, and advanced minimally invasive procedures.',
  url: 'https://www.habiliteclinics.com/dr-kapil-agrawal',
  image: 'https://www.habiliteclinics.com/images/dr-kapil-agrawal.png',
  medicalSpecialty: [
    'Laparoscopic Surgery',
    'Robotic Surgery',
    'Gallbladder Surgery',
    'Bariatric Surgery',
    'Laser Surgery'
  ],
  telephone: '+91-99994-56455',
  email: 'contact@habiliteclinics.com',
  knowsAbout: [
    'Gallbladder Stones',
    'Cholecystectomy',
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
  name: 'Habilite Clinics - Best Gallbladder Surgery in Delhi',
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
  '@id': 'https://www.habiliteclinics.com/resources/gallbladder-complete-guide#service',
  serviceType: 'Medical Procedure',
  name: 'Gallbladder Stone Surgery - Laparoscopic Cholecystectomy',
  description: 'Expert laparoscopic gallbladder surgery (cholecystectomy) by Dr. Kapil Agrawal in Delhi, India. Advanced minimally invasive procedure for gallbladder stone removal with fast recovery and minimal scarring.',
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
    description: 'Laparoscopic Gallbladder Surgery Consultation',
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
      name: 'Gallbladder Complete Guide',
      item: 'https://www.habiliteclinics.com/resources/gallbladder-complete-guide'
    }
  ]
}

export const getFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes gallbladder stones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gallbladder stones (gallstones) form when bile contains too much cholesterol, bilirubin, or not enough bile salts to keep these substances dissolved. Factors include high-fat diets, rapid weight loss, obesity, genetics, and certain medical conditions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is gallbladder surgery the only treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surgery (cholecystectomy) is the only definitive cure for symptomatic gallstones. Medicines may temporarily manage pain or acidity but do not remove stones. Non-surgical options are limited to select cases and often have high recurrence rates.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I dissolve gallstones naturally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no proven natural remedies that reliably dissolve gallstones. Some medications can dissolve small cholesterol stones, but they work slowly and stones frequently recur. Medical evaluation is essential before trying any therapy.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to leave gallstones untreated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Silent stones can sometimes be monitored, but once they cause pain, infection, or pancreatitis, leaving them untreated can be dangerous. Untreated symptomatic stones may lead to recurrent attacks or emergencies.'
      }
    },
    {
      '@type': 'Question',
      name: 'What foods should be avoided if you have gallstones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Limit fried foods, high-fat dairy, red meat, processed snacks, and sugary desserts. Choose smaller meals, lean proteins, fibre-rich foods, and stay hydrated to reduce gallbladder stress.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long is recovery after gallbladder surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients recover within 1-2 weeks after laparoscopic gallbladder surgery. You can return to normal activities within a few days, with full recovery typically taking 2-4 weeks. Dr. Kapil Agrawal provides personalized recovery guidance for each patient.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the symptoms of gallbladder stones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common symptoms include pain on the right side of upper stomach, pain after oily/spicy meals, nausea or vomiting, bloating or indigestion, back or shoulder pain, fever with pain, and pain lasting more than 30-60 minutes.'
      }
    },
    {
      '@type': 'Question',
      name: 'When is gallbladder surgery necessary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surgery is necessary when stones cause pain, pain has repeated more than twice, stones are larger than 10 mm, gallbladder wall is thick on ultrasound, or there is sludge or infection noted. Dr. Kapil Agrawal evaluates each case individually.'
      }
    }
  ]
})

export const getHowToSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Check for Gallbladder Stone Symptoms - 30 Second Self-Check',
  description: 'A simple 30-second self-check guide to identify potential gallbladder stone symptoms. If two or more symptoms apply, consult with Dr. Kapil Agrawals gallbladder care team.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Check for pain on right side of upper stomach',
      text: 'Do you experience pain on the right side of your upper stomach?'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Check for pain after meals',
      text: 'Do you experience pain after oily or spicy meals?'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Check for nausea',
      text: 'Do you experience nausea or vomiting?'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Check for bloating',
      text: 'Do you experience bloating or indigestion?'
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Check for back or shoulder pain',
      text: 'Do you experience back or shoulder pain?'
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Check for fever',
      text: 'Do you experience fever with pain?'
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Check pain duration',
      text: 'Does the pain last more than 30-60 minutes?'
    },
    {
      '@type': 'HowToStep',
      position: 8,
      name: 'Consult if multiple symptoms',
      text: 'If two or more symptoms apply, its time to speak with Dr. Kapil Agrawals gallbladder care team for a personalized review.'
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
  name: 'Gallbladder Stones',
  alternateName: ['Cholelithiasis', 'Gallstones', 'Biliary Calculi'],
  description: 'Gallbladder stones are hardened deposits of digestive fluid (bile) that can form in your gallbladder. They can cause pain, inflammation, and complications if left untreated. Common causes include high cholesterol in bile, rapid weight loss, obesity, genetics, and certain medical conditions.',
  possibleTreatment: {
    '@type': 'MedicalTherapy',
    name: 'Laparoscopic Cholecystectomy',
    description: 'Minimally invasive surgical removal of the gallbladder'
  },
  signOrSymptom: [
    'Pain on right side of upper stomach',
    'Pain after oily/spicy meals',
    'Nausea or vomiting',
    'Bloating or indigestion',
    'Back or shoulder pain',
    'Fever with pain'
  ]
}

export const medicalProcedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Laparoscopic Cholecystectomy',
  alternateName: ['Laparoscopic Gallbladder Removal', 'Keyhole Gallbladder Surgery'],
  description: 'Minimally invasive surgical procedure to remove the gallbladder using small incisions and a laparoscope. Performed by Dr. Kapil Agrawal with 23+ years of experience.',
  procedureType: 'Surgical Procedure',
  preparation: 'Fasting, blood tests, ultrasound, pre-operative evaluation',
  followup: 'Post-operative care, diet modifications, activity restrictions',
  bodyLocation: 'Gallbladder',
  status: 'Active',
  code: {
    '@type': 'MedicalCode',
    codingSystem: 'ICD-10',
    code: 'K80.2'
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
    'Gallbladder Surgery',
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
  name: 'Laparoscopic Gallbladder Surgery',
  description: 'Specialized medical field focusing on minimally invasive gallbladder surgery procedures',
  code: {
    '@type': 'MedicalCode',
    codingSystem: 'SNOMED CT',
    code: '387713003'
  }
}

export const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Gallbladder Consultation with Dr. Kapil Agrawal',
  description: 'Expert consultation for gallbladder stone evaluation and treatment planning',
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

