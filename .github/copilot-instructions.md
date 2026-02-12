# St Regis Hotel and Resort - Luxury Website Setup

## Project Overview
This is a premium luxury hotel website built with Next.js 14, TypeScript, and Tailwind CSS for St Regis Hotel and Resort in Benin City.

## Scaffolding Complete
✓ Next.js 14 project with App Router
✓ TypeScript configuration
✓ Tailwind CSS with custom luxury theme
✓ All components created and styled

## Project Structure
```
stregis/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata & fonts
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Global styles & animations
├── components/            # React components
│   ├── Navbar.tsx         # Navigation with scroll detection
│   ├── Hero.tsx           # Full-screen video background
│   ├── RoomsGallery.tsx   # Room showcase & pricing
│   ├── Amenities.tsx      # Facilities grid
│   └── Footer.tsx         # Contact info & social links
├── public/               # Static assets
│   ├── images/          # Room photos
│   └── videos/          # Background videos
├── pics/                # Alternative media folder
├── videos/              # Alternative video folder
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind customization
├── next.config.js       # Next.js settings
├── postcss.config.js    # PostCSS plugins
└── README.md           # Full documentation
```

## Key Features Implemented

### 1. Hero Section
- Full-screen video background
- Support for 3 videos that play sequentially
- Video indicators at bottom
- Centered hotel name & welcome message
- Luxury text styling with gold glow
- Call-to-action buttons (Explore & Reserve)

### 2. Navigation Bar
- Transparent on hero, fixed on scroll
- Smooth scroll detection
- White background when scrolled
- Logo with gold accents
- Special 20% promo badge
- Book Now button
- Responsive design

### 3. Rooms Gallery
- Responsive grid layout (4 columns on desktop)
- Interactive room cards
- Expandable details
- Room pricing display
- Hover animations with gold text

### 4. Amenities Section
- 8 luxury amenities displayed
- Icon animations on hover
- Gradient backgrounds
- Responsive grid

### 5. Footer
- Complete contact information
- Address: 7 Osagiede St, Oka, Benin City 300102, Edo
- Phone: +234 906 000 1732
- Emails: info@ and reservations@stregishotelandresort.com
- Social media links (Facebook, Instagram, Twitter, LinkedIn, YouTube)
- Operating hours
- Quick links
- Copyright info

## Customization Guide

### Add Media Files

1. **Room Images**: Place JPG/PNG files in:
   - `/public/images/` (recommended)
   - Or `/pics/` folder

2. **Background Videos**: Place MP4 files in:
   - `/public/videos/` (recommended)
   - Or `/videos/` folder

Example filenames:
- video1.mp4, video2.mp4, video3.mp4
- room1.jpg, room2.jpg, room3.jpg, room4.jpg

### Update Content

**Hotel Information (Footer)**:
Edit [components/Footer.tsx](components/Footer.tsx) lines 65-95

**Room Details**:
Edit [components/RoomsGallery.tsx](components/RoomsGallery.tsx) lines 8-24

**Amenities**:
Edit [components/Amenities.tsx](components/Amenities.tsx) lines 4-35

### Color Scheme

Primary colors in [tailwind.config.ts](tailwind.config.ts):
- Gold (Luxury accent): #D4AF37
- Dark Gold (Hover): #8B7500
- Dark Background: #0F0F0F
- Light Gray (Text): #F5F5F5

## Development Commands

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Server Details

- **Development Server**: http://localhost:3000
- **Port**: 3000 (configurable in next.config.js)
- **Hot Reload**: Enabled by default

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Performance Features

- Optimized images with Next.js Image component
- Lazy loading for components
- Smooth CSS animations
- Efficient Tailwind CSS bundle
- Fast page transitions

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Any Node.js hosting
- Docker deployment supported

## Troubleshooting

### Videos Not Playing
1. Check format is MP4 (H.264 codec)
2. Verify file paths match in [Hero.tsx](components/Hero.tsx)
3. Check file permissions

### Images Not Showing
1. Place files in `/public/images/` folder
2. Use lowercase filenames
3. Verify paths in component files

### Build Errors
1. Run `npm install` again
2. Clear `.next` folder: `rm -rf .next`
3. Run `npm run build` again

### Styling Issues
1. Check Tailwind classes exist in globals.css
2. Verify tailwind.config.ts extends properly
3. Hard refresh browser (Ctrl+Shift+R)

## Production Checklist

Before deploying:
- [ ] Add all hotel images to `/public/images/`
- [ ] Add all 3 background videos to `/public/videos/`
- [ ] Update hotel address in Footer
- [ ] Update phone numbers and emails
- [ ] Verify all links work properly
- [ ] Test on mobile devices
- [ ] Set up SSL certificate
- [ ] Configure domain DNS
- [ ] Run final build: `npm run build`

## Support & Maintenance

For updates or modifications:
1. Edit component files in `/components/`
2. Restart dev server if needed
3. Test changes
4. Rebuild before production deploy

---
**Domain**: stregishotelandresort.com
**Last Updated**: February 2026
**Built with**: Next.js 14, React 18, TypeScript, Tailwind CSS
