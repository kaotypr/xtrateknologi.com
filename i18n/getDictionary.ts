import 'server-only'
import type { Locale } from './config'
import { i18n } from './config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  id: () => import('./dictionaries/id.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  i18n.locales.includes(locale)
    ? dictionaries[locale]()
    : dictionaries[i18n.defaultLocale]()
