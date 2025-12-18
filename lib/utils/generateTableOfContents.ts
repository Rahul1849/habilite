export interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

/**
 * Generates table of contents from markdown content
 * Extracts H1, H2, and H3 headings and creates IDs for them
 * Note: Single # headings are rendered as H2 in content for SEO (only one H1 per page)
 */
export function generateTableOfContents(content: string): TableOfContentsItem[] {
  const toc: TableOfContentsItem[] = []
  const lines = content.split('\n')
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    
    // Skip "Why Choose Us" and "Book an Appointment" sections as they're in footer
    if (trimmedLine.toLowerCase().includes('## why choose us') || 
        trimmedLine.toLowerCase().includes('## why choose') ||
        trimmedLine.toLowerCase().includes('## book an appointment') ||
        trimmedLine.toLowerCase().includes('## book appointment')) {
      continue
    }
    
    // Match H3 headings (###)
    if (trimmedLine.startsWith('###')) {
      const title = trimmedLine.replace(/^###+\s/, '').trim()
      if (title) {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        toc.push({ id, title, level: 3 })
      }
    }
    // Match H2 headings (##)
    else if (trimmedLine.startsWith('##') && !trimmedLine.startsWith('###')) {
      const title = trimmedLine.replace(/^##+\s/, '').trim()
      if (title && !title.toLowerCase().includes('why choose us') && 
          !title.toLowerCase().includes('book an appointment')) {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        toc.push({ id, title, level: 2 })
      }
    }
    // Match H1 headings (#) - these are rendered as H2 in content
    else if (trimmedLine.startsWith('#') && !trimmedLine.startsWith('##') && !trimmedLine.startsWith('###')) {
      const title = trimmedLine.replace(/^#+\s/, '').trim()
      if (title && !title.toLowerCase().includes('why choose us') && 
          !title.toLowerCase().includes('book an appointment')) {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        toc.push({ id, title, level: 2 }) // Level 2 because they're rendered as H2
      }
    }
  }
  
  return toc
}

