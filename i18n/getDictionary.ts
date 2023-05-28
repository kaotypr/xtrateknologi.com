import i18nConfig from './config'

const dictionaries: DictionariesType = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  id: () => import('./dictionaries/id.json').then((module) => module.default),
}

export const getDictionary: getDictionaryType = async (locale) =>
  i18nConfig.locales.includes(locale)
    ? dictionaries[locale]()
    : dictionaries[i18nConfig.defaultLocale]()
