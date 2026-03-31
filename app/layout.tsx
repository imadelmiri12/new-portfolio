import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Imad Elmiri - Full-Stack Developer & AI Engineer',
  description:
    'Portfolio of Imad Elmiri — Full-Stack Developer and AI/Data Science student at FSTT Tanger. Seeking PFA internship. Specialized in React, Next.js, Python, Machine Learning and Deep Learning.',
  keywords:
    'Imad Elmiri, Full-Stack Developer, React, Next.js, Python, AI, Machine Learning, Deep Learning, CNN, Data Science, FSTT Tanger, PFA, Stage, Portfolio, Morocco',
  authors: [{ name: 'Imad Elmiri', url: 'https://github.com/imadelmiri12' }],
  creator: 'Imad Elmiri',

  // Open Graph — shows rich preview when shared on LinkedIn, WhatsApp, etc.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imadelmiri.vercel.app',
    siteName: 'Imad Elmiri — Portfolio',
    title: 'Imad Elmiri - Full-Stack Developer & AI Engineer',
    description:
      'Full-Stack Developer & AI/Data Science student seeking PFA internship. Projects in React, Next.js, Python, ML and Deep Learning.',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Imad Elmiri - Full-Stack Developer',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Imad Elmiri - Full-Stack Developer & AI Engineer',
    description:
      'Full-Stack Developer & AI/Data Science student seeking PFA internship.',
    images: ['/profile.jpg'],
  },

  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}