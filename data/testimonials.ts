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
    patientName: 'Amit Verma',
    patientAge: 52,
    treatment: 'Robotic Surgery',
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
  }
]

export const getTestimonialsByTreatment = (treatment: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.treatment === treatment)
}

export const getVideoTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.videoUrl)
}
