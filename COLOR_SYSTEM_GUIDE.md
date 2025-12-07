# Color System Guide

## How to Change Your Website Colors

Your website now uses a centralized color system. To change the entire website's color scheme, you only need to edit **TWO values** at the top of `css/styles.css`:

### Location: Line 4-5 in `css/styles.css`

```css
/* ========== MAIN BRAND COLORS (CHANGE THESE TWO TO UPDATE ENTIRE SITE) ========== */
--color-primary: #D42E12;           /* Primary brand color (buttons, accents, CTAs) */
--color-secondary: #2C3E50;         /* Secondary brand color (headers, dark sections) */
```

## What Changes When You Update These Colors?

### Primary Color (`--color-primary`)
- All buttons (Request Quote, Get Quote, etc.)
- Call-to-action elements
- Links and hover states
- Red accents throughout the site
- Left borders on material categories
- Active navigation indicators

### Secondary Color (`--color-secondary`)
- Hero section blue gradient
- Page headers (Quality, Materials, etc.)
- Footer background
- Dark CTA sections
- Timeline elements
- Navigation highlights

## Available Color Variables

Your site automatically calculates these variations:

### Primary Variations
- `--color-primary` - Main brand color
- `--color-primary-dark` - Hover states
- `--color-primary-light` - Light backgrounds

### Secondary Variations
- `--color-secondary` - Main secondary color
- `--color-secondary-dark` - Dark gradients
- `--color-secondary-light` - Light variations
- `--color-hero-start` - Hero gradient start
- `--color-hero-end` - Hero gradient end

### Neutral Colors
- `--color-text-primary` - Main text (#1A1A1A)
- `--color-text-secondary` - Secondary text (#6B6B6B)
- `--color-text-light` - Light text (white)
- `--color-background` - White background
- `--color-background-gray` - Light gray sections
- `--color-border` - Standard borders
- `--color-border-light` - Light borders

### Status Colors
- `--color-success` / `--color-success-bg` - Success messages
- `--color-error` / `--color-error-bg` - Error messages

## Examples: Popular Color Schemes

### Current Colors (Red & Navy)
```css
--color-primary: #D42E12;           /* Red */
--color-secondary: #2C3E50;         /* Navy Blue */
```

### Tech Blue & Orange
```css
--color-primary: #FF6B35;           /* Orange */
--color-secondary: #004E89;         /* Tech Blue */
```

### Professional Green & Charcoal
```css
--color-primary: #27AE60;           /* Green */
--color-secondary: #34495E;         /* Charcoal */
```

### Modern Purple & Dark Gray
```css
--color-primary: #8E44AD;           /* Purple */
--color-secondary: #2C3E50;         /* Dark Gray */
```

### Industrial Orange & Steel
```css
--color-primary: #E67E22;           /* Orange */
--color-secondary: #607D8B;         /* Steel Gray */
```

## Testing Your New Colors

1. Open `css/styles.css`
2. Find lines 4-5 (the two main color variables)
3. Change the hex color codes
4. Save the file
5. Refresh your browser (Ctrl+F5 or Cmd+Shift+R for hard refresh)

The entire website will instantly update with your new color scheme!

## Advanced Customization

If you want to adjust derived colors (like lighter/darker shades), you can modify lines 8-18 in `styles.css`. However, changing just the two main colors should be sufficient for most needs.

## Need Help Choosing Colors?

Use these tools to find colors that work well together:
- **Adobe Color**: color.adobe.com
- **Coolors**: coolors.co
- **Paletton**: paletton.com

Look for "complementary" or "analogous" color schemes for best results.
