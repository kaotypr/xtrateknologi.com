import './globals.css'
import { Metadata } from 'next'
import i18n from '@/i18n'
import { getDictionary } from '@/i18n/getDictionary'
import { font_Saira } from '@/utils/fonts'

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
  return i18n.config.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}) {
  try {
    const dictionary = await getDictionary(params.locale)
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
  params: { locale: Locale }
}) {
  return (
    <html lang={params.locale}>
      <body className={font_Saira.className}>{children}</body>
    </html>
  )
}
