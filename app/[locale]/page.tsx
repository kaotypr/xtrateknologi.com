import i18n from '@/i18n'
import CtaButton from '@/components/client/CtaButton'
import MainContent from '@/components/server/MainContent'

export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await i18n.getDictionary(locale)

  return (
    <MainContent>
      <h1>Xtra Teknologi: {dictionary.welcome}</h1>
      <CtaButton />
    </MainContent>
  )
}
