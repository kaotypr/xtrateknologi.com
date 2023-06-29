import i18n from '@/i18n'
import Header from '@/components/client/Header'
import Footer from '@/components/server/Footer'
import MainContent from '@/components/server/MainContent'

export default async function Solutions({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await i18n.getDictionary(locale)
  return (
    <>
      <Header dictionary={dictionary} />
      <MainContent>
        <h1>Solutions</h1>
      </MainContent>
      <Footer dictionary={dictionary} />
    </>
  )
}
