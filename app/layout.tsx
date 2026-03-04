import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'St Regis Hotel and Resort | Luxury Hospitality in Benin City',
  description: 'Experience luxury at St Regis Hotel and Resort in Benin City, Nigeria. World-class accommodations, fine dining, and premium amenities.',
  keywords: 'St Regis, hotel, resort, luxury, Benin City, accommodation, hospitality',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
