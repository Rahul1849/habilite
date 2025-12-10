import { PortableTextBlock } from "@portabletext/types";
import { urlForImage } from "@/sanity/lib/image";

// Image URL Helper
export function getImageUrl(
  image?: {
    asset?: { _ref?: string; _type?: string };
    alt?: string;
  },
  width?: number,
  height?: number
): string | null {
  if (!image?.asset?._ref) return null;
  return urlForImage(image).width(width || 800).height(height || 600).url() || null;
}

// Fallback helpers
export function getFallbackString(value?: string | null, fallback: string = ""): string {
  return value || fallback;
}

export function getFallbackNumber(value?: number | null, fallback: number = 0): number {
  return value ?? fallback;
}

export function getFallbackArray<T>(value?: T[] | null, fallback: T[] = []): T[] {
  return value && Array.isArray(value) ? value : fallback;
}

