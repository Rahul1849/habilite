# Sanity Studio Error Troubleshooting

## ✅ Fixed Issues

1. **Image Alt Text Validation** - Made optional to prevent errors with existing documents
2. **Schema Structure** - All schemas verified and corrected

## 🔍 Common Error Causes

### 1. Missing Environment Variables

**Error**: Studio can't connect to Sanity API

**Solution**:

```bash
# Check .env.local has:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-20
```

### 2. Schema Validation Errors

**Error**: "An error occurred that Sanity Studio was unable to recover from"

**Possible Causes**:

- Required fields on existing documents without data
- Invalid field types
- Circular references

**Solution**:

- ✅ Already fixed: Made image alt text optional
- Check browser console for specific error messages
- Verify all schema exports are correct

### 3. Missing Dependencies

**Error**: Import errors or module not found

**Solution**:

```bash
npm install @portabletext/react @portabletext/types
npm install
```

### 4. CORS Issues

**Error**: Can't fetch data from Sanity API

**Solution**:

1. Go to https://manage.sanity.io/
2. Settings → API → CORS Origins
3. Add `http://localhost:3000`
4. Add your production domain

## 🛠️ Debugging Steps

### Step 1: Check Browser Console

1. Open Sanity Studio
2. Press F12 to open DevTools
3. Check Console tab for specific error messages
4. Share error details for further troubleshooting

### Step 2: Verify Schema Exports

All schemas should export as `export default defineType({...})`

Check:

- ✅ `sanity/schemas/schema.ts` exports `schemaTypes` array
- ✅ All individual schemas export default
- ✅ No circular dependencies

### Step 3: Test Schema Loading

```bash
# In your project root
node -e "require('./sanity/schemas/schema.ts')"
```

### Step 4: Clear Cache

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 🔧 Quick Fixes Applied

1. ✅ Removed required validation from image alt text fields
2. ✅ Verified all schema exports
3. ✅ Checked for TypeScript errors
4. ✅ Verified import paths

## 📝 Next Steps

1. **Check Browser Console**: Look for specific error messages
2. **Verify Environment Variables**: Ensure all Sanity env vars are set
3. **Test Locally**: Try accessing `/studio` on localhost first
4. **Check Sanity Dashboard**: Verify project exists and is accessible

## 🆘 If Error Persists

1. **Copy Full Error Message**: From browser console
2. **Check Network Tab**: See if API calls are failing
3. **Verify Project ID**: Ensure it matches in `.env.local` and Sanity dashboard
4. **Try Fresh Install**:
   ```bash
   rm -rf node_modules .next
   npm install
   npm run dev
   ```

## 📋 Schema Checklist

- [x] All schemas export default
- [x] schema.ts exports schemaTypes array
- [x] No required validations on nested image alt fields
- [x] All imports are correct
- [x] No TypeScript errors
- [x] Studio config imports schemaTypes correctly
