"use client";

import { useEffect, useState } from "react";

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const observedElements: Element[] = [];
    let timer: NodeJS.Timeout;

    // Wait for DOM to be ready
    timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-20% 0% -80% 0%" }
      );

      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element && observer) {
          observer.observe(element);
          observedElements.push(element);
        }
      });

      // Note: We don't handle initial hash navigation to keep URL clean
      // Users can still use browser back/forward, but TOC clicks won't change URL
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observedElements.forEach((el) => {
          observer?.unobserve(el);
        });
        observer.disconnect();
      }
    };
  }, [items]);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    itemId: string,
    itemTitle: string
  ) => {
    e.preventDefault();

    // Function to scroll to element with retry logic and fallback
    const scrollToElement = (attempts = 0) => {
      let element = document.getElementById(itemId);

      // Fallback: if element not found by ID, try to find by text content
      if (!element && itemTitle) {
        const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        headings.forEach((heading) => {
          const headingText = heading.textContent?.trim();
          if (headingText === itemTitle) {
            element = heading as HTMLElement;
          }
        });
      }

      if (element) {
        // Calculate the offset to account for sticky header (scroll-mt-24 = 6rem = 96px)
        const offset = 96;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        // Smooth scroll to the element without changing URL
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else if (attempts < 10) {
        // Retry if element not found (might be still rendering)
        setTimeout(() => scrollToElement(attempts + 1), 100);
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      scrollToElement();
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:sticky lg:top-24">
      <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
        Table of Contents
      </h3>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 toc-scrollbar">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={(e) => handleClick(e, item.id, item.title)}
                className={`block w-full text-left py-2 px-3 rounded transition-colors cursor-pointer hover:bg-primary-50 hover:text-primary-600 ${
                  activeId === item.id
                    ? "bg-primary-100 text-primary-700 font-semibold"
                    : "text-gray-600"
                }`}
                style={{ paddingLeft: `${(item.level - 2) * 16 + 12}px` }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
