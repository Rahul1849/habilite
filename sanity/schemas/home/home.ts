import { defineType, defineField } from "sanity";

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "bannerTitle",
      title: "Banner Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bannerSubtitle",
      title: "Banner Subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
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
      name: "servicesOverview",
      title: "Services Overview Text",
      type: "text",
    }),
    defineField({
      name: "featuredServices",
      title: "Featured Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "featuredDoctors",
      title: "Featured Doctors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "doctor" }] }],
    }),
    defineField({
      name: "testimonialsHighlight",
      title: "Testimonials Highlight",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Title for search engines (leave empty to use banner title)",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      description: "Description for search engines",
    }),
  ],
  preview: {
    select: {
      title: "bannerTitle",
      media: "bannerImage",
    },
  },
});
