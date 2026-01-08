export const SITE_URL = 'https://www.habiliteclinics.com'

export const CLINIC_INFO = {
  name: 'Habilite Clinics',
  description:
    'Leading laparoscopic, robotic, and laser surgery centre in Delhi NCR offering advanced treatment for gallbladder, hernia, bariatric, and colorectal conditions.',
  logo: '/logo.png',
  image: '/images/dr-kapil-agrawal.png',
  telephonePrimary: '+91-99994-56455',
  telephoneSecondary: '+91-99100-24564',
  emails: ['contact@habiliteclinics.com', 'info@habiliteclinics.com'],
  address: {
    streetAddress: 'M 11, Block M, Lajpat Nagar Road, Lajpat Nagar 2',
    locality: 'New Delhi',
    region: 'Delhi',
    postalCode: '110024',
    country: 'IN',
  },
  geo: {
    latitude: '28.5675',
    longitude: '77.2430',
  },
  openingHours: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '21:00',
  },
  socialProfiles: [
    'https://www.facebook.com/habiliteclinics',
    'https://www.instagram.com/habiliteclinics',
    'https://www.youtube.com/@habiliteclinics',
    'https://www.linkedin.com/company/habiliteclinics',
  ],
  areaServed: ['Delhi', 'Gurgaon', 'Noida', 'Ghaziabad', 'Faridabad', 'India'],
}

export const DOCTOR_INFO = {
  name: 'Dr. Kapil Agrawal',
  title: 'Senior Consultant – Laparoscopic & Robotic Surgeon',
  description:
    'Dr. Kapil Agrawal is an internationally trained laparoscopic and robotic surgeon with 23+ years of experience and 7000+ successful surgeries. He leads the advanced surgical program at Habilite Clinics, Delhi.',
  image: '/images/dr-kapil-agrawal.png',
  url: `${SITE_URL}/dr-kapil-agrawal`,
  sameAs: [
    'https://www.linkedin.com/in/dr-kapil-agrawal',
    'https://www.youtube.com/@drkapilagrawal',
    'https://www.facebook.com/habiliteclinics',
  ],
  // Use schema.org MedicalSpecialty enumeration values
  medicalSpecialty: ['Surgical', 'Gastroenterologic', 'DietNutrition'],
  education: ['Apollo Hospitals Group', 'Royal College of Surgeons (Hon)'],
  award: 'Best Laparoscopic Surgeon in Delhi NCR',
  worksFor: `${SITE_URL}#organization`,
}

export const absoluteUrl = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`)

