import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { getClient } from '@/lib/sanity/client'

// This endpoint handles webhooks from Sanity to revalidate pages when content changes
// Set up in Sanity Studio: Webhooks → Create Webhook → POST to this URL
// Secret: Use SANITY_REVALIDATE_SECRET environment variable

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity
    const secret = request.nextUrl.searchParams.get('secret')
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET

    if (!expectedSecret) {
      console.warn('SANITY_REVALIDATE_SECRET not set - webhook will accept all requests')
    } else if (secret !== expectedSecret) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Parse the webhook payload
    const body = await request.json()
    const { _type, _id } = body

    console.log(`Revalidating for Sanity document: ${_type} (${_id})`)

    // Revalidate based on document type
    switch (_type) {
      case 'home':
      case 'homePage':
        revalidatePath('/', 'page')
        revalidatePath('/')
        console.log('Revalidated homepage')
        break

      case 'service':
        // Revalidate service pages and homepage (where services are listed)
        revalidatePath('/', 'page')
        revalidatePath('/laparoscopic-surgery', 'page')
        revalidatePath('/laser-surgery', 'page')
        revalidatePath('/bariatrics', 'page')
        // Revalidate individual service pages if they exist
        if (body.slug?.current) {
          revalidatePath(`/laparoscopic-surgery/${body.slug.current}`, 'page')
          revalidatePath(`/laser-surgery/${body.slug.current}`, 'page')
          revalidatePath(`/bariatrics/${body.slug.current}`, 'page')
        }
        console.log('Revalidated service pages')
        break

      case 'blog':
      case 'post':
        // Revalidate blog pages
        revalidatePath('/post', 'page')
        revalidatePath('/post/category', 'page')
        
        // Log the full body to debug slug extraction
        console.log('Blog webhook payload:', JSON.stringify(body, null, 2))
        
        // Try multiple ways to get the slug from Sanity webhook payload
        // Sanity webhook sends: { slug: { current: "slug-value" } } or { slug: "slug-value" }
        let slug = null
        if (body.slug) {
          if (typeof body.slug === 'string') {
            slug = body.slug
          } else if (body.slug.current) {
            slug = body.slug.current
          } else if (body.slug.slug?.current) {
            slug = body.slug.slug.current
          }
        }
        
        // If slug not in payload, fetch it from Sanity using document ID
        if (!slug && body._id) {
          console.log(`🔍 Slug not in payload, fetching from document: ${body._id}`)
          const client = getClient(false)
          if (client) {
            try {
              const doc = await client.fetch(
                `*[_id == $id][0]{ "slug": slug.current }`,
                { id: body._id }
              )
              if (doc?.slug) {
                slug = doc.slug
                console.log(`✅ Fetched slug from document: ${slug}`)
              } else {
                console.warn(`⚠️ Document found but no slug field: ${body._id}`)
              }
            } catch (error) {
              console.error('❌ Error fetching slug from document:', error)
            }
          } else {
            console.warn('⚠️ Sanity client not available to fetch slug')
          }
        }
        
        if (slug) {
          revalidatePath(`/post/${slug}`, 'page')
          console.log(`✅ Revalidated blog post: /post/${slug}`)
        } else {
          console.warn('⚠️ Could not extract slug from webhook payload, revalidating all blog pages')
          // Revalidate all blog listing pages as fallback
          revalidatePath('/post', 'page')
        }
        
        // Also revalidate category pages that might show this blog
        if (body.category) {
          let categoryTitle = null
          if (typeof body.category === 'string') {
            categoryTitle = body.category
          } else if (body.category.title) {
            categoryTitle = body.category.title
          } else if (body.category._ref) {
            // Category is a reference - fetch it
            console.log(`🔍 Category is a reference, fetching: ${body.category._ref}`)
            const client = getClient(false)
            if (client) {
              try {
                const categoryDoc = await client.fetch(
                  `*[_id == $id][0]{ title }`,
                  { id: body.category._ref }
                )
                if (categoryDoc?.title) {
                  categoryTitle = categoryDoc.title
                  console.log(`✅ Fetched category title: ${categoryTitle}`)
                }
              } catch (error) {
                console.error('❌ Error fetching category:', error)
              }
            }
          }
          
          if (categoryTitle) {
            const categorySlug = categoryTitle.toLowerCase().replace(/\s+/g, '-')
            revalidatePath(`/post/category/${categorySlug}`, 'page')
            console.log(`✅ Revalidated blog category: /post/category/${categorySlug}`)
          }
        }
        
        console.log('✅ Revalidated blog pages')
        break

      case 'testimonial':
        // Revalidate pages that show testimonials
        revalidatePath('/', 'page')
        revalidatePath('/testimonials', 'page')
        console.log('Revalidated testimonial pages')
        break

      case 'faq':
        // Revalidate pages that show FAQs
        revalidatePath('/', 'page')
        revalidatePath('/about', 'page')
        console.log('Revalidated FAQ pages')
        break

      case 'doctor':
      case 'aboutPage':
        // Revalidate about pages
        revalidatePath('/', 'page')
        revalidatePath('/about', 'page')
        revalidatePath('/about/dr-kapil-agrawal', 'page')
        console.log('Revalidated about pages')
        break

      default:
        // For any other document type, revalidate homepage and common pages
        revalidatePath('/', 'page')
        console.log(`Revalidated homepage for unknown type: ${_type}`)
    }

    // Also revalidate all pages using tags (if you use tags)
    revalidateTag('sanity-content')

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      type: _type,
      id: _id 
    })
  } catch (error) {
    console.error('Error revalidating:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Allow GET for manual revalidation
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const expectedSecret = process.env.SANITY_REVALIDATE_SECRET
  const path = request.nextUrl.searchParams.get('path')
  const type = request.nextUrl.searchParams.get('type') || 'blog'

  if (!expectedSecret) {
    return NextResponse.json({
      message: 'SANITY_REVALIDATE_SECRET not set',
      usage: 'POST to this endpoint with ?secret=YOUR_SECRET',
    })
  }

  if (secret !== expectedSecret) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    )
  }

  // Manual revalidation for a specific path
  if (path) {
    revalidatePath(path, 'page')
    return NextResponse.json({
      revalidated: true,
      path,
      now: Date.now(),
    })
  }

  // Revalidate based on type
  switch (type) {
    case 'blog':
      revalidatePath('/post', 'page')
      revalidatePath('/post/category', 'page')
      break
    case 'home':
      revalidatePath('/', 'page')
      break
    default:
      revalidatePath('/', 'page')
  }

  return NextResponse.json({
    message: 'Sanity revalidation webhook endpoint',
    revalidated: true,
    type,
    now: Date.now(),
    usage: {
      manual: 'GET /api/revalidate?secret=YOUR_SECRET&path=/post/your-slug',
      webhook: 'POST to this endpoint with ?secret=YOUR_SECRET',
    },
    note: 'Set SANITY_REVALIDATE_SECRET in your environment variables',
  })
}

