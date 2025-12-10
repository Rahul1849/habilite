import { defineType, defineField } from "sanity";

export default defineType({
  name: "doctor",
  title: "Doctor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Doctor Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      description: "Professional designation (e.g., 'Senior Consultant - Laparoscopic & Robotic Surgeon')",
    }),
    defineField({
      name: "specialization",
      title: "Primary Specialization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specializations",
      title: "Specializations (Array)",
      type: "array",
      of: [{ type: "string" }],
      description: "List of all specializations",
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      of: [{ type: "string" }],
      description: "List of qualifications (e.g., MBBS, MS, etc.)",
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "string",
      description: "Years of experience (e.g., '23 years')",
    }),
    defineField({
      name: "experienceYears",
      title: "Experience (Years - Number)",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "image",
      title: "Doctor Image",
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
      name: "bio",
      title: "Short Bio",
      type: "text",
    }),
    defineField({
      name: "fullBio",
      title: "Full Biography",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "treatments",
      title: "Treatments",
      type: "array",
      of: [{ type: "string" }],
      description: "List of treatments offered",
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
      description: "List of achievements and accomplishments",
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "degree",
              title: "Degree",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "institution",
              title: "Institution",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "year",
              title: "Year",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
      description: "Languages spoken (e.g., English, Hindi)",
    }),
    defineField({
      name: "consultationFee",
      title: "Consultation Fee",
      type: "string",
      description: "Consultation fee (e.g., '₹1,500')",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      description: "Availability schedule (e.g., 'Mon-Sat: 10 AM - 6 PM')",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "YouTube or video URL",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "specialization",
      media: "image",
    },
  },
});
