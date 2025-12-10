import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Patient Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "patientAge",
      title: "Patient Age",
      type: "number",
      validation: (Rule) => Rule.min(0).max(120),
    }),
    defineField({
      name: "treatment",
      title: "Treatment",
      type: "string",
      description: "Treatment received (e.g., 'Laparoscopic Gallbladder Surgery')",
    }),
    defineField({
      name: "message",
      title: "Message/Review Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1 to 5)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "service" }],
      description: "Optional: Link to the service this testimonial is about",
    }),
    defineField({
      name: "doctor",
      title: "Doctor",
      type: "reference",
      to: [{ type: "doctor" }],
      description: "Optional: Link to the doctor this testimonial is about",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description: "Date of the testimonial",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "verified",
      title: "Verified",
      type: "boolean",
      description: "Is this testimonial verified?",
      initialValue: false,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional tags for categorization",
    }),
    defineField({
      name: "image",
      title: "Patient Image",
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
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this testimonial in featured sections",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "message",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled",
        subtitle: subtitle ? subtitle.substring(0, 50) + "..." : "No message",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Rating, High",
      name: "ratingDesc",
      by: [{ field: "rating", direction: "desc" }],
    },
    {
      title: "Date, New",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
