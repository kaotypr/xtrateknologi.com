import { MetadataRoute } from 'next'
import i18n from '@/i18n'
import WEB_PATH from '@/constants/path'
import { WEB_URL } from '@/constants/url'

export default function sitemap(): MetadataRoute.Sitemap {
  const mainUrls = Object.keys(WEB_PATH).map((path) =>
    path === 'index'
      ? WEB_URL
      : WEB_URL + WEB_PATH[path as keyof typeof WEB_PATH]
  )
  const multilingualUrls: string[] = []

  mainUrls.forEach((url) => {
    i18n.config.locales.forEach((locale) => {
      multilingualUrls.push(url + '/' + locale)
    })
  })

  return [...mainUrls, ...multilingualUrls].map((url) => ({
    url,
    lastModified: new Date(),
  }))
}
