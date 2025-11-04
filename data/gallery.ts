export interface GalleryImage {
  id: string
  title: string
  category: string
  beforeImage: string
  afterImage: string
  treatment: string
  description?: string
  date: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Gallbladder Surgery - Before & After',
    category: 'Laparoscopic Surgery',
    beforeImage: 'https://picsum.photos/600/600?random=30',
    afterImage: 'https://picsum.photos/600/600?random=31',
    treatment: 'Laparoscopic Gallbladder Surgery',
    description: 'Patient recovered completely with minimal scarring',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Hernia Repair - Results',
    category: 'Hernia Surgery',
    beforeImage: 'https://picsum.photos/600/600?random=32',
    afterImage: 'https://picsum.photos/600/600?random=33',
    treatment: 'Hernia Surgery',
    description: 'Successful laparoscopic hernia repair',
    date: '2024-02-20'
  },
  {
    id: '3',
    title: 'Robotic Surgery - Recovery',
    category: 'Robotic Surgery',
    beforeImage: 'https://picsum.photos/600/600?random=34',
    afterImage: 'https://picsum.photos/600/600?random=35',
    treatment: 'Robotic Surgery',
    description: 'Excellent outcomes with robotic-assisted procedure',
    date: '2024-03-10'
  },
  {
    id: '4',
    title: 'Appendectomy - Quick Recovery',
    category: 'Emergency Surgery',
    beforeImage: 'https://picsum.photos/600/600?random=36',
    afterImage: 'https://picsum.photos/600/600?random=37',
    treatment: 'Appendectomy',
    description: 'Fast recovery with laparoscopic technique',
    date: '2024-02-14'
  },
  {
    id: '5',
    title: 'GI Surgery - Success Story',
    category: 'Gastrointestinal Surgery',
    beforeImage: 'https://picsum.photos/600/600?random=38',
    afterImage: 'https://picsum.photos/600/600?random=39',
    treatment: 'Gastrointestinal Surgery',
    description: 'Comprehensive treatment with excellent results',
    date: '2024-03-05'
  },
  {
    id: '6',
    title: 'Bariatric Surgery - Transformation',
    category: 'Bariatric Surgery',
    beforeImage: 'https://picsum.photos/600/600?random=40',
    afterImage: 'https://picsum.photos/600/600?random=41',
    treatment: 'Bariatric Surgery',
    description: 'Life-changing weight loss results',
    date: '2024-01-28'
  }
]

export const getGalleryByCategory = (category: string): GalleryImage[] => {
  return galleryImages.filter(image => image.category === category)
}

export const getGalleryByTreatment = (treatment: string): GalleryImage[] => {
  return galleryImages.filter(image => image.treatment === treatment)
}

export const categories = [
  'All',
  'Laparoscopic Surgery',
  'Hernia Surgery',
  'Robotic Surgery',
  'Emergency Surgery',
  'Gastrointestinal Surgery',
  'Bariatric Surgery'
]
