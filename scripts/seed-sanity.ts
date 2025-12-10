/**
 * One-time seeding script to import existing static data into Sanity.
 *
 * How to run:
 * 1) Ensure env vars are set (projectId, dataset, token):
 *    - .env or .env.local:
 *      NEXT_PUBLIC_SANITY_PROJECT_ID=xyk8ch4r
 *      NEXT_PUBLIC_SANITY_DATASET=production
 *      SANITY_API_TOKEN=YOUR_WRITE_TOKEN
 *
 * 2) Run with ts-node:
 *    npx ts-node scripts/seed-sanity.ts
 *
 * Notes:
 * - Images are fetched from their URLs and uploaded to Sanity assets.
 * - Documents are created/updated with stable IDs to keep references consistent.
 */

import { createClient } from "@sanity/client";
import { services } from "../data/services";
import { doctors } from "../data/doctors";
import { blogPosts } from "../data/blog";
import { testimonials } from "../data/testimonials";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xyk8ch4r";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_API_VERSION ||
  "2024-12-01";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN (write token) in environment variables.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

// Simple slugify helper (avoids external deps)
function slugify(input: string) {
  return input
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

// cache uploaded assets to avoid duplicate uploads
const imageCache = new Map<string, string>();

async function uploadImage(url?: string, label?: string) {
  if (!url) return undefined;
  if (imageCache.has(url)) return imageCache.get(url);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buffer, {
      filename: `${slugify(label || "image")}.jpg`,
      contentType: res.headers.get("content-type") || "image/jpeg",
    });
    imageCache.set(url, asset._id);
    return asset._id;
  } catch (err) {
    console.warn(`Image upload skipped for ${url}:`, (err as Error).message);
    return undefined;
  }
}

function toBlocks(text?: string) {
  if (!text) return [];
  return [
    {
      _type: "block",
      style: "normal",
      children: [{ _type: "span", text }],
    },
  ];
}

async function upsert(doc: any) {
  await client.createOrReplace(doc);
}

async function seedServiceCategories() {
  const cats = Array.from(new Set(services.map((s) => s.category).filter(Boolean)));
  for (const cat of cats) {
    const slug = slugify(cat);
    await upsert({
      _id: `serviceCategory-${slug}`,
      _type: "serviceCategory",
      title: cat,
      slug: { _type: "slug", current: slug },
    });
  }
  return cats;
}

async function seedBlogCategories() {
  const cats = Array.from(new Set(blogPosts.map((b) => b.category).filter(Boolean)));
  for (const cat of cats) {
    const slug = slugify(cat);
    await upsert({
      _id: `blogCategory-${slug}`,
      _type: "blogCategory",
      title: cat,
      slug: { _type: "slug", current: slug },
    });
  }
  return cats;
}

async function seedServices() {
  for (const s of services) {
    const categorySlug = slugify(s.category || "uncategorized");
    const imageRef = await uploadImage(s.image, s.name);
    await upsert({
      _id: `service-${s.slug}`,
      _type: "service",
      title: s.name,
      slug: { _type: "slug", current: s.slug },
      category: { _type: "reference", _ref: `serviceCategory-${categorySlug}` },
      shortDescription: s.shortDescription,
      overview: toBlocks(s.overview),
      description: toBlocks(s.fullDescription),
      procedureDetails: s.procedureDetails || [],
      benefits: s.benefits || [],
      recoveryTime: s.recoveryTime,
      cost: s.cost,
      image: imageRef
        ? { _type: "image", asset: { _type: "reference", _ref: imageRef } }
        : undefined,
      icon: s.icon,
      featured: s.featured,
      faqs:
        s.faqs?.map((f) => ({
          question: f.question,
          answer: f.answer,
        })) || [],
      seoTitle: s.seoTitle,
      seoDescription: s.seoDescription,
      keywords: s.keywords || [],
    });
  }
}

async function seedDoctors() {
  for (const d of doctors) {
    const imageRef = await uploadImage(d.image, d.name);
    await upsert({
      _id: `doctor-${d.slug}`,
      _type: "doctor",
      name: d.name,
      slug: { _type: "slug", current: d.slug },
      designation: d.designation,
      specialization: d.specialization?.[0] || "",
      specializations: d.specialization || [],
      qualifications: d.qualifications || [],
      experience: d.experience,
      experienceYears: Number(d.experience?.replace(/\D+/g, "")) || undefined,
      image: imageRef
        ? { _type: "image", asset: { _type: "reference", _ref: imageRef } }
        : undefined,
      bio: d.bio,
      fullBio: toBlocks(d.bio),
      email: undefined,
      phone: undefined,
      treatments: d.treatments || [],
      achievements: d.achievements || [],
      education:
        d.education?.map((e) => ({
          degree: e.degree,
          institution: e.institution,
          year: e.year,
        })) || [],
      languages: d.languages || [],
      consultationFee: d.consultationFee,
      availability: d.availability,
      videoUrl: d.videoUrl,
    });
  }
}

async function seedTestimonials() {
  for (const t of testimonials) {
    const imageRef = await uploadImage(t.image, t.patientName);
    await upsert({
      _id: `testimonial-${t.id}`,
      _type: "testimonial",
      name: t.patientName,
      patientAge: t.patientAge,
      treatment: t.treatment,
      message: t.text,
      rating: t.rating,
      date: t.date,
      verified: t.verified,
      image: imageRef
        ? { _type: "image", asset: { _type: "reference", _ref: imageRef } }
        : undefined,
      featured: false,
      tags: t.tags || [],
    });
  }
}

async function seedBlogs() {
  for (const b of blogPosts) {
    const categorySlug = slugify(b.category || "general");
    const imageRef = await uploadImage(b.image, b.title);
    await upsert({
      _id: `blog-${b.slug}`,
      _type: "blog",
      title: b.title,
      slug: { _type: "slug", current: b.slug },
      category: { _type: "reference", _ref: `blogCategory-${categorySlug}` },
      author: b.author,
      publishedAt: b.publishedDate,
      readTime: b.readTime,
      image: imageRef
        ? { _type: "image", asset: { _type: "reference", _ref: imageRef } }
        : undefined,
      excerpt: b.excerpt,
      content: toBlocks(b.content), // simple fallback; can be improved to rich blocks
      seoTitle: b.seoTitle,
      seoDescription: b.seoDescription,
    });
  }
}

async function main() {
  console.log("Seeding categories...");
  await seedServiceCategories();
  await seedBlogCategories();

  console.log("Seeding services...");
  await seedServices();

  console.log("Seeding doctors...");
  await seedDoctors();

  console.log("Seeding testimonials...");
  await seedTestimonials();

  console.log("Seeding blogs...");
  await seedBlogs();

  console.log("✅ Seeding completed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

