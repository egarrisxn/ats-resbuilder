import './globals.css'
import {Roboto} from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://ats-resbuilder.vercel.app'),
  title: 'ATS Resbuilder.',
  description: 'ATS Friendly Resume Builder!',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'nextjs, next14, react, reactjs, tailwindcss, javascript, mdx, markdown, json, api, resume, resume-builder',
  ],
  creator: 'https://egxo.dev.',
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ATS Resbuilder.',
    description: 'ATS Friendly Resume Builder!',
    url: 'https://ats-resbuilder.vercel.app',
    siteName: 'ats-resbuilder.vercel.app',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'ATS Friendly Resume Builder!',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS Resbuilder.',
    description: 'ATS Friendly Resume Builder!',
    creator: '@eg__xo',
    site: '@eg__xo',
    images: [
      {
        url: '/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'ATS Friendly Resume Builder!',
      },
    ],
  },
  icons: {
    icon: [
      {url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon'},
      {url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      {url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
    ],
    apple: [{url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png'}],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
