# Aantara Steel Pvt Ltd - Next.js Website

This is a Next.js conversion of the original HTML/CSS/JS website for Aantara Steel Pvt Ltd.

## Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Modern Next.js**: Built with Next.js 16 and React 19
- **TypeScript**: Full TypeScript support for better development experience
- **Optimized Images**: Using Next.js Image component for optimized loading
- **SEO Friendly**: Proper meta tags and structured data
- **Smooth Animations**: ScrollReveal animations for enhanced user experience
- **Interactive Components**: Mobile-friendly navigation and smooth scrolling

## Pages

- **Home Page** (`/`): Main landing page with all sections
- **Products Page** (`/products`): Detailed product showcase

## Sections

### Home Page Sections:
1. **Hero Section**: Company introduction with call-to-action
2. **About Section**: Company overview and mission
3. **Products Section**: Featured products showcase
4. **Services Section**: Key service offerings
5. **Contact Section**: Contact form and location map
6. **Footer**: Company links and information

### Products Page:
- Complete product catalog with detailed descriptions
- High-quality product images
- Organized product grid layout

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: Latest React version
- **TypeScript**: Type-safe development
- **CSS Custom Properties**: Modern CSS with custom variables
- **Ionicons**: Icon library for UI elements
- **ScrollReveal**: Animation library for scroll effects

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd aantara
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
aantara/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── products/
│       └── page.tsx         # Products page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Products.tsx         # Products section
│   ├── Services.tsx         # Services section
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer component
│   ├── BackToTop.tsx        # Back to top button
│   ├── IonIcon.tsx          # Icon wrapper component
│   └── ClientScripts.tsx    # Client-side scripts
├── public/
│   ├── assets/              # Images and static assets
│   ├── logo.png             # Company logo
│   └── favicon.svg          # Site favicon
└── types/
    └── global.d.ts          # TypeScript declarations
```

## Key Features Converted

### From Original HTML/CSS/JS:
- ✅ Responsive navigation with mobile menu
- ✅ Smooth scrolling and animations
- ✅ Interactive contact form
- ✅ Product showcase with hover effects
- ✅ Services section with feature cards
- ✅ Google Maps integration
- ✅ Back to top functionality
- ✅ Header scroll effects

### Enhanced in Next.js Version:
- ✅ Optimized image loading
- ✅ Better SEO with proper meta tags
- ✅ Type-safe development with TypeScript
- ✅ Component-based architecture
- ✅ Improved performance with Next.js optimizations
- ✅ Better accessibility features

## Contact Information

- **Phone**: +91 9579896842
- **Company**: Aantara Steel Pvt Ltd
- **Tagline**: CONNECT | TRADE | GROW

## License

© 2025 Aantara Steel Pvt Ltd. All Rights Reserved.