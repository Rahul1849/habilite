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
      'MBBS - Institute of Medical Sciences, BHU, Varanasi',
      'MS (Surgery) - Institute of Medical Sciences, BHU, Varanasi',
      'MRCS (London, U.K) - Royal College of Surgeons, London',
      'MMED (Singapore) - National University of Singapore',
      'FMAS - Fellowship in Minimal Access Surgery'
    ],
    experience: '27+ years',
    specialization: [
      'Laparoscopic Surgery',
      'Robotic Surgery',
      'Gallbladder Surgery',
      'Hernia Surgery',
      'Gastrointestinal Surgery',
      'Bariatric Surgery'
    ],
    bio: 'Dr. Kapil Agrawal is a leading and one of the best Robotic and Laparoscopic Surgeon in Delhi, India. He has an overall experience of 27+ years and has been working as a Senior Consultant Surgeon at Apollo Group of Hospitals, New Delhi, India. He is performing advanced laparoscopic and robotic surgeries for various conditions, which include Gallbladder stones, Hernia, Appendicitis, Rectal prolapse, and pseudo-pancreatic cyst. He is also offering a complete range of bariatric or weight loss surgeries, which are performed both by laparoscopic and robotic approaches.',
    image: '/images/dr-kapil-agrawal.png',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    treatments: [
      'Laparoscopic Gallbladder Surgery',
      'Hernia Surgery',
      'Robotic Surgery',
      'Gastrointestinal Surgery',
      'Appendectomy',
      'Bariatric Surgery'
    ],
    achievements: [
      'Performed 7000+ successful laparoscopic and robotic surgeries',
      'Senior Consultant at Apollo Group of Hospitals, Delhi NCR',
      'International training from London, U.K. and Singapore',
      'Expert in single-port laparoscopic surgery',
      'Leading surgeon for complex bariatric procedures',
      'Recognized for excellence in minimally invasive techniques'
    ],
    education: [
      {
        degree: 'MBBS',
        institution: 'Institute of Medical Sciences, BHU, Varanasi',
        year: '2002'
      },
      {
        degree: 'MS (Surgery)',
        institution: 'Institute of Medical Sciences, BHU, Varanasi',
        year: '2005'
      },
      {
        degree: 'MRCS (London, U.K)',
        institution: 'Royal College of Surgeons, London',
        year: '2007'
      },
      {
        degree: 'MMED (Singapore)',
        institution: 'National University of Singapore',
        year: '2009'
      },
      {
        degree: 'FMAS',
        institution: 'Fellowship in Minimal Access Surgery',
        year: '2010'
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
