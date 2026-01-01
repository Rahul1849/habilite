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
    table: ({ value }: { value: any }) => {
      if (!value) return null;

      // @sanity/table plugin structure: value.rows is an array of row objects
      // Each row has a cells array containing cell objects with text content
      const rows = value.rows || [];
      if (rows.length === 0) return null;

      // Check if first row should be treated as header (common pattern)
      const firstRow = rows[0];
      const hasHeader = firstRow && firstRow.cells && firstRow.cells.length > 0;
      const dataRows = hasHeader ? rows.slice(1) : rows;

      return (
        <div className="my-8 md:my-12 w-full overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              {hasHeader && (
                <thead>
                  <tr className="bg-[#0891b2]/10">
                    {firstRow.cells.map((cell: any, idx: number) => {
                      // Extract text from cell - can be string or object with text property
                      const cellText = typeof cell === 'string' 
                        ? cell 
                        : cell?.text || cell?.value || cell?.content || '';
                      return (
                        <th
                          key={idx}
                          className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900"
                        >
                          {cellText}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
              )}
              <tbody>
                {dataRows.map((row: any, rowIdx: number) => (
                  <tr
                    key={rowIdx}
                    className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {(row.cells || []).map((cell: any, cellIdx: number) => {
                      // Extract text from cell - can be string or object with text property
                      const cellText = typeof cell === 'string' 
                        ? cell 
                        : cell?.text || cell?.value || cell?.content || '';
                      return (
                        <td
                          key={cellIdx}
                          className="border border-gray-300 px-4 py-3 text-gray-700"
                        >
                          {cellText}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    },
    chart: ({ value }: { value: any }) => {
      if (!value || !value.data || value.data.length === 0) return null;

      const { title, chartType, data, description } = value;
      const maxValue = Math.max(...data.map((item: any) => item.value || 0));

      return (
        <div className="my-8 md:my-12 w-full">
          {title && (
            <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
          )}
          
          {chartType === "table" ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#0891b2]/10">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Label
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: any, idx: number) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        {item.label || ""}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-semibold">
                        {item.value || 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="space-y-4">
                {data.map((item: any, idx: number) => {
                  const percentage = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                  const color = item.color || "#0891b2";
                  
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {item.label || `Item ${idx + 1}`}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {item.value}
                        </span>
                      </div>
                      {chartType === "bar" && (
                        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: color,
                            }}
                          />
                        </div>
                      )}
                      {chartType === "line" && (
                        <div className="relative h-2 bg-gray-200 rounded-full">
                          <div
                            className="absolute top-0 left-0 h-full rounded-full"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: color,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {chartType === "pie" && (
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {data.map((item: any, idx: number) => {
                    const percentage = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                    const color = item.color || "#0891b2";
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-sm text-gray-700">
                          {item.label}: {item.value} ({percentage.toFixed(1)}%)
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          
          {description && (
            <p className="mt-4 text-sm text-gray-600 italic">{description}</p>
          )}
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

