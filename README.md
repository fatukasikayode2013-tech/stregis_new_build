# St. Regis Hotel and Resort

A modern, luxury hotel website built with Next.js 14, TypeScript, and Tailwind CSS.

![St Regis Hotel](https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200)

## Features

- 🎨 **Modern Design** - Elegant luxury hotel design with gold and navy color scheme
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🌙 **Dark Mode Ready** - CSS variables configured for dark mode support
- ⚡ **Performance Optimized** - Image optimization, code splitting, and caching
- ♿ **Accessible** - WCAG 2.1 compliant with proper ARIA labels
- 📧 **Contact Form** - Integrated email system with Nodemailer
- 🎭 **Smooth Animations** - Framer Motion powered scroll animations
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Images**: Next.js Image Optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stregishotelandresort.git
   cd stregishotelandresort
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:
   ```env
   # SMTP Configuration
   SMTP_HOST=smtp.zoho.com
   SMTP_PORT=587
   SMTP_USER=your-email@stregishotelandresort.com
   SMTP_PASS=your-password
   
   # Site URL
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

## Project Structure

```
stregis/
├── app/
│   ├── api/              # API routes
│   │   ├── send-reservation/
│   │   └── verify/
│   ├── components/       # React components
│   │   ├── About.tsx
│   │   ├── Amenities.tsx
│   │   ├── Contact.tsx
│   │   ├── CTA.tsx
│   │   ├── Events.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Reveal.tsx    # Animation wrapper
│   │   ├── Rooms.tsx
│   │   └── Testimonials.tsx
│   ├── hooks/            # Custom React hooks
│   │   └── useIntersectionObserver.ts
│   ├── lib/              # Utility functions
│   ├── confirmation/     # Confirmation page
│   ├── offer/            # Special offers page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/
│   ├── images/           # Static images
│   ├── logo.png          # Logo
│   └── videos/           # Background videos
├── data/                 # JSON data files
├── .env.example          # Environment variables template
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Configuration

### Tailwind CSS

The project uses a custom color palette defined in `tailwind.config.ts`:

```ts
colors: {
  gold: { DEFAULT: '#c9a961', /* ... */ },
  navy: { DEFAULT: '#1e3a5f', /* ... */ },
  cream: { DEFAULT: '#FCFBF8', /* ... */ },
}
```

### Design Tokens

CSS custom properties are defined in `app/globals.css` for consistent theming:

```css
:root {
  --color-gold: #c9a961;
  --color-navy: #1e3a5f;
  --font-primary: 'Inter', sans-serif;
  --font-display: 'Playfair Display', serif;
}
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Self-hosted

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

- **Website**: [stregishotelandresort.com](https://stregishotelandresort.com)
- **Email**: info@stregishotelandresort.com
- **Phone**: 0906 000 1732
- **Address**: 7 Osagiede Street, Oka, Benin City, Edo State, Nigeria

---

Built with ❤️ by the St. Regis Development Team# stregis_new_build
