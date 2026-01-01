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
        <div className="my-8 md:my-12 w-full flex justify-center">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-50">
              <Image
                src={imageUrl}
                alt={value.alt || ""}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      );
    },
  },
  block: {
    // Convert H1 to H2 since we already have H1 in hero section (SEO best practice: only one H1 per page)
    h1: ({ children }: any) => {
      // Extract text from children (handle both string and React nodes)
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node
        if (Array.isArray(node)) return node.map(extractText).join('')
        if (node?.props?.children) return extractText(node.props.children)
        return ''
      }
      const text = extractText(children)
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      return (
        <h2 id={id} className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-gray-900 scroll-mt-24 leading-tight">
          {children}
        </h2>
      )
    },
    h2: ({ children }: any) => {
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node
        if (Array.isArray(node)) return node.map(extractText).join('')
        if (node?.props?.children) return extractText(node.props.children)
        return ''
      }
      const text = extractText(children)
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      return (
        <h2 id={id} className="text-2xl md:text-3xl font-bold mb-5 mt-10 text-gray-900 scroll-mt-24 leading-tight">
          {children}
        </h2>
      )
    },
    h3: ({ children }: any) => {
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node
        if (Array.isArray(node)) return node.map(extractText).join('')
        if (node?.props?.children) return extractText(node.props.children)
        return ''
      }
      const text = extractText(children)
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      return (
        <h3 id={id} className="text-xl md:text-2xl font-semibold mb-4 mt-8 text-gray-900 scroll-mt-24 leading-tight">
          {children}
        </h3>
      )
    },
    h4: ({ children }: any) => {
      const extractText = (node: any): string => {
        if (typeof node === 'string') return node
        if (Array.isArray(node)) return node.map(extractText).join('')
        if (node?.props?.children) return extractText(node.props.children)
        return ''
      }
      const text = extractText(children)
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      return (
        <h4 id={id} className="text-lg md:text-xl font-semibold mb-3 mt-6 text-gray-900 scroll-mt-24 leading-tight">
          {children}
        </h4>
      )
    },
    normal: ({ children }: any) => (
      <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#0891b2] pl-6 pr-4 py-4 italic my-8 text-gray-700 bg-gradient-to-r from-[#0891b2]/5 to-transparent rounded-r-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 space-y-3 text-gray-700 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 space-y-3 text-gray-700 ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-2 leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="ml-2 leading-relaxed">{children}</li>,
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

