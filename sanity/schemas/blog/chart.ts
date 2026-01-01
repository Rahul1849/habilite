import { defineType, defineField } from "sanity";

export default defineType({
  name: "chart",
  title: "Chart",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Chart Title",
      type: "string",
      description: "Optional title for the chart",
    }),
    defineField({
      name: "chartType",
      title: "Chart Type",
      type: "string",
      options: {
        list: [
          { title: "Bar Chart", value: "bar" },
          { title: "Line Chart", value: "line" },
          { title: "Pie Chart", value: "pie" },
          { title: "Table (Data Grid)", value: "table" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "data",
      title: "Chart Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "color",
              title: "Color (optional)",
              type: "string",
              description: "Hex color code (e.g., #0891b2)",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Optional description or caption for the chart",
    }),
  ],
  preview: {
    select: {
      title: "title",
      chartType: "chartType",
      dataCount: "data.length",
    },
    prepare({ title, chartType, dataCount }: any) {
      return {
        title: title || "Chart",
        subtitle: `${chartType || "chart"} (${dataCount || 0} items)`,
      };
    },
  },
});

