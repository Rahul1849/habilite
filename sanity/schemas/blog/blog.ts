import { defineType, defineField } from "sanity";
import { PlayIcon } from "@sanity/icons";
import React from "react";

export default defineType({
  name: "blog",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Blog Title",
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
      to: [{ type: "blogCategory" }],
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "readTime",
      title: "Read Time (in minutes)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(60),
    }),

    defineField({
      name: "image",
      title: "Blog Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) =>
        Rule.max(200).warning("Keep it under 200 characters"),
    }),

    // ✅ PORTABLE TEXT FIELD WITH TABLE, CHART & YOUTUBE VIDEO SUPPORT
    // This field enables rich content editing with the "+" button in Sanity Studio.
    // Editors can add text blocks, images, tables, charts, and YouTube videos.
    // 
    // HOW TO USE:
    // 1. Click in the "Full Content" field below
    // 2. Type some text to create a block
    // 3. Press Enter to create a new line - the "+" button will appear
    // 4. Click the "+" button to see options: Text, Image, Table, Chart, YouTube Video
    // 5. You can also click between existing blocks to insert new blocks
    // 6. Use the YouTube button in the toolbar to quickly insert YouTube videos
    defineField({
      name: "content",
      title: "Full Content",
      type: "array",
      description: "Rich content editor with support for text, images, tables, charts, and YouTube videos. Type some text, then press Enter and click the '+' button that appears to add tables, charts, or videos.",
      components: {
        input: (props: any) => {
          // Extend the default Portable Text input without fully overriding it
          // We use renderDefault which is the recommended way to extend components
          return props.renderDefault({
            ...props,
            // Add custom block insertion handler
            // The Portable Text editor will use this to add toolbar actions
            schema: {
              ...props.schema,
              // Extend schema options to include custom block actions
              options: {
                ...props.schema?.options,
                // Custom block actions for the toolbar
                blockActions: [
                  ...(props.schema?.options?.blockActions || []),
                  {
                    icon: PlayIcon,
                    title: "Insert YouTube Video",
                    action: (editor: any) => {
                      // Insert YouTube block at current cursor position
                      if (editor?.insert) {
                        editor.insert({
                          _type: "youtube",
                          url: "",
                        });
                      } else if (editor?.insertBlock) {
                        editor.insertBlock({
                          _type: "youtube",
                          url: "",
                        });
                      }
                    },
                  },
                ],
              },
            },
          });
        },
      },
      of: [
        { 
          type: "block",
          // Enable all standard block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          // Enable lists
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          // Enable marks (bold, italic, links)
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        { 
          type: "table",
          title: "Table",
        },
        { 
          type: "chart",
          title: "Chart",
        },
        {
          type: "image",
          title: "Image",
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
        {
          type: "youtube",
          title: "YouTube Video",
        },
      ],
    }),

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
  ],
});
