import CtaButton from '@/components/client/CtaButton'
import MainContent from '@/components/server/MainContent'
import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'

export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <MainContent>
      <h1>Xtra Teknologi: {dictionary.welcome}</h1>
      <CtaButton />
    </MainContent>
  )
}
