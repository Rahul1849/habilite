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

/**
 * Converts markdown text to Portable Text blocks
 * Handles headings, paragraphs, lists, bold, italic, and tables
 */
// Helper to generate unique keys
function makeKey(prefix = 'k', idx = 0): string {
  return `${prefix}-${idx}-${Math.random().toString(36).slice(2, 8)}`;
}

function toBlocks(text?: string): any[] {
  if (!text) return [];
  
  const lines = text.trim().split('\n');
  const blocks: any[] = [];
  let currentParagraph: string[] = [];
  let inList = false;
  let listType: 'bullet' | 'number' | null = null;
  let listItems: string[] = [];
  let blockIndex = 0;
  
  function flushParagraph() {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        blocks.push(createTextBlock(text, 'normal', blockIndex++));
      }
      currentParagraph = [];
    }
  }
  
  function flushList() {
    if (listItems.length > 0 && listType) {
      listItems.forEach((item, index) => {
        const cleanItem = item.replace(/^[-*]\s+|^\d+\.\s+/, '').trim();
        if (cleanItem) {
          blocks.push({
            _type: 'block',
            _key: makeKey('blk', blockIndex++),
            style: 'normal',
            listItem: listType,
            children: parseInlineText(cleanItem),
          });
        }
      });
      listItems = [];
      listType = null;
      inList = false;
    }
  }
  
  function parseInlineText(text: string): any[] {
    if (!text) return [{ _type: 'span', text: '' }];
    
    const children: any[] = [];
    let i = 0;
    let currentText = '';
    
    while (i < text.length) {
      // Check for bold **text**
      if (i < text.length - 1 && text[i] === '*' && text[i + 1] === '*') {
        // Flush current text
        if (currentText) {
          children.push({ _type: 'span', text: currentText });
          currentText = '';
        }
        
        // Find closing **
        const endBold = text.indexOf('**', i + 2);
        if (endBold !== -1) {
          const boldText = text.substring(i + 2, endBold);
          children.push({
            _type: 'span',
            text: boldText,
            marks: ['strong'],
          });
          i = endBold + 2;
          continue;
        }
      }
      
      // Check for italic *text* (single asterisk, not part of **)
      if (text[i] === '*' && (i === 0 || text[i - 1] !== '*') && (i === text.length - 1 || text[i + 1] !== '*')) {
        // Flush current text
        if (currentText) {
          children.push({ _type: 'span', text: currentText });
          currentText = '';
        }
        
        // Find closing *
        const endItalic = text.indexOf('*', i + 1);
        if (endItalic !== -1 && (endItalic === text.length - 1 || text[endItalic + 1] !== '*')) {
          const italicText = text.substring(i + 1, endItalic);
          children.push({
            _type: 'span',
            text: italicText,
            marks: ['em'],
          });
          i = endItalic + 1;
          continue;
        }
      }
      
      currentText += text[i];
      i++;
    }
    
    // Add remaining text
    if (currentText) {
      children.push({ _type: 'span', text: currentText });
    }
    
    return children.length > 0 ? children : [{ _type: 'span', text: text }];
  }
  
  function createTextBlock(text: string, style: string = 'normal', keyIndex: number = 0): any {
    return {
      _type: 'block',
      _key: makeKey('blk', keyIndex),
      style,
      children: parseInlineText(text),
    };
  }
  
  function parseTable(tableLines: string[]): any {
    if (tableLines.length < 2) return null;
    
    // For now, convert table to a simple text representation
    // Tables can be manually recreated in Sanity Studio using the table block
    const tableText = tableLines.join('\n');
    return createTextBlock(tableText, 'normal', blockIndex++);
  }
  
  let i = 0;
  let tableLines: string[] = [];
  let inTable = false;
  
  while (i < lines.length) {
    const line = lines[i].trim();
    const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
    
    // Skip empty lines
    if (!line) {
      flushParagraph();
      flushList();
      i++;
      continue;
    }
    
    // Check for table (starts with | and has separator line with ---)
    if (line.startsWith('|') && nextLine.includes('---')) {
      flushParagraph();
      flushList();
      inTable = true;
      tableLines = [line];
      i++;
      continue;
    }
    
    if (inTable) {
      if (line.startsWith('|')) {
        tableLines.push(line);
        i++;
        continue;
      } else {
        // End of table
        const tableBlock = parseTable(tableLines);
        if (tableBlock) {
          blocks.push(tableBlock);
        }
        tableLines = [];
        inTable = false;
        // Continue processing this line
      }
    }
    
    // Headings
    if (line.startsWith('####')) {
      flushParagraph();
      flushList();
      const text = line.replace(/^####+\s*/, '').trim();
      if (text) blocks.push(createTextBlock(text, 'h4', blockIndex++));
    } else if (line.startsWith('###')) {
      flushParagraph();
      flushList();
      const text = line.replace(/^###+\s*/, '').trim();
      if (text) blocks.push(createTextBlock(text, 'h3', blockIndex++));
    } else if (line.startsWith('##')) {
      flushParagraph();
      flushList();
      const text = line.replace(/^##+\s*/, '').trim();
      if (text) blocks.push(createTextBlock(text, 'h2', blockIndex++));
    } else if (line.startsWith('#')) {
      flushParagraph();
      flushList();
      const text = line.replace(/^#+\s*/, '').trim();
      if (text) blocks.push(createTextBlock(text, 'h1', blockIndex++));
    }
    // Lists
    else if (line.match(/^[-*]\s+/)) {
      flushParagraph();
      if (!inList || listType !== 'bullet') {
        flushList();
        inList = true;
        listType = 'bullet';
      }
      listItems.push(line);
    } else if (line.match(/^\d+\.\s+/)) {
      flushParagraph();
      if (!inList || listType !== 'number') {
        flushList();
        inList = true;
        listType = 'number';
      }
      listItems.push(line);
    }
    // Regular paragraph
    else {
      flushList();
      currentParagraph.push(line);
    }
    
    i++;
  }
  
  // Flush any remaining content
  flushParagraph();
  flushList();
  
  // If we ended in a table, add it
  if (inTable && tableLines.length > 0) {
    const tableBlock = parseTable(tableLines);
    if (tableBlock) {
      blocks.push(tableBlock);
    }
  }
  
  return blocks.length > 0 ? blocks : [createTextBlock('', 'normal', blockIndex)];
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

