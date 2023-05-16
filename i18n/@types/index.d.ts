type i18nConfigType = {
  readonly defaultLocale: 'en'
  readonly locales: readonly ['en', 'id']
}
type Locale = i18nConfigType['locales'][number]
type DictionaryType = typeof import('../dictionaries/en.json')
type DictionariesType = { [L in Locale]: () => Promise<DictionaryType> }
type getDictionaryType = (locale: Locale) => Promise<DictionaryType>