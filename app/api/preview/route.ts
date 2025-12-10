import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Verify the secret token
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable draft mode
  draftMode().enable()

  // Redirect to the preview page or specific blog post
  if (slug) {
    redirect(`/preview?slug=${slug}`)
  } else {
    redirect('/preview')
  }
}

