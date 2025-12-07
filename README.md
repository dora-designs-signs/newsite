# Your CNC Machining & Electrical Components Website

A professional, responsive website for precision CNC machining and routing services specializing in electrical insulation components for data centers, switchgear manufacturers, and industrial equipment.

## 🚀 Features

- **Modern, Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Clean Corporate Aesthetic** - Inspired by MetPlas, IEM, and leading B2B manufacturers
- **SEO Optimized** - Structured for search engines with proper meta tags and keywords
- **Interactive Navigation** - Smooth scrolling, sticky header, mobile-friendly menu
- **Quote Request System** - Professional form with file upload capability
- **Fast Loading** - Optimized CSS and JavaScript
- **Professional Animations** - Subtle fade-in effects and hover states

## 📁 File Structure

```
website/
├── index.html              # Homepage
├── quote.html             # Quote request form
├── css/
│   ├── styles.css         # Main stylesheet
│   └── forms.css          # Form-specific styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── forms.js           # Form handling and validation
└── README.md              # This file
```

## 🎨 Customization Guide

### 1. Update Company Information

**Replace placeholder text in all HTML files:**
- `[Your Company]` → Your actual company name
- `[Your Company Name]` → Full company name
- `(123) 456-7890` → Your phone number
- `info@yourcompany.com` → Your email address

**Find and replace in:** `index.html`, `quote.html`, and any other pages

### 2. Color Scheme

The website uses the **Red/Gray "MetPlas Style"** color scheme. To change colors, edit `css/styles.css`:

```css
:root {
    --color-primary: #D42E12;        /* Main brand color (red) */
    --color-primary-dark: #B02510;   /* Darker shade */
    --color-primary-light: #E85540;  /* Lighter shade */
    --color-secondary: #2C3E50;      /* Secondary color (dark blue-gray) */
}
```

**Alternative color schemes available in your website plan:**
- **Navy/Orange**: Primary `#2C3E50`, Accent `#E67E22`
- **Electric Blue/Red**: Primary `#3498DB`, Accent `#E74C3C`

### 3. Add Your Logo

Replace the text logo with an image:

```html
<!-- Find this in all HTML files -->
<a href="index.html" class="nav__logo">
    <span class="logo-text">[Your Company]</span>
</a>

<!-- Replace with -->
<a href="index.html" class="nav__logo">
    <img src="images/logo.png" alt="Your Company Name" height="40">
</a>
```

### 4. Add Real Images

**Create an `images/` folder and add:**
- `hero-bg.jpg` - CNC machine or shop floor (1920x1080px)
- `electrical-1.jpg` through `electrical-4.jpg` - Product photos
- `industry-datacenter.jpg` - Data center equipment
- `industry-electrical.jpg` - Switchgear/electrical equipment
- `industry-industrial.jpg` - Manufacturing equipment

**Update hero background** in `css/styles.css`:
```css
.hero {
    background-image: url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

**Replace placeholder images** in `index.html`:
```html
<!-- Find placeholder-image divs and replace with -->
<img src="images/electrical-1.jpg" alt="Electrical component description">
```

### 5. Update Navigation Links

The website includes placeholder links for:
- CNC Routing & Machining page
- Electrical Components page
- Materials page
- Industries pages
- About page
- Contact page

**To create these pages:**
1. Duplicate `quote.html` as a template
2. Update the content section
3. Keep the header and footer consistent

### 6. Configure Form Submission

The quote form currently shows a success message without actually sending data. To make it functional:

**Option 1: Use a Form Service (Easiest)**
- Sign up for [Formspree](https://formspree.io/), [FormKeep](https://formkeep.com/), or similar
- Update the form action in `quote.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Use Your Email Server**
- Set up PHP mail handler on your web server
- Update form action to point to your PHP script

**Option 3: Use a Contact Form Plugin**
- If using WordPress, install Contact Form 7 or WPForms

### 7. Add Google Analytics

Insert before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Deployment Options

### Option 1: Traditional Web Hosting
1. Upload all files to your web host via FTP/SFTP
2. Ensure folder structure is maintained
3. Set `index.html` as the default page

**Recommended hosts:**
- SiteGround
- Bluehost
- HostGator
- GoDaddy

### Option 2: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repository-name`

### Option 3: Netlify/Vercel (Free)
1. Create account on Netlify or Vercel
2. Connect your GitHub repo or drag-and-drop files
3. Automatic deployment on every update
4. Free SSL certificate included

### Option 4: Convert to WordPress
Use the provided HTML/CSS as a custom theme or page builder design in WordPress with Elementor or Divi.

## 📱 Testing Checklist

Before going live, test:

- [ ] All navigation links work
- [ ] Contact information is correct everywhere
- [ ] Forms submit successfully
- [ ] Phone numbers are clickable on mobile
- [ ] Email addresses open mail client
- [ ] Images load properly
- [ ] Site works on mobile devices
- [ ] Site works in Chrome, Firefox, Safari, Edge
- [ ] All text is spell-checked
- [ ] Meta descriptions are accurate
- [ ] Page titles are SEO-friendly

## 🔧 Technical Requirements

- **No server-side requirements** for static version
- **PHP 7.4+** if using PHP mail handler
- **Modern browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile-first responsive design** - works on all screen sizes

## 📞 Support & Customization

This website is based on your comprehensive website plan document and includes:
- ✅ Homepage with services overview
- ✅ Professional quote request form with file upload
- ✅ Mobile-responsive navigation
- ✅ SEO-optimized structure
- ✅ Clean corporate design
- ✅ Smooth animations and transitions

**Next Steps:**
1. Customize company information
2. Add your logo and images
3. Create additional service pages
4. Configure form submission
5. Set up hosting
6. Launch!

## 📊 SEO Keywords Implemented

Primary keywords in content:
- CNC routing electrical components
- GPO machining
- G-10 FR-4 machining
- Electrical insulation fabrication
- Switchgear component manufacturing
- Data center components

## 🎯 Target Audience

This website is designed to attract:
- Data center contractors and operators
- Electrical equipment manufacturers (like IEM, Eaton)
- Switchgear manufacturers
- Industrial OEMs
- Engineers specifying electrical components

## 📄 License

This website was created specifically for your CNC machining and electrical components business. Customize and use as needed for your business purposes.

---

**Ready to launch?** Follow the customization steps above, add your content and images, then deploy to your preferred hosting platform. Your professional manufacturing website will be live and ready to attract customers like IEM and Eaton! 🚀
