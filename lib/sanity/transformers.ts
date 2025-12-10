import type { Service, Doctor, Blog, Testimonial, FAQ } from "./types";
import type { Service as LegacyService } from "@/data/services";
import type { Doctor as LegacyDoctor } from "@/data/doctors";
import type { Testimonial as LegacyTestimonial } from "@/data/testimonials";
import { getImageUrl } from "./utils";

// Transform Sanity Service to Legacy Format
export function transformService(service: Service): LegacyService {
  return {
    id: service._id,
    name: service.title,
    slug: service.slug?.current || "",
    category: service.category?.title || "",
    shortDescription: service.shortDescription || "",
    fullDescription: "", // Will be rendered as PortableText
    overview: "", // Will be rendered as PortableText
    procedureDetails: service.procedureDetails || [],
    benefits: service.benefits || [],
    recoveryTime: service.recoveryTime || "",
    cost: service.cost || "",
    image: getImageUrl(service.image) || "",
    icon: service.icon || "🏥",
    featured: service.featured || false,
    seoTitle: service.seoTitle,
    seoDescription: service.seoDescription,
    keywords: service.keywords || [],
    faqs: (service.faqs || []).map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  };
}

// Transform Sanity Doctor to Legacy Format
export function transformDoctor(doctor: Doctor): LegacyDoctor {
  return {
    id: doctor._id,
    name: doctor.name,
    slug: doctor.slug?.current || "",
    designation: doctor.designation || "",
    qualifications: doctor.qualifications || [],
    experience: doctor.experience || "",
    specialization: Array.isArray(doctor.specialization)
      ? doctor.specialization
      : doctor.specialization
      ? [doctor.specialization]
      : [],
    bio: doctor.bio || "",
    image: getImageUrl(doctor.image) || "",
    videoUrl: doctor.videoUrl,
    treatments: doctor.treatments || [],
    achievements: doctor.achievements || [],
    education: (doctor.education || []).map((edu) => ({
      degree: edu.degree,
      institution: edu.institution,
      year: edu.year || "",
    })),
    languages: doctor.languages || [],
    consultationFee: doctor.consultationFee || "",
    availability: doctor.availability || "",
  };
}

// Transform Sanity Testimonial to Legacy Format
export function transformTestimonial(testimonial: Testimonial): LegacyTestimonial {
  return {
    id: testimonial._id,
    patientName: testimonial.name,
    patientAge: testimonial.patientAge || 0,
    treatment: testimonial.treatment || "",
    rating: testimonial.rating,
    text: testimonial.message,
    image: getImageUrl(testimonial.image) || undefined,
    videoUrl: undefined, // Add if needed in schema
    date: testimonial.date,
    verified: testimonial.verified || false,
    tags: testimonial.tags || [],
  };
}

// Transform Sanity FAQ to Legacy Format
export function transformFAQ(faq: FAQ): { question: string; answer: string } {
  // For now, convert PortableText to plain text
  // In components, we'll use renderPortableText for proper rendering
  const answerText = faq.answer
    ?.map((block: any) => {
      if (block._type === "block" && block.children) {
        return block.children.map((child: any) => child.text).join("");
      }
      return "";
    })
    .join("\n") || "";

  return {
    question: faq.question,
    answer: answerText,
  };
}

