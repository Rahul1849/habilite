export interface Service {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  fullDescription: string
  overview: string
  procedureDetails: string[]
  benefits: string[]
  recoveryTime: string
  cost: string
  image: string
  icon: string
  featured: boolean
  seoTitle?: string
  seoDescription?: string
  faqs: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Laparoscopic Surgery',
    slug: 'laparoscopic-gallbladder-surgery',
    category: 'Laparoscopic Surgery',
    shortDescription: 'Minimally invasive gallbladder stone removal with faster recovery.',
    fullDescription: 'Laparoscopic cholecystectomy is a minimally invasive surgical procedure to remove the gallbladder. This procedure is performed using small incisions and a camera, resulting in less pain, faster recovery, and minimal scarring compared to traditional open surgery.',
    overview: 'Laparoscopic gallbladder surgery, also known as laparoscopic cholecystectomy, is the gold standard for treating gallbladder stones and related conditions. This minimally invasive procedure uses advanced technology to remove the gallbladder through small incisions, significantly reducing recovery time and post-operative pain.',
    procedureDetails: [
      'Small incisions (0.5-1cm) are made in the abdomen',
      'A laparoscope (tiny camera) is inserted to visualize the surgical area',
      'Specialized instruments are used to carefully remove the gallbladder',
      'The procedure typically takes 30-60 minutes',
      'Most patients can go home the same day or next morning'
    ],
    benefits: [
      'Minimal scarring (4 small incisions vs 1 large incision)',
      'Faster recovery time (2-3 days vs 1-2 weeks)',
      'Reduced post-operative pain',
      'Lower risk of infection',
      'Quick return to normal activities'
    ],
    recoveryTime: 'Most patients return to normal activities within 3-5 days',
    cost: '₹50,000 - ₹1,50,000',
    image: 'https://picsum.photos/800/600?random=1',
    icon: '🏥',
    featured: true,
    seoTitle: 'Laparoscopic Gallbladder Surgery in Delhi | Dr. Kapil Agrawal',
    seoDescription: 'Expert laparoscopic gallbladder surgery in Delhi. Minimally invasive procedure with faster recovery. Book consultation with Dr. Kapil Agrawal.',
    faqs: [
      {
        question: 'How long does laparoscopic gallbladder surgery take?',
        answer: 'The procedure typically takes 30-60 minutes, depending on the complexity of the case.'
      },
      {
        question: 'What is the recovery time after gallbladder surgery?',
        answer: 'Most patients can return to normal activities within 3-5 days, with full recovery in 1-2 weeks.'
      },
      {
        question: 'Will I need to change my diet after gallbladder removal?',
        answer: 'Most people can resume a normal diet after recovery. Some may need to avoid very fatty foods initially.'
      }
    ]
  },
  {
    id: '2',
    name: 'Laser Surgery',
    slug: 'hernia-surgery',
    category: 'Laparoscopic Surgery',
    shortDescription: 'Advanced laparoscopic hernia repair with minimal downtime.',
    fullDescription: 'Laparoscopic hernia repair is a minimally invasive procedure to fix hernias using mesh reinforcement. This technique offers reduced pain, faster recovery, and excellent long-term results.',
    overview: 'Hernia surgery using laparoscopic techniques provides a superior alternative to traditional open surgery. The procedure involves repairing the weakened abdominal wall using synthetic mesh, which significantly reduces the risk of recurrence.',
    procedureDetails: [
      'General anesthesia is administered',
      'Small incisions are made near the hernia site',
      'The hernia is visualized using a laparoscope',
      'A mesh is placed to reinforce the abdominal wall',
      'The hernia is repaired from the inside'
    ],
    benefits: [
      'Lower recurrence rate',
      'Less post-operative pain',
      'Faster return to work',
      'Bilateral hernias can be repaired simultaneously',
      'Minimal scarring'
    ],
    recoveryTime: 'Return to light activities in 3-5 days, full recovery in 2-3 weeks',
    cost: '₹60,000 - ₹2,00,000',
    image: 'https://picsum.photos/800/600?random=2',
    icon: '⚕️',
    featured: true,
    faqs: [
      {
        question: 'What types of hernias can be treated laparoscopically?',
        answer: 'Most abdominal hernias including inguinal, umbilical, and incisional hernias can be treated with laparoscopic surgery.'
      },
      {
        question: 'How long before I can return to work?',
        answer: 'Most patients return to desk work in 3-5 days and physical work in 2-3 weeks.'
      }
    ]
  },
  {
    id: '3',
    name: 'Bariatrics Surgery',
    slug: 'robotic-surgery',
    category: 'Robotic Surgery',
    shortDescription: 'State-of-the-art robotic-assisted surgery for precision and accuracy.',
    fullDescription: 'Robotic surgery uses advanced da Vinci systems to perform complex procedures with enhanced precision, 3D visualization, and improved outcomes.',
    overview: 'Robotic-assisted surgery represents the pinnacle of minimally invasive surgery. Using the da Vinci Surgical System, surgeons can perform complex procedures with enhanced dexterity, precision, and control.',
    procedureDetails: [
      'Surgeon controls robotic arms from a console',
      '3D high-definition visualization',
      'Enhanced precision and control',
      'Reduced blood loss and trauma',
      'Faster patient recovery'
    ],
    benefits: [
      'Enhanced precision and accuracy',
      '3D visualization of surgical field',
      'Reduced blood loss',
      'Less pain and scarring',
      'Faster recovery times'
    ],
    recoveryTime: 'Varies by procedure, generally 30-50% faster than traditional surgery',
    cost: '₹1,50,000 - ₹5,00,000',
    image: 'https://picsum.photos/800/600?random=3',
    icon: '🤖',
    featured: true,
    faqs: [
      {
        question: 'What procedures can be done with robotic surgery?',
        answer: 'Robotic surgery can be used for various procedures including hernia repair, gallbladder removal, and complex gastrointestinal surgeries.'
      },
      {
        question: 'Is robotic surgery safer than traditional surgery?',
        answer: 'Robotic surgery offers enhanced precision and visualization, often resulting in better outcomes and faster recovery.'
      }
    ]
  },
  {
    id: '4',
    name: 'Gastrointestinal Surgery',
    slug: 'gastrointestinal-surgery',
    category: 'General Surgery',
    shortDescription: 'Comprehensive treatment for GI conditions and disorders.',
    fullDescription: 'Advanced surgical treatment for various gastrointestinal conditions including appendicitis, intestinal obstruction, and inflammatory bowel disease.',
    overview: 'Gastrointestinal surgery encompasses a wide range of procedures to treat conditions affecting the digestive system. We use minimally invasive techniques whenever possible.',
    procedureDetails: [
      'Comprehensive evaluation and diagnosis',
      'Minimally invasive approach preferred',
      'Specialized surgical techniques',
      'Post-operative care and monitoring',
      'Follow-up care and support'
    ],
    benefits: [
      'Comprehensive treatment approach',
      'Minimally invasive options',
      'Expert surgical care',
      'Personalized treatment plans'
    ],
    recoveryTime: 'Varies by procedure and patient condition',
    cost: '₹80,000 - ₹3,00,000',
    image: 'https://picsum.photos/800/600?random=4',
    icon: '🩺',
    featured: false,
    faqs: []
  },
  {
    id: '5',
    name: 'Appendectomy',
    slug: 'appendectomy',
    category: 'Laparoscopic Surgery',
    shortDescription: 'Laparoscopic appendectomy for acute appendicitis.',
    fullDescription: 'Laparoscopic appendectomy is the preferred method for removing an infected appendix, offering faster recovery and less pain.',
    overview: 'Appendectomy is the surgical removal of the appendix, typically performed as an emergency procedure for appendicitis. Laparoscopic appendectomy is now the standard of care.',
    procedureDetails: [
      'Emergency evaluation and diagnosis',
      'Laparoscopic removal of appendix',
      'Small incisions in the abdomen',
      'Quick recovery and discharge'
    ],
    benefits: [
      'Faster recovery',
      'Less post-operative pain',
      'Minimal scarring',
      'Lower infection risk'
    ],
    recoveryTime: '1-2 weeks for full recovery',
    cost: '₹40,000 - ₹1,20,000',
    image: 'https://picsum.photos/800/600?random=5',
    icon: '🏥',
    featured: false,
    faqs: []
  },
  {
    id: '6',
    name: 'Bariatric Surgery',
    slug: 'bariatric-surgery',
    category: 'Weight Loss Surgery',
    shortDescription: 'Surgical weight loss solutions for sustainable results.',
    fullDescription: 'Bariatric surgery offers effective, long-term weight loss solutions for individuals struggling with obesity and related health conditions.',
    overview: 'Bariatric surgery is a life-changing procedure that helps individuals achieve significant and sustainable weight loss. We offer various bariatric procedures tailored to individual needs.',
    procedureDetails: [
      'Comprehensive pre-operative evaluation',
      'Surgical procedure (gastric bypass, sleeve, etc.)',
      'Post-operative care and monitoring',
      'Nutritional counseling',
      'Long-term follow-up support'
    ],
    benefits: [
      'Significant weight loss',
      'Improvement in obesity-related conditions',
      'Long-term results',
      'Enhanced quality of life'
    ],
    recoveryTime: '2-4 weeks for initial recovery',
    cost: '₹2,00,000 - ₹5,00,000',
    image: 'https://picsum.photos/800/600?random=6',
    icon: '⚖️',
    featured: false,
    faqs: []
  }
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug)
}

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category)
}

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured)
}
