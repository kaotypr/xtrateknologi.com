import i18n from '@/i18n'
import Footer from '@/components/server/Footer'
import Header from '@/components/server/Header'
import MainContent from '@/components/server/MainContent'

export default async function Solutions({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await i18n.getDictionary(locale)
  return (
    <>
      <Header dictionary={dictionary} locale={locale} />
      <MainContent>
        <h1>Solutions</h1>
      </MainContent>
      <Footer dictionary={dictionary} />
    </>
  )
}
