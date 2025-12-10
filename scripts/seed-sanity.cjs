/**
 * One-time seeding script (CommonJS) to import existing static data into Sanity.
 *
 * How to run (PowerShell-friendly):
 *   node scripts/seed-sanity.cjs
 *
 * Requirements:
 *   - Env vars set (projectId, dataset, token):
 *       NEXT_PUBLIC_SANITY_PROJECT_ID=xyk8ch4r
 *       NEXT_PUBLIC_SANITY_DATASET=production
 *       NEXT_PUBLIC_SANITY_API_VERSION=2024-12-01
 *       SANITY_API_TOKEN=YOUR_WRITE_TOKEN
 *   - ts-node installed (devDependency) to load TS data files
 */

// Load env from .env or .env.local
try {
  require("dotenv").config();
  require("dotenv").config({ path: ".env.local" });
} catch (_) {}

require("ts-node/register/transpile-only"); // allow requiring TS data files
const { services } = require("../data/services");
const { doctors } = require("../data/doctors");
const { blogPosts } = require("../data/blog");
const { testimonials } = require("../data/testimonials");
const sanity = require("@sanity/client");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
let mappedPages = [];
try {
  const jsonPath = path.join(__dirname, "content", "mapped-pages.json");
  const cjsPath = path.join(__dirname, "content", "mapped-pages.cjs");
  if (fs.existsSync(jsonPath)) {
    mappedPages = JSON.parse(fs.readFileSync(jsonPath, "utf8")) || [];
    if (!Array.isArray(mappedPages)) mappedPages = [];
    if (!mappedPages.length) console.warn("ℹ️  mapped-pages.json is empty; skipping page seeding.");
  } else if (fs.existsSync(cjsPath)) {
    const mod = require(cjsPath);
    mappedPages = mod.mappedPages || mod.default || [];
    if (!mappedPages.length) console.warn("ℹ️  mapped-pages.cjs is empty; skipping page seeding.");
  } else {
    console.warn("ℹ️  mapped-pages not found.");
  }
} catch (e) {
  console.warn("ℹ️  failed to load mapped-pages.cjs:", e.message);
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xyk8ch4r";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_API_VERSION ||
  "2024-12-01";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("❌ Missing SANITY_API_TOKEN (write token) in env vars.");
  process.exit(1);
}

const client = sanity.createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

// Simple slugify
function slugify(str) {
  return (str || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

// _key helper
function makeKey(prefix = "k", idx = 0) {
  return `${prefix}-${idx}-${Math.random().toString(36).slice(2, 8)}`;
}

// Convert plain text to a single block
function toBlocks(text) {
  if (!text) return [];
  return [
    {
      _type: "block",
      _key: makeKey("blk"),
      style: "normal",
      children: [{ _type: "span", text }],
    },
  ];
}

// Cache uploads
const imageCache = new Map();
async function uploadImage(url, label) {
  if (!url) return undefined;
  if (imageCache.has(url)) return imageCache.get(url);

  // Handle local images under /public
  const tryLocal = async (relPath) => {
    const localPath = path.join(process.cwd(), "public", relPath.replace(/^\//, ""));
    try {
      const buffer = fs.readFileSync(localPath);
      const asset = await client.assets.upload("image", buffer, {
        filename: `${slugify(label || path.basename(localPath))}`,
        contentType: "image/jpeg",
      });
      imageCache.set(url, asset._id);
      return asset._id;
    } catch (err) {
      console.warn(`⚠️  Skipped local image ${url}: ${err.message}`);
      return undefined;
    }
  };

  if (url.startsWith("/images/") || url.startsWith("/img/") || url.startsWith("/public/")) {
    const rel = url.replace(/^\/public\//, "/");
    return await tryLocal(rel);
  }

  // Remote URL
  if (!/^https?:\/\//i.test(url)) {
    console.warn(`⚠️  Skipped image ${url}: Only absolute URLs or /public paths supported`);
    return undefined;
  }

  // Skip known non-image hosts or paths
  try {
    const u = new URL(url);
    const skipHosts = new Set([
      "fonts.googleapis.com",
      "fonts.gstatic.com",
      "www.youtube.com",
      "youtube.com",
      "img.youtube.com",
      "wa.me",
      "www.google.com",
      "maps.google.com",
      "google.com",
    ]);
    // If it's our own domain and path starts with /images/, try local file instead
    if (
      (u.hostname === "www.habiliteclinics.com" || u.hostname === "habiliteclinics.com") &&
      u.pathname.startsWith("/images/")
    ) {
      const rel = u.pathname;
      return await tryLocal(rel);
    }

    if (skipHosts.has(u.hostname)) {
      console.warn(`⚠️  Skipped image ${url}: non-image host`);
      return undefined;
    }
    const isLikelyImage = /\.(png|jpe?g|webp|gif|svg|avif|heic|heif)$/i.test(u.pathname);
    if (!isLikelyImage && u.pathname === "/") {
      console.warn(`⚠️  Skipped image ${url}: path not an image`);
      return undefined;
    }
  } catch (_) {}

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buffer, {
      filename: `${slugify(label || "image")}.jpg`,
      contentType: res.headers.get("content-type") || "image/jpeg",
    });
    imageCache.set(url, asset._id);
    return asset._id;
  } catch (err) {
    console.warn(`⚠️  Skipped image ${url}: ${err.message}`);
    return undefined;
  }
}

async function upsert(doc) {
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
        s.faqs?.map((f, idx) => ({
          _key: makeKey("faq", idx),
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
      treatments: d.treatments || [],
      achievements: d.achievements || [],
      education:
        d.education?.map((e, idx) => ({
          _key: makeKey("edu", idx),
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
      content: toBlocks(b.content),
      seoTitle: b.seoTitle,
      seoDescription: b.seoDescription,
    });
  }
}

function toBlocks(texts) {
  if (!texts) return [];
  const arr = Array.isArray(texts) ? texts : [texts];
  const filtered = arr.filter((t) => typeof t === "string" && t.trim().length > 0);
  if (!filtered.length) return [];
  return filtered.map((t, idx) => ({
    _type: "block",
    _key: makeKey("blk", idx),
    style: "normal",
    children: [{ _type: "span", text: t || "" }],
  }));
}

async function seedPages() {
  if (!mappedPages.length) {
    console.log("ℹ️  No mapped pages to seed.");
    return;
  }
  console.log(`Seeding pages (${mappedPages.length})...`);
  for (const p of mappedPages) {
    // Skip studio and non-site routes
    if (p.route && p.route.startsWith("/studio")) {
      continue;
    }

    const safeSlug =
      (p.slug || "")
        .replace(/[^a-zA-Z0-9_-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") || "page";

    const imageRefs = [];
    if (p.images && p.images.length) {
      for (const img of p.images) {
        const ref = await uploadImage(img, p.title);
        if (ref) {
          imageRefs.push({ _type: "image", asset: { _type: "reference", _ref: ref } });
        }
      }
    }

    await upsert({
      _id: `page-${safeSlug}`,
      _type: "page",
      title: p.title || safeSlug || "Untitled",
      slug: { _type: "slug", current: safeSlug },
      heroTitle: "",
      heroSubtitle: "",
      heroImage: undefined,
      sections: toBlocks(p.texts || []),
      images: imageRefs,
      seoTitle: "",
      seoDescription: "",
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

  await seedPages();

  console.log("✅ Seeding completed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

