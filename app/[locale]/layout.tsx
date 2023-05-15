import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { i18n } from '@/i18n/config'
import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Xtra Teknologi Solusi',
  authors: {
    name: 'Adhitya Yosua Sanjaya',
    url: 'https://github.com/kaotypr',
  },
  icons: {
    shortcut: '/favicons/favicon.ico',
    apple: {
      sizes: '180x180',
      url: '/favicons/apple-touch-icon.png',
    },
    icon: [
      {
        url: '/favicons/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/favicons/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  try {
    const dictionary = await getDictionary(params.locale as Locale)
    metadata.description = dictionary.description
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
  return metadata
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
