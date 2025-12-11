import { sanityClient, getClient } from "./client";
import {
  homePageQuery,
  allServicesQuery,
  serviceBySlugQuery,
  featuredServicesQuery,
  allDoctorsQuery,
  doctorBySlugQuery,
  allBlogsQuery,
  blogBySlugQuery,
  recentBlogsQuery,
  allTestimonialsQuery,
  featuredTestimonialsQuery,
  allFAQsQuery,
  aboutPageQuery,
  globalSettingsQuery,
} from "./queries";
import type {
  HomePage,
  Service,
  Doctor,
  Blog,
  Testimonial,
  FAQ,
  AboutPage,
  GlobalSettings,
} from "./types";

// Fetch Home Page Data
export async function getHomePage(): Promise<HomePage | null> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getHomePage");
      return null;
    }
    const data = await client.fetch<HomePage>(homePageQuery);
    return data || null;
  } catch (error) {
    console.error("Error fetching home page:", error);
    return null;
  }
}

// Fetch Services
export async function getAllServices(): Promise<Service[]> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getAllServices");
      return [];
    }
    const data = await client.fetch<Service[]>(allServicesQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getServiceBySlug");
      return null;
    }
    const data = await client.fetch<Service | null>(serviceBySlugQuery, { slug });
    return data || null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export async function getFeaturedServices(): Promise<Service[]> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getFeaturedServices");
      return [];
    }
    const data = await client.fetch<Service[]>(featuredServicesQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching featured services:", error);
    return [];
  }
}

// Fetch Doctors
export async function getAllDoctors(): Promise<Doctor[]> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getAllDoctors");
      return [];
    }
    const data = await client.fetch<Doctor[]>(allDoctorsQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getDoctorBySlug");
      return null;
    }
    const data = await client.fetch<Doctor | null>(doctorBySlugQuery, { slug });
    return data || null;
  } catch (error) {
    console.error("Error fetching doctor:", error);
    return null;
  }
}

// Fetch Blogs
export async function getAllBlogs(preview: boolean = false): Promise<Blog[]> {
  try {
    const client = getClient(preview);
    if (!client) {
      console.warn("Sanity client not configured for getAllBlogs");
      return [];
    }
    const data = await client.fetch<Blog[]>(allBlogsQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string, preview: boolean = false): Promise<Blog | null> {
  try {
    const client = getClient(preview);
    if (!client) {
      console.warn("Sanity client not configured for getBlogBySlug");
      return null;
    }
    const data = await client.fetch<Blog | null>(blogBySlugQuery, { slug });
    return data || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function getRecentBlogs(limit: number = 3, preview: boolean = false): Promise<Blog[]> {
  try {
    const client = getClient(preview);
    if (!client) {
      console.warn("Sanity client not configured for getRecentBlogs");
      return [];
    }
    const data = await client.fetch<Blog[]>(recentBlogsQuery, { limit });
    return data || [];
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
}

// Fetch Testimonials
export async function getAllTestimonials(): Promise<Testimonial[]> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getAllTestimonials");
      return [];
    }
    const data = await client.fetch<Testimonial[]>(allTestimonialsQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getFeaturedTestimonials");
      return [];
    }
    const data = await client.fetch<Testimonial[]>(featuredTestimonialsQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching featured testimonials:", error);
    return [];
  }
}

// Fetch FAQs
export async function getAllFAQs(): Promise<FAQ[]> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getAllFAQs");
      return [];
    }
    const data = await client.fetch<FAQ[]>(allFAQsQuery);
    return data || [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

// Fetch About Page
export async function getAboutPage(): Promise<AboutPage | null> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getAboutPage");
      return null;
    }
    const data = await client.fetch<AboutPage | null>(aboutPageQuery);
    return data || null;
  } catch (error) {
    console.error("Error fetching about page:", error);
    return null;
  }
}

// Fetch Global Settings
export async function getGlobalSettings(): Promise<GlobalSettings | null> {
  try {
    const client = sanityClient || getClient(false);
    if (!client) {
      console.warn("Sanity client not configured for getGlobalSettings");
      return null;
    }
    const data = await client.fetch<GlobalSettings | null>(globalSettingsQuery);
    return data || null;
  } catch (error) {
    console.error("Error fetching global settings:", error);
    return null;
  }
}

