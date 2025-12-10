import { defineType, defineField } from "sanity";

export default defineType({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
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
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
      description: "Main contact phone number",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "clinicAddress",
      title: "Clinic Address",
      type: "text",
      description: "Full clinic address",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "WhatsApp number for appointments",
    }),
    defineField({
      name: "appointmentCtaLink",
      title: "Appointment CTA Link",
      type: "url",
      description: "Link for appointment booking CTA",
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media Links",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn URL",
          type: "url",
        },
        {
          name: "youtube",
          title: "YouTube URL",
          type: "url",
        },
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Global Settings",
      };
    },
  },
});

