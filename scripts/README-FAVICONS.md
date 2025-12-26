# Favicon Generator

This portfolio includes a custom favicon with your initials "MH" (Mahabub Hossain).

## Current Setup

- **SVG Icon**: `public/icon.svg` - Main SVG icon with dark/light mode support
- **PNG Icons**: Auto-generated from SVG source
  - `icon-light-32x32.png` - Light mode version
  - `icon-dark-32x32.png` - Dark mode version
  - `apple-icon.png` - Apple touch icon (180x180)
  - `favicon-16x16.png` - Small favicon
  - `favicon-32x32.png` - Standard favicon

## How to Generate PNG Favicons

### Option 1: Using the Script (Recommended)

1. Install sharp for image processing:
   ```bash
   npm install sharp --save-dev
   ```

2. Run the favicon generator:
   ```bash
   npm run generate:favicon
   ```

The script will automatically generate all PNG files from the SVG source.

### Option 2: Online Tools

If you prefer not to install sharp, use online tools:

1. **Real Favicon Generator** (Recommended):
   - Visit: https://realfavicongenerator.net/
   - Upload `public/icon.svg`
   - Download the generated favicon package
   - Extract files to your `public/` directory

2. **Favicon Generator**:
   - Visit: https://www.favicon-generator.org/
   - Upload your SVG
   - Download and extract to `public/`

3. **Simple Icon Converter**:
   - Visit: https://convertio.co/svg-png/
   - Convert SVG to PNG in different sizes (16x16, 32x32, 180x180)
   - Save each size with appropriate names

## Customizing the Favicon

Edit `public/icon.svg` to customize the design:

1. **Colors**: Modify the `fill` values in the `<style>` section
2. **Design**: Change the `<path>` elements to create different shapes/text
3. **Background**: Adjust the `<rect>` element for different corner radius or colors

Example - Change accent color:
```xml
<style>
  @media (prefers-color-scheme: light) {
    .accent { fill: #3b82f6; } /* Blue */
  }
  @media (prefers-color-scheme: dark) {
    .accent { fill: #2563eb; } /* Darker blue */
  }
</style>
```

## Testing Your Favicon

After generating new favicons:

1. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
3. Check the browser tab for the new favicon

## Adding to New Projects

To use these favicons in another Next.js project:

1. Copy these files to the new project's `public/` directory:
   - `icon.svg`
   - `icon-light-32x32.png`
   - `icon-dark-32x32.png`
   - `apple-icon.png`

2. Update `app/layout.tsx` metadata:
```typescript
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};
```

## Troubleshooting

**Favicon not showing?**
- Clear browser cache
- Hard refresh the page (Ctrl+F5)
- Check that files are in the `public/` directory
- Verify file names match in `layout.tsx`

**SVG not rendering correctly?**
- Validate SVG at: https://validator.w3.org/
- Ensure all paths are closed
- Check that viewBox dimensions match width/height

**Script not working?**
- Ensure sharp is installed: `npm install sharp --save-dev`
- Check Node.js version (requires Node 14+)
- Verify the script has execute permissions
