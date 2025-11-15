export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  publishedDate: string
  updatedDate?: string
  image: string
  category: string
  tags: string[]
  readTime: number
  seoTitle?: string
  seoDescription?: string
  tableOfContents?: TableOfContentsItem[]
  faqSchema?: FAQ[]
}

export interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

export interface FAQ {
  question: string
  answer: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Laparoscopic Surgery: Benefits and Recovery',
    slug: 'understanding-laparoscopic-surgery-benefits-recovery',
    excerpt: 'Learn about the advantages of laparoscopic surgery, including faster recovery times, minimal scarring, and reduced post-operative pain.',
    content: `
# Understanding Laparoscopic Surgery: Benefits and Recovery

Laparoscopic surgery, also known as minimally invasive surgery, has revolutionized the field of surgical procedures. This advanced technique offers numerous benefits over traditional open surgery.

## What is Laparoscopic Surgery?

Laparoscopic surgery is a surgical technique that uses small incisions (typically 0.5-1cm) and specialized instruments to perform procedures. A laparoscope, which is a thin tube with a camera and light, is inserted through one of the incisions, allowing the surgeon to visualize the surgical area on a monitor.

## Key Benefits

### 1. Minimal Scarring
Unlike traditional open surgery that requires large incisions, laparoscopic surgery uses small incisions that heal with minimal visible scarring.

### 2. Faster Recovery
Patients typically experience faster recovery times compared to open surgery. Most patients can return to normal activities within a few days.

### 3. Reduced Pain
Smaller incisions mean less tissue trauma, resulting in significantly reduced post-operative pain.

### 4. Lower Risk of Infection
Smaller incisions reduce the risk of surgical site infections.

### 5. Quicker Return to Work
Most patients can return to work within a week, compared to several weeks with traditional surgery.

## Recovery Process

### Immediate Post-Operative Period
- Most patients can go home the same day or next morning
- Minimal pain medication required
- Can resume light activities within 24-48 hours

### First Week
- Gradual increase in activity level
- Return to desk work typically possible
- Follow-up appointment scheduled

### Long-term Recovery
- Full recovery usually achieved within 2-3 weeks
- Return to all normal activities
- Minimal dietary restrictions

## Conclusion

Laparoscopic surgery offers significant advantages for patients requiring surgical intervention. If you're considering surgery, consult with a qualified laparoscopic surgeon to determine if this approach is right for you.
    `,
    author: 'Dr. Kapil Agrawal',
    authorImage: 'https://picsum.photos/150/150?random=50',
    publishedDate: '2024-01-15',
    image: 'https://picsum.photos/1200/600?random=60',
    category: 'Laparoscopic Surgery',
    tags: ['Laparoscopic Surgery', 'Minimally Invasive', 'Recovery'],
    readTime: 5,
    seoTitle: 'Understanding Laparoscopic Surgery: Benefits and Recovery Guide',
    seoDescription: 'Learn about laparoscopic surgery benefits, recovery process, and why it\'s preferred over traditional open surgery.',
    tableOfContents: [
      { id: 'what-is-laparoscopic-surgery', title: 'What is Laparoscopic Surgery?', level: 2 },
      { id: 'key-benefits', title: 'Key Benefits', level: 2 },
      { id: 'recovery-process', title: 'Recovery Process', level: 2 },
      { id: 'conclusion', title: 'Conclusion', level: 2 }
    ],
    faqSchema: [
      {
        question: 'How long does it take to recover from laparoscopic surgery?',
        answer: 'Most patients recover within 2-3 weeks, with many returning to normal activities within a few days.'
      },
      {
        question: 'Is laparoscopic surgery safer than open surgery?',
        answer: 'Laparoscopic surgery generally has lower risks of infection and complications due to smaller incisions.'
      }
    ]
  },
  {
    id: '2',
    title: 'Hernia Surgery: Types, Treatment Options, and Recovery',
    slug: 'hernia-surgery-types-treatment-options-recovery',
    excerpt: 'Comprehensive guide to hernia surgery, including different types of hernias, treatment options, and what to expect during recovery.',
    content: `
# Hernia Surgery: Types, Treatment Options, and Recovery

A hernia occurs when an organ or fatty tissue squeezes through a weak spot in a surrounding muscle or connective tissue. This comprehensive guide covers everything you need to know about hernia surgery.

## Types of Hernias

### Inguinal Hernia
The most common type, occurring in the groin area. More common in men.

### Umbilical Hernia
Occurs near the belly button, common in infants and adults.

### Incisional Hernia
Develops at the site of a previous surgical incision.

### Hiatal Hernia
Occurs when part of the stomach pushes up through the diaphragm.

## Treatment Options

### Laparoscopic Hernia Repair
Minimally invasive approach using small incisions and mesh reinforcement.

### Open Hernia Repair
Traditional approach with a larger incision.

### Robotic-Assisted Repair
Advanced technique using robotic technology for enhanced precision.

## Recovery Timeline

### Week 1
- Rest and light activities
- Avoid heavy lifting
- Follow-up appointment

### Week 2-3
- Gradual increase in activity
- Return to work (desk jobs)
- Light exercise may be possible

### Month 2-3
- Full recovery for most patients
- Return to all activities
- Follow-up as needed

## Conclusion

Hernia surgery is a common and highly successful procedure. Modern techniques offer faster recovery and better outcomes.
    `,
    author: 'Dr. Kapil Agrawal',
    authorImage: 'https://picsum.photos/150/150?random=50',
    publishedDate: '2024-02-10',
    image: 'https://picsum.photos/1200/600?random=61',
    category: 'Hernia',
    tags: ['Hernia', 'Surgery', 'Recovery'],
    readTime: 7,
    faqSchema: [
      {
        question: 'How long before I can return to work after hernia surgery?',
        answer: 'Most patients can return to desk work in 3-5 days and physical work in 2-3 weeks.'
      }
    ]
  },
  {
    id: '3',
    title: 'Robotic Surgery: The Future of Minimally Invasive Procedures',
    slug: 'robotic-surgery-future-minimally-invasive',
    excerpt: 'Explore how robotic surgery is transforming healthcare with enhanced precision, better outcomes, and faster recovery times.',
    content: `
# Robotic Surgery: The Future of Minimally Invasive Procedures

Robotic surgery represents the cutting edge of surgical technology, offering unprecedented precision and control.

## What is Robotic Surgery?

Robotic surgery uses advanced computer-controlled systems to assist surgeons in performing complex procedures with enhanced precision.

## Advantages

- Enhanced 3D visualization
- Greater precision and control
- Reduced blood loss
- Faster patient recovery
- Less post-operative pain

## Applications

Robotic surgery is used in various specialties including:
- General surgery
- Urology
- Gynecology
- Cardiothoracic surgery

## The Future

As technology advances, robotic surgery continues to evolve, offering even better outcomes for patients.
    `,
    author: 'Dr. Kapil Agrawal',
    authorImage: 'https://picsum.photos/150/150?random=50',
    publishedDate: '2024-03-01',
    image: 'https://picsum.photos/1200/600?random=62',
    category: 'Laparoscopic Surgery',
    tags: ['Robotic Surgery', 'Technology', 'Innovation'],
    readTime: 6
  }
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category)
}

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPostBySlug(currentSlug)
  if (!currentPost) return []
  
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit)
}
