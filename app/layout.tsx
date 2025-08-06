import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Product Imagery - Professional Product Photography Services',
    template: '%s | Product Imagery'
  },
  description: 'Professional product photography services in Pakistan. Specializing in e-commerce, lifestyle, and brand photography. Boost your sales with stunning product images that convert.',
  keywords: [
    'product photography',
    'e-commerce photography',
    'professional photographer',
    'Pakistan photography',
    'product images',
    'lifestyle photography',
    'brand photography',
    'commercial photography',
    'photography services',
    'product photoshoot'
  ],
  authors: [{ name: 'Product Imagery Team' }],
  creator: 'Product Imagery',
  publisher: 'Product Imagery',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://productimagery.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://productimagery.com',
    title: 'Product Imagery - Professional Product Photography Services',
    description: 'Professional product photography services in Pakistan. Boost your sales with stunning product images that convert.',
    siteName: 'Product Imagery',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Product Imagery - Professional Photography Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Imagery - Professional Product Photography Services',
    description: 'Professional product photography services in Pakistan. Boost your sales with stunning product images that convert.',
    images: ['/images/og-image.jpg'],
    creator: '@productimagery',
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F1D9B1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
