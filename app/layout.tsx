import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'St Regis Hotel and Resort | Luxury Accommodation in Benin City',
  description: 'Experience luxury hospitality at St Regis Hotel and Resort in Benin City. Premium rooms, world-class amenities, and exceptional service.',
  keywords: 'luxury hotel, Benin City, accommodation, resort, St Regis',
  openGraph: {
    title: 'St Regis Hotel and Resort',
    description: 'Experience luxury hospitality at its finest',
    url: 'https://stregishotelandresort.com',
    siteName: 'St Regis Hotel and Resort',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-lightBg text-textPrimary">
        {children}
      </body>
    </html>
  )
}
