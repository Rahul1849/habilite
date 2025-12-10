import { PortableTextBlock } from "@portabletext/types";

// Service Types
export interface Service {
  _id: string;
  _type: "service";
  title: string;
  slug: { current: string };
  category?: { _ref: string; title?: string };
  shortDescription?: string;
  overview?: PortableTextBlock[];
  description: PortableTextBlock[];
  procedureDetails?: string[];
  benefits?: string[];
  recoveryTime?: string;
  cost?: string;
  image?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  bannerImage?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  icon?: string;
  featured?: boolean;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

// Doctor Types
export interface Doctor {
  _id: string;
  _type: "doctor";
  name: string;
  slug: { current: string };
  designation?: string;
  specialization: string;
  specializations?: string[];
  qualifications?: string[];
  experience?: string;
  experienceYears?: number;
  image?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  bio?: string;
  fullBio?: PortableTextBlock[];
  email?: string;
  phone?: string;
  treatments?: string[];
  achievements?: string[];
  education?: Array<{
    degree: string;
    institution: string;
    year?: string;
  }>;
  languages?: string[];
  consultationFee?: string;
  availability?: string;
  videoUrl?: string;
}

// Blog Types
export interface Blog {
  _id: string;
  _type: "blog";
  title: string;
  slug: { current: string };
  category?: { _ref: string; title?: string };
  author: string;
  publishedAt?: string;
  readTime?: number;
  image?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  excerpt?: string;
  content: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}

// Testimonial Types
export interface Testimonial {
  _id: string;
  _type: "testimonial";
  name: string;
  patientAge?: number;
  treatment?: string;
  message: string;
  rating: number;
  service?: { _ref: string };
  doctor?: { _ref: string };
  date: string;
  image?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  featured?: boolean;
  verified?: boolean;
  tags?: string[];
}

// FAQ Types
export interface FAQ {
  _id: string;
  _type: "faq";
  question: string;
  answer: PortableTextBlock[];
  category?: string;
  order?: number;
}

// Home Page Types
export interface HomePage {
  _id: string;
  _type: "home";
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  servicesOverview?: string;
  featuredServices?: Array<{ _ref: string }>;
  featuredDoctors?: Array<{ _ref: string }>;
  testimonialsHighlight?: Array<{ _ref: string }>;
  seoTitle?: string;
  seoDescription?: string;
}

// About Page Types
export interface AboutPage {
  _id: string;
  _type: "about";
  heroTitle: string;
  heroDescription: string;
  heroImage?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  mission?: PortableTextBlock[];
  vision?: PortableTextBlock[];
  whyChooseUs?: Array<{
    title: string;
    description?: string;
    icon?: string;
  }>;
  stats?: Array<{
    number: string;
    label: string;
  }>;
  images?: Array<{
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  }>;
  seoTitle?: string;
  seoDescription?: string;
}

// Global Settings Types
export interface GlobalSettings {
  _id: string;
  _type: "globalSettings";
  siteName: string;
  logo?: {
    asset: { _ref: string; _type: "reference" };
    alt?: string;
  };
  contactPhone?: string;
  contactEmail?: string;
  clinicAddress?: string;
  whatsappNumber?: string;
  appointmentCtaLink?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };
}

