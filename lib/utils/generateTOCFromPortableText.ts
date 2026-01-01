import { PortableTextBlock } from '@portabletext/types'

export interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

/**
 * Extracts headings from PortableText content to generate table of contents
 */
export function generateTOCFromPortableText(content: PortableTextBlock[]): TableOfContentsItem[] {
  const toc: TableOfContentsItem[] = []
  
  if (!content || !Array.isArray(content)) {
    return toc
  }

  const extractText = (node: any): string => {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) return node.map(extractText).join('')
    if (node?.props?.children) return extractText(node.props.children)
    if (node?.children) return extractText(node.children)
    // Handle PortableText span structure
    if (node?._type === 'span' && node?.text) return node.text
    if (node?.text) return node.text
    return ''
  }

  content.forEach((block) => {
    if (block._type === 'block' && block.style) {
      const style = block.style
      // Extract text from PortableText children array
      let text = ''
      if (Array.isArray(block.children)) {
        text = block.children
          .map((child: any) => {
            if (child._type === 'span' && child.text) {
              return child.text
            }
            return extractText(child)
          })
          .join('')
      } else {
        text = extractText(block.children || [])
      }
      
      if (!text || !text.trim()) return

      // Skip "Why Choose Us" and "Book an Appointment" sections
      const lowerText = text.toLowerCase()
      if (lowerText.includes('why choose us') || 
          lowerText.includes('why choose') ||
          lowerText.includes('book an appointment') ||
          lowerText.includes('book appointment')) {
        return
      }

      let level = 0
      let title = text.trim()

      if (style === 'h1' || style === 'h2') {
        level = 2 // H1 and H2 are rendered as H2 in content
      } else if (style === 'h3') {
        level = 3
      } else if (style === 'h4') {
        level = 4
      }

      if (level > 0 && title) {
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        toc.push({ id, title, level })
      }
    }
  })

  return toc
}

