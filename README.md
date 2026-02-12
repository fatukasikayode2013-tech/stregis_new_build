# St Regis Hotel and Resort - Luxury Website

A premium luxury hotel website built with Next.js 14, TypeScript, Tailwind CSS, and modern web technologies.

## 🏨 Features

- **Responsive Design**: Fully responsive across all devices
- **Hero Section**: Full-screen video background with multiple videos and smooth transitions
- **Dynamic Navigation**: Fixed navbar with scroll effects and special promo offers
- **Rooms Gallery**: Interactive room showcase with pricing and features
- **Amenities Section**: World-class facilities display with hover animations
- **Luxury Footer**: Complete contact information, social media links, and business hours
- **Modern Animations**: Smooth fade-in effects, hover states, and transitions
- **Tailwind CSS**: Custom styling with gold and dark theme colors
- **SEO Optimized**: Proper metadata and semantic HTML

## 📋 Project Structure

```
stregis/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main home page
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Navigation with scroll detection
│   ├── Hero.tsx            # Full-screen video hero section
│   ├── RoomsGallery.tsx    # Rooms showcase
│   ├── Amenities.tsx       # Amenities grid
│   └── Footer.tsx          # Footer with contact info
├── public/
│   ├── images/             # Room images folder
│   └── videos/             # Background videos folder
├── pics/                   # Alternative images folder
├── videos/                 # Alternative videos folder
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd stregis
```

2. Install dependencies:
```bash
npm install
```

3. Add your media files:
   - Place hotel room images in `/public/images/` folder
   - Place background videos in `/public/videos/` folder
   - Or use files from `/pics/` and `/videos/` folders

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Production Build

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
- Gold/Primary: `#D4AF37`
- Dark Gold: `#8B7500`
- Dark Background: `#0F0F0F`
- Light Gray: `#F5F5F5`

### Content
- Update hotel information in [components/Footer.tsx](components/Footer.tsx)
- Modify room details in [components/RoomsGallery.tsx](components/RoomsGallery.tsx)
- Change amenities in [components/Amenities.tsx](components/Amenities.tsx)

### Videos and Images
- Replace video sources in [components/Hero.tsx](components/Hero.tsx)
- Update image paths for room gallery
- Ensure videos are in H.264 format for better compatibility

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO

The site includes:
- Proper meta tags and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- CSS animations for engagement

## 📞 Contact Information

- **Address**: 7 Osagiede St, Oka, Benin City 300102, Edo
- **Phone**: +234 906 000 1732
- **Email**: info@stregishotelandresort.com
- **Reservations**: reservations@stregishotelandresort.com
- **Domain**: stregishotelandresort.com

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## 📄 License

This project is proprietary to St Regis Hotel and Resort.

## 👨‍💻 Development Notes

- The navbar automatically fixes and changes appearance on scroll
- Videos play sequentially and loop through all available videos
- All components are client-side for smooth interactions
- Mobile menu can be extended with hamburger navigation if needed

## 🌐 Deployment

This site can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

For Vercel deployment:
```bash
vercel deploy
```

---

**Made with ✨ for luxury hospitality**
