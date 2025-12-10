import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "serviceCategory" }],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.max(200).warning("Keep it under 200 characters for best display"),
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed overview of the service",
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "procedureDetails",
      title: "Procedure Details",
      type: "array",
      of: [{ type: "string" }],
      description: "Step-by-step procedure details",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: "List of benefits",
    }),
    defineField({
      name: "recoveryTime",
      title: "Recovery Time",
      type: "string",
      description: "Expected recovery time (e.g., '3-5 days')",
    }),
    defineField({
      name: "cost",
      title: "Cost Range",
      type: "string",
      description: "Cost range (e.g., '₹50,000 - ₹1,50,000')",
    }),
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Important for SEO and accessibility",
        },
      ],
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image (for service pages)",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "icon",
      title: "Icon Emoji",
      type: "string",
      description: "Emoji icon for the service (e.g., 🏥)",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this service in featured sections",
      initialValue: false,
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Title for search engines (leave empty to use service title)",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      description: "Description for search engines",
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Keywords for SEO",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "image",
    },
  },
});
