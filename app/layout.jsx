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
  title: {
    default: 'ATS | Resbuilder',
    template: `ATS | %s`,
  },
  description: 'An ATS Friendly Resume & Cover Letter Builder!',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'nextjs, next15, react, reactjs, tailwindcss, javascript, mdx, markdown, json, api, resume, resume-builder',
  ],
  creator: 'https://egxo.dev.',
  openGraph: {
    title: 'ATS | Resbuilder',
    description: 'An ATS Friendly Resume & Cover Letter Builder!',
    url: 'https://ats-resbuilder.vercel.app',
    siteName: 'ats-resbuilder.vercel.app',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS | Resbuilder',
    description: 'An ATS Friendly Resume & Cover Letter Builder!',
    creator: '@eg__xo',
    site: '@eg__xo',
  },
  icons: {
    icon: {
      url: '/icon.png',
      sizes: '192x192',
      type: 'image/png',
    },
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: {
      rel: 'icon',
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
  },
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
