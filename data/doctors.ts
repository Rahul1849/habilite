export interface Doctor {
  id: string
  name: string
  slug: string
  designation: string
  qualifications: string[]
  experience: string
  specialization: string[]
  bio: string
  image: string
  videoUrl?: string
  treatments: string[]
  achievements: string[]
  education: Education[]
  languages: string[]
  consultationFee: string
  availability: string
}

export interface Education {
  degree: string
  institution: string
  year: string
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Kapil Agrawal',
    slug: 'dr-kapil-agrawal',
    designation: 'Senior Consultant - Laparoscopic & Robotic Surgeon',
    qualifications: [
      'MBBS - Maulana Azad Medical College, Delhi',
      'MS (General Surgery) - AIIMS, Delhi',
      'MCh (Minimal Access Surgery) - AIIMS, Delhi',
      'Fellowship in Robotic Surgery - USA'
    ],
    experience: '15+ years',
    specialization: [
      'Laparoscopic Surgery',
      'Robotic Surgery',
      'Gallbladder Surgery',
      'Hernia Surgery',
      'Gastrointestinal Surgery',
      'Bariatric Surgery'
    ],
    bio: 'Dr. Kapil Agrawal is a renowned laparoscopic and robotic surgeon with over 15 years of experience. He has performed thousands of successful surgeries and is known for his expertise in minimally invasive procedures. He is committed to providing the highest quality care with a patient-centered approach.',
    image: 'https://picsum.photos/600/600?random=10',
    videoUrl: 'https://www.youtube.com/embed/example',
    treatments: [
      'Laparoscopic Gallbladder Surgery',
      'Hernia Surgery',
      'Robotic Surgery',
      'Gastrointestinal Surgery',
      'Appendectomy',
      'Bariatric Surgery'
    ],
    achievements: [
      'Performed 5000+ successful laparoscopic surgeries',
      'Awarded Best Laparoscopic Surgeon 2023',
      'Published 50+ research papers',
      'International speaker and trainer'
    ],
    education: [
      {
        degree: 'MBBS',
        institution: 'Maulana Azad Medical College, Delhi',
        year: '2005'
      },
      {
        degree: 'MS (General Surgery)',
        institution: 'AIIMS, Delhi',
        year: '2010'
      },
      {
        degree: 'MCh (Minimal Access Surgery)',
        institution: 'AIIMS, Delhi',
        year: '2013'
      }
    ],
    languages: ['English', 'Hindi'],
    consultationFee: '₹1,500',
    availability: 'Mon-Sat: 10 AM - 6 PM'
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    slug: 'dr-priya-sharma',
    designation: 'Consultant - General & Laparoscopic Surgeon',
    qualifications: [
      'MBBS - Lady Hardinge Medical College, Delhi',
      'MS (General Surgery) - AIIMS, Delhi'
    ],
    experience: '10+ years',
    specialization: [
      'General Surgery',
      'Laparoscopic Surgery',
      'Breast Surgery',
      'Thyroid Surgery'
    ],
    bio: 'Dr. Priya Sharma is an experienced general and laparoscopic surgeon specializing in breast and thyroid surgeries. She is known for her compassionate care and excellent surgical outcomes.',
    image: 'https://picsum.photos/600/600?random=11',
    treatments: [
      'Laparoscopic Surgery',
      'Breast Surgery',
      'Thyroid Surgery',
      'General Surgery'
    ],
    achievements: [
      'Performed 2000+ successful surgeries',
      'Specialist in breast conservation surgery',
      'Expert in minimally invasive techniques'
    ],
    education: [
      {
        degree: 'MBBS',
        institution: 'Lady Hardinge Medical College, Delhi',
        year: '2010'
      },
      {
        degree: 'MS (General Surgery)',
        institution: 'AIIMS, Delhi',
        year: '2015'
      }
    ],
    languages: ['English', 'Hindi'],
    consultationFee: '₹1,200',
    availability: 'Mon-Fri: 11 AM - 5 PM'
  }
]

export const getDoctorBySlug = (slug: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.slug === slug)
}
