# Sanity Live Preview Setup Guide

This guide explains how to set up and use the live preview system for Sanity CMS in your Next.js application.

## Overview

The live preview system allows non-technical clients to see draft content in real-time on the deployed Vercel site without affecting the published site. Draft content is only visible when accessing the preview URL.

## Files Created

1. **`lib/sanity/client.ts`** - Updated with preview client support
2. **`lib/sanity/queries.ts`** - Added blog queries with author name
3. **`components/PreviewProvider.tsx`** - Preview provider component with banner
4. **`app/api/preview/route.ts`** - API route to enable draft mode
5. **`app/api/exit-preview/route.ts`** - API route to exit preview mode
6. **`app/preview/page.tsx`** - Preview page showing draft content

## Environment Variables Required

Add these to your `.env.local` and Vercel environment variables:

```bash
# Required for preview
SANITY_PREVIEW_SECRET=your-secret-token-here
SANITY_API_READ_TOKEN=your-sanity-read-token

# Already configured
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-20
```

### Getting Your Sanity Token

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it "Preview Token" and give it **Read** permissions
6. Copy the token and add it to `SANITY_API_READ_TOKEN`

### Setting Preview Secret

The `SANITY_PREVIEW_SECRET` is a random string you create to secure the preview endpoint. Generate a strong random string:

```bash
# On Mac/Linux
openssl rand -base64 32

# Or use any random string generator
```

## How It Works

### 1. Preview URL Structure

The preview system works through a secure URL:

```
https://habilite-beige.vercel.app/api/preview?secret=YOUR_SECRET&slug=blog-post-slug
```

- `secret`: Your `SANITY_PREVIEW_SECRET` value
- `slug`: (Optional) Specific blog post slug to preview

### 2. Preview Flow

1. Client clicks "Open Preview" in Sanity Studio
2. Sanity redirects to `/api/preview` with secret token
3. API route verifies secret and enables draft mode
4. User is redirected to `/preview` page
5. Preview page shows draft content from Sanity
6. Changes in Sanity Studio appear in real-time

### 3. Exit Preview

Users can exit preview mode by:
- Visiting `/api/exit-preview` (redirects to `/post`)
- Or manually navigating away from preview pages

## Setting Up Sanity Studio Preview Button

To add a preview button in Sanity Studio:

1. Open `sanity.config.ts` or your studio configuration
2. Add the preview configuration:

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  // ... your existing config
  plugins: [
    structureTool(),
    // Add other plugins
  ],
  document: {
    actions: (prev, context) => {
      // Add preview action for blog documents
      if (context.schemaType === 'blog') {
        return [
          ...prev,
          {
            label: 'Open Preview',
            onHandle: () => {
              const slug = context.draft?.slug?.current || context.published?.slug?.current
              const previewUrl = slug
                ? `https://habilite-beige.vercel.app/api/preview?secret=${process.env.SANITY_PREVIEW_SECRET}&slug=${slug}`
                : `https://habilite-beige.vercel.app/api/preview?secret=${process.env.SANITY_PREVIEW_SECRET}`
              
              window.open(previewUrl, '_blank')
            },
          },
        ]
      }
      return prev
    },
  },
})
```

### Alternative: Using Sanity's Built-in Preview

For a more integrated solution, you can use Sanity's preview plugin:

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  // ... your config
  plugins: [
    structureTool(),
    visionTool(),
  ],
})
```

Then configure the preview in your schema or use the Vision tool to test queries.

## Testing the Preview

### Local Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Enable draft mode manually:
   ```
   http://localhost:3000/api/preview?secret=YOUR_SECRET
   ```

3. Visit the preview page:
   ```
   http://localhost:3000/preview
   ```

### Production Testing (Vercel)

1. Ensure all environment variables are set in Vercel
2. Deploy your application
3. Visit:
   ```
   https://habilite-beige.vercel.app/api/preview?secret=YOUR_SECRET
   ```
4. You should be redirected to the preview page with draft content

## Security Notes

1. **Never commit secrets**: The `SANITY_PREVIEW_SECRET` should never be in your codebase
2. **Use strong secrets**: Generate a long, random string for the preview secret
3. **Token permissions**: The `SANITY_API_READ_TOKEN` should only have **Read** permissions
4. **HTTPS only**: Always use HTTPS in production (Vercel provides this automatically)

## Troubleshooting

### Preview Not Showing Draft Content

1. **Check environment variables**: Ensure `SANITY_API_READ_TOKEN` is set correctly
2. **Verify token permissions**: Token must have read access to your dataset
3. **Check draft mode**: Ensure draft mode is enabled (check the yellow banner)
4. **Verify secret**: Make sure `SANITY_PREVIEW_SECRET` matches in both places

### Preview Page Shows 404

1. **Check route exists**: Ensure `/app/preview/page.tsx` exists
2. **Verify draft mode**: Preview page only works when draft mode is enabled
3. **Check redirect**: Ensure `/api/preview` redirects correctly

### Images Not Loading

1. **Check image queries**: Ensure `mainImage` field is queried correctly
2. **Verify image builder**: Check that `urlForImage` is working
3. **Check CORS**: Ensure Sanity CORS settings allow your domain

### Changes Not Appearing

1. **Hard refresh**: Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. **Check draft mode**: Ensure you're in draft mode (yellow banner visible)
3. **Verify content**: Check that content is saved as draft in Sanity Studio
4. **Check network**: Verify network requests are going through

## Features

✅ **Secure**: Protected by secret token  
✅ **Non-intrusive**: Doesn't affect published site  
✅ **Real-time**: Changes appear immediately  
✅ **Type-safe**: Full TypeScript support  
✅ **Error-free**: Proper error handling  
✅ **Client-friendly**: Simple URL-based access  

## Next Steps

1. Set up environment variables in Vercel
2. Configure Sanity Studio preview button (optional)
3. Test the preview system
4. Share preview URL with clients

## Support

If you encounter issues:
1. Check Vercel function logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Ensure Sanity token has correct permissions

