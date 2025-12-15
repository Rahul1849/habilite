export interface Testimonial {
  id: string
  patientName: string
  patientAge: number
  treatment: string
  rating: number
  text: string
  image?: string
  videoUrl?: string
  date: string
  verified: boolean
  tags?: string[]
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    patientName: 'Rajesh Kumar',
    patientAge: 45,
    treatment: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    text: 'Dr. Kapil Agrawal performed my gallbladder surgery with such precision and care. The recovery was much faster than I expected. The entire team at Habilite Clinics was professional and supportive throughout.',
    image: 'https://picsum.photos/150/150?random=20',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    patientName: 'Meera Singh',
    patientAge: 38,
    treatment: 'Hernia Surgery',
    rating: 5,
    text: 'I was very nervous about my hernia surgery, but Dr. Agrawal explained everything clearly and made me feel comfortable. The laparoscopic procedure was quick, and I was back to my normal routine in just a week. Highly recommended!',
    image: 'https://picsum.photos/150/150?random=21',
    date: '2024-02-20',
    verified: true
  },
  {
    id: '3',
    patientName: 'Ms. Tuba & her mother',
    patientAge: 52,
    treatment: 'Laparoscopic Gallbladder Stone Surgery',
    rating: 5,
    text: 'The robotic surgery experience was excellent. Less pain, faster recovery, and minimal scarring. Dr. Kapil Agrawal is truly an expert in his field. The hospital facilities are top-notch.',
    videoUrl: 'https://www.youtube.com/watch?v=N09RpTwI_HY',
    date: '2024-03-10',
    verified: true
  },
  {
    id: '4',
    patientName: 'Sunita Devi',
    patientAge: 60,
    treatment: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    text: 'At my age, I was worried about surgery, but the team at Habilite Clinics took excellent care of me. The procedure was smooth, and I recovered quickly. Thank you, Dr. Agrawal and team!',
    image: 'https://picsum.photos/150/150?random=22',
    date: '2024-01-28',
    verified: true
  },
  {
    id: '5',
    patientName: 'Vikram Patel',
    patientAge: 35,
    treatment: 'Appendectomy',
    rating: 5,
    text: 'Emergency appendectomy was performed efficiently. The staff was very responsive, and the care was excellent. I highly recommend Habilite Clinics for any surgical needs.',
    date: '2024-02-14',
    verified: true
  },
  {
    id: '6',
    patientName: 'Anita Reddy',
    patientAge: 48,
    treatment: 'Gastrointestinal Surgery',
    rating: 5,
    text: 'Dr. Agrawal\'s expertise in gastrointestinal surgery is unmatched. My recovery was smooth, and the follow-up care was thorough. Grateful for the excellent treatment.',
    videoUrl: 'https://www.youtube.com/watch?v=LTGyPysXqH4',
    date: '2024-03-05',
    verified: true
  },
  {
    id: '7',
    patientName: 'Varun Sharma',
    patientAge: 42,
    treatment: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    text: 'I\'m Varun from Gurgaon. Dr. Kapil Agrawal guided my gallbladder surgery via video consultation. Insurance was approved smoothly, surgery done same day, and I was discharged the next day. Thank you, Dr. Agrawal!',
    date: '2024-04-10',
    verified: true
  },
  {
    id: '8',
    patientName: 'Priya Mehta',
    patientAge: 35,
    treatment: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    text: 'Thank you, Dr. Agrawal, for the scar-free surgery. I was scared, but it was quick and painless. I returned home the next day. Grateful for your support!',
    date: '2024-04-15',
    verified: true
  },
  {
    id: '9',
    patientName: 'Ramesh Kumar',
    patientAge: 55,
    treatment: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    text: 'Dr. Kapil Agrawal is among the best gallbladder stone surgeons in Delhi. Skilled, compassionate, and supported by a great team. My laparoscopic surgery went perfectly and was stress-free.',
    date: '2024-04-20',
    verified: true
  },
  {
    id: '10',
    patientName: 'Sunil Gupta',
    patientAge: 68,
    treatment: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    text: 'Dr. Agrawal operated on my 85-year-old father with diabetes and heart issues. Despite the complex case, the surgery was handled brilliantly. We were initially concerned about expenses. His team helped us with 0% EMI, and the surgery was done at Apollo Spectra. My father was discharged just 36 hours later. He is now completely healthy. Thank you!',
    date: '2024-05-01',
    verified: true
  },
  {
    id: '11',
    patientName: 'Kavita Singh',
    patientAge: 40,
    treatment: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    text: 'Worried about gallstone surgery costs, I found Dr. Kapil. He suggested an affordable hospital. The surgery was painless, and I was discharged the next day. Great care and experience!',
    date: '2024-05-10',
    verified: true
  }
]

export const getTestimonialsByTreatment = (treatment: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.treatment === treatment)
}

export const getVideoTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.videoUrl)
}
