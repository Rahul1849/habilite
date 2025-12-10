# Sanity Studio Deployment Instructions

## ✅ Created Files
- `sanity.cli.js` - CLI configuration file (required for `sanity deploy`)

## 🔧 Setup Steps

### 1. Get Your Sanity Project ID

If you don't have a Sanity project yet:
```bash
sanity init
```

If you already have a project:
- Go to https://manage.sanity.io/
- Select your project
- Copy the Project ID from the project settings

### 2. Set Environment Variables

Create or update `.env.local` in your project root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-20
```

### 3. Deploy Studio

Once environment variables are set:
```bash
sanity deploy
```

The CLI will:
- Ask you to authenticate (if not already logged in)
- Deploy your studio to `https://your-project.sanity.studio`

## 🔄 Alternative: Hardcode Project ID (Temporary)

If you need to deploy immediately without environment variables, you can temporarily hardcode in `sanity.cli.js`:

```javascript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'your_project_id_here',  // Hardcode your project ID
    dataset: 'production',
  },
  project: {
    basePath: '/studio',
  },
})
```

**⚠️ Warning**: Don't commit hardcoded project IDs to version control. Use environment variables for production.

## 📝 Next Steps After Deployment

1. **Add CORS Origin**: 
   - Go to https://manage.sanity.io/
   - Settings → API → CORS Origins
   - Add `http://localhost:3000` for local development
   - Add your production domain for live site

2. **Populate Content**:
   - Access studio at the deployed URL or `/studio` locally
   - Start adding content through the CMS

3. **Verify Integration**:
   - Check that content appears on your site
   - Test image uploads
   - Verify all schemas are working

## 🐛 Troubleshooting

### Error: "project identifier required"
- ✅ Make sure `.env.local` has `NEXT_PUBLIC_SANITY_PROJECT_ID`
- ✅ Or hardcode project ID in `sanity.cli.js` temporarily
- ✅ Restart terminal/command prompt after setting env vars

### Error: "Authentication required"
```bash
sanity login
```

### Error: "CORS error" when accessing studio
- Add your localhost URL to CORS origins in Sanity management console

