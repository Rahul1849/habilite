import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const redirectTo = searchParams.get('redirect')

  // Verify the secret token
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable draft mode
  draftMode().enable()

  // Redirect to the requested path or default blog listing
  const destination =
    redirectTo && redirectTo.startsWith('/')
      ? redirectTo
      : slug
        ? `/post/${slug}`
        : '/post'

  redirect(destination)
}

