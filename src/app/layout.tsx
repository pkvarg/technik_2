import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import FooterServerComponent from './components/translationServerComponents/FooterServerComponent'
import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from 'react-hot-toast'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Technik',
  description: 'Komorný orcherster',
}

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'sk' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: 'en-US' | 'sk' }>
}>) {
  return (
    <html lang={(await params).lang}>
      <head>
        <script defer src="https://umami-p00gs00gwcwo00s4k4c4kgg8.pictusweb.com/script.js" data-website-id="976e3952-8188-4681-95fb-42296c85b8b1"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>
          <Toaster />
          {children}
          <FooterServerComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
