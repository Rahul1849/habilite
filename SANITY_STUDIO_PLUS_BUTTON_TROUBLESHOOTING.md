# Troubleshooting: "+" Button Not Showing in Sanity Studio

## Quick Checklist

1. ✅ **Are you using the correct field?**
   - Use: **"Full Content (Blocks)"** (field name: `portableContent`)
   - NOT: "Full Content (Legacy - Markdown/Text)" (field name: `content`)

2. ✅ **Is the field empty?**
   - Type some text first to create a block
   - The "+" button appears when you press Enter or click between blocks

3. ✅ **Have you restarted Sanity Studio?**
   - After schema changes, restart the Studio
   - Run: `npm run dev` or restart your dev server

4. ✅ **Clear browser cache?**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache

## How to Use the "+" Button

### Step-by-Step Instructions:

1. **Open a blog post** in Sanity Studio
2. **Scroll down** to find **"Full Content (Blocks)"** field
3. **Click in the field** and type some text (e.g., "Hello world")
4. **Press Enter** to create a new line
5. **Look for the "+" button** that appears:
   - It appears on the left side of the editor
   - Or between blocks when you click
6. **Click the "+" button** to see the menu with:
   - Text
   - Image
   - **Table** ← This is what you want!
   - **Chart** ← This too!

### Alternative Ways to See the "+" Button:

- **Click between two text blocks** - the "+" appears in the gap
- **Click at the end of a block** - the "+" appears after it
- **Click on an empty line** - the "+" appears there

## If Still Not Working

### Check 1: Verify Schema is Loaded
1. Open browser DevTools (F12)
2. Check Console for any errors
3. Look for schema-related errors

### Check 2: Verify Table Plugin
The `@sanity/table` plugin should be:
- ✅ Installed in `package.json`
- ✅ Imported in `sanity.config.ts`
- ✅ Added to plugins array: `table()`

### Check 3: Verify Chart Schema
The chart schema should be:
- ✅ File exists: `sanity/schemas/blog/chart.ts`
- ✅ Imported in: `sanity/schemas/schema.ts`
- ✅ Added to schemaTypes array

### Check 4: Field Configuration
The `portableContent` field should:
- ✅ Type: `"array"`
- ✅ Include: `{ type: "table" }` in the `of` array
- ✅ Include: `{ type: "chart" }` in the `of` array

## Visual Guide

```
┌─────────────────────────────────────┐
│ Full Content (Blocks)                │
├─────────────────────────────────────┤
│ [Text Block 1]                       │
│   ← Click here or press Enter        │
│ [+] ← "+" button appears here        │
│ [Text Block 2]                       │
└─────────────────────────────────────┘

When you click the [+] button:
┌─────────────────────────────────────┐
│ Add block...                         │
├─────────────────────────────────────┤
│ 📝 Text                              │
│ 🖼️  Image                            │
│ 📊 Table  ← Click this!              │
│ 📈 Chart  ← Or this!                 │
└─────────────────────────────────────┘
```

## Still Having Issues?

1. **Check Sanity Studio version:**
   ```bash
   npm list sanity
   ```
   Should be v3.x

2. **Reinstall dependencies:**
   ```bash
   npm install
   ```

3. **Check for conflicts:**
   - Make sure no other plugins are interfering
   - Check if there are custom Portable Text configurations

4. **Test with a fresh blog post:**
   - Create a new blog post
   - Use only the `portableContent` field
   - Don't use the legacy `content` field

## Expected Behavior

After following these steps, you should:
- ✅ See the "+" button when pressing Enter
- ✅ See "Table" in the menu when clicking "+"
- ✅ See "Chart" in the menu when clicking "+"
- ✅ Be able to insert tables and charts into your content

