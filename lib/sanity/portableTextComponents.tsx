import Image from "next/image";
import { PortableTextComponents, PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { getImageUrl } from "./utils";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      const imageUrl = getImageUrl(value);
      if (!imageUrl) return null;
      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={800}
            height={600}
            className="rounded-lg w-full h-auto"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#f56336] pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-[#f56336] hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

// Render Portable Text Helper
export function renderPortableText(content?: PortableTextBlock[]) {
  if (!content || content.length === 0) return null;
  return <PortableText value={content} components={portableTextComponents} />;
}

