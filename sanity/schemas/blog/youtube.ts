import { defineType, defineField } from "sanity";

export default defineType({
  name: "youtube",
  title: "YouTube Video",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "YouTube URL",
      type: "url",
      description: "Paste the full YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID)",
      validation: (Rule) =>
        Rule.required().custom((url: string | undefined) => {
          if (!url) return "YouTube URL is required";
          // Check if it's a valid YouTube URL
          const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
          if (!youtubeRegex.test(url)) {
            return "Please enter a valid YouTube URL";
          }
          return true;
        }),
    }),
    defineField({
      name: "title",
      title: "Video Title (Optional)",
      type: "string",
      description: "Optional: Custom title for the video. If not provided, YouTube's title will be used.",
    }),
    defineField({
      name: "description",
      title: "Video Description (Optional)",
      type: "text",
      description: "Optional: Add a description that appears below the video.",
    }),
  ],
  preview: {
    select: {
      url: "url",
      title: "title",
    },
    prepare({ url, title }: { url?: string; title?: string }) {
      // Extract video ID from URL
      let videoId = "";
      if (url) {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        videoId = match ? match[1] : "";
      }
      
      return {
        title: title || "YouTube Video",
        subtitle: videoId ? `Video ID: ${videoId}` : url || "No URL",
        media: videoId
          ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
          : undefined,
      };
    },
  },
});

