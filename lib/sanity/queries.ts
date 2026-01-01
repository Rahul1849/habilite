import { groq } from "next-sanity";

// Home Page Query
export const homePageQuery = groq`*[_type == "home"][0]{
  _id,
  _type,
  bannerTitle,
  bannerSubtitle,
  bannerImage,
  servicesOverview,
  featuredServices[]->{
    _id,
    title,
    slug,
    shortDescription,
    image,
    icon,
  },
  featuredDoctors[]->{
    _id,
    name,
    slug,
    specialization,
    image,
  },
  testimonialsHighlight[]->{
    _id,
    name,
    message,
    rating,
    image,
    date,
  },
  seoTitle,
  seoDescription,
}`;

// Services Queries
export const allServicesQuery = groq`*[_type == "service"] | order(_createdAt desc){
  _id,
  _type,
  title,
  slug,
  category->{
    _id,
    title,
  },
  shortDescription,
  overview,
  description,
  procedureDetails,
  benefits,
  recoveryTime,
  cost,
  image,
  bannerImage,
  icon,
  featured,
  faqs,
  seoTitle,
  seoDescription,
  keywords,
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  slug,
  category->{
    _id,
    title,
  },
  shortDescription,
  overview,
  description,
  procedureDetails,
  benefits,
  recoveryTime,
  cost,
  image,
  bannerImage,
  icon,
  featured,
  faqs,
  seoTitle,
  seoDescription,
  keywords,
}`;

export const featuredServicesQuery = groq`*[_type == "service" && featured == true] | order(_createdAt desc){
  _id,
  _type,
  title,
  slug,
  shortDescription,
  image,
  icon,
}`;

// Doctors Queries
export const allDoctorsQuery = groq`*[_type == "doctor"] | order(_createdAt desc){
  _id,
  _type,
  name,
  slug,
  designation,
  specialization,
  specializations,
  qualifications,
  experience,
  experienceYears,
  image,
  bio,
  fullBio,
  email,
  phone,
  treatments,
  achievements,
  education,
  languages,
  consultationFee,
  availability,
  videoUrl,
}`;

export const doctorBySlugQuery = groq`*[_type == "doctor" && slug.current == $slug][0]{
  _id,
  _type,
  name,
  slug,
  designation,
  specialization,
  specializations,
  qualifications,
  experience,
  experienceYears,
  image,
  bio,
  fullBio,
  email,
  phone,
  treatments,
  achievements,
  education,
  languages,
  consultationFee,
  availability,
  videoUrl,
}`;

// Blogs Queries
export const allBlogsQuery = groq`*[_type == "blog"] | order(publishedAt desc){
  _id,
  _type,
  title,
  slug,
  category->{
    _id,
    title,
  },
  author,
  publishedAt,
  readTime,
  image,
  excerpt,
  content,
  seoTitle,
  seoDescription,
}`;

export const blogBySlugQuery = groq`*[_type == "blog" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  slug,
  category->{
    _id,
    title,
  },
  author,
  publishedAt,
  readTime,
  image,
  excerpt,
  content,
  seoTitle,
  seoDescription,
}`;

// Blog query with author name (for preview)
export const blogsQuery = groq`*[_type == "blog"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  mainImage,
  body,
  author,
  publishedAt,
  readTime,
  excerpt,
  category->{
    _id,
    title,
  },
  seoTitle,
  seoDescription,
}`;

export const blogBySlugQueryWithAuthor = groq`*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  image,
  content,
  author,
  publishedAt,
  readTime,
  excerpt,
  category->{
    _id,
    title,
  },
  "categoryId": category._ref,
  seoTitle,
  seoDescription,
}`;

export const recentBlogsQuery = groq`*[_type == "blog"] | order(publishedAt desc)[0...$limit]{
  _id,
  _type,
  title,
  slug,
  category->{
    _id,
    title,
  },
  author,
  publishedAt,
  readTime,
  image,
  excerpt,
  seoTitle,
  seoDescription,
}`;

export const relatedBlogsQuery = groq`*[_type == "blog" && slug.current != $currentSlug && category._ref == $categoryId] | order(publishedAt desc)[0...$limit]{
  _id,
  title,
  "slug": slug.current,
  image,
  excerpt,
  category->{
    _id,
    title,
  },
  publishedAt,
  readTime,
}`;

// Testimonials Queries
export const allTestimonialsQuery = groq`*[_type == "testimonial"] | order(date desc){
  _id,
  _type,
  name,
  patientAge,
  treatment,
  message,
  rating,
  service->{
    _id,
    title,
  },
  doctor->{
    _id,
    name,
  },
  date,
  image,
  featured,
  verified,
  tags,
}`;

export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(date desc){
  _id,
  _type,
  name,
  patientAge,
  treatment,
  message,
  rating,
  date,
  image,
  verified,
}`;

// FAQs Query
export const allFAQsQuery = groq`*[_type == "faq"] | order(order asc, _createdAt asc){
  _id,
  _type,
  question,
  answer,
  category,
  order,
}`;

// About Page Query
export const aboutPageQuery = groq`*[_type == "about"][0]{
  _id,
  _type,
  heroTitle,
  heroDescription,
  heroImage,
  mission,
  vision,
  whyChooseUs,
  stats,
  images,
  seoTitle,
  seoDescription,
}`;

// Global Settings Query
export const globalSettingsQuery = groq`*[_type == "globalSettings"][0]{
  _id,
  _type,
  siteName,
  logo,
  contactPhone,
  contactEmail,
  clinicAddress,
  whatsappNumber,
  appointmentCtaLink,
  socialMedia,
}`;

