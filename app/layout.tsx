import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'St Regis Hotel and Resort | Luxury Hospitality in Benin City',
    template: '%s | St Regis Hotel and Resort',
  },
  description:
    'Experience luxury at St Regis Hotel and Resort in Benin City, Nigeria. World-class accommodations, fine dining, and premium amenities.',
  keywords: [
    'St Regis',
    'hotel',
    'resort',
    'luxury',
    'Benin City',
    'accommodation',
    'hospitality',
    'Nigeria',
    'fine dining',
    'suites',
  ],
  authors: [{ name: 'St Regis Hotel and Resort' }],
  creator: 'St Regis Hotel and Resort',
  publisher: 'St Regis Hotel and Resort',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://stregishotelandresort.com',
    siteName: 'St Regis Hotel and Resort',
    title: 'St Regis Hotel and Resort | Luxury Hospitality in Benin City',
    description:
      'Experience luxury at St Regis Hotel and Resort in Benin City, Nigeria. World-class accommodations, fine dining, and premium amenities.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'St Regis Hotel and Resort',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St Regis Hotel and Resort | Luxury Hospitality in Benin City',
    description:
      'Experience luxury at St Regis Hotel and Resort in Benin City, Nigeria.',
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://stregishotelandresort.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#1e3a5f" />
        <meta name="msapplication-TileColor" content="#1e3a5f" />
      </head>
      <body className="antialiased bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}