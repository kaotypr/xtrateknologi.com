import Image from 'next/image'
import { FiChevronsDown } from 'react-icons/fi'
import i18n from '@/i18n'
import CtaButton from '@/components/client/CtaButton'
import Header from '@/components/server/Header'
import MainContent from '@/components/server/MainContent'
import WEB_PATH from '@/constants/path'
import landingSectionIllustration from '@/public/static/images/landing-section-illustration.png'
import landingSectionLogo from '@/public/static/images/landing-section-logo.svg'

export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await i18n.getDictionary(locale)

  return (
    <>
      <Header dictionary={dictionary} />
      <MainContent>
        <section
          id="#"
          className="relative min-h-[calc(100vh-6rem)] mt-5 px-4 xl:px-60 box-border flex flex-col"
        >
          <div className="flex mt-1 md:mt-12 lg:mt-20 px-8 justify-center">
            <Image src={landingSectionLogo} alt="XTRA TEKNOLOGI LOGO" />
          </div>
          <div className="mt-10 md:mt-16 lg:mt-20px-4 text-center flex flex-col items-center">
            <h1 className="mb-5 font-bold text-5xl">Xtra Teknologi</h1>
            <p className="max-w-2xl">{dictionary.description}</p>
          </div>
          <div className="mt-10 flex flex-row flex-wrap justify-center">
            <CtaButton href={WEB_PATH.contact} label="Make An Appointment" />
            <CtaButton
              href={WEB_PATH.about}
              variant="secondary"
              label="Learn More About Us"
            />
          </div>
          <div className="flex flex-1 flex-col justify-end items-center">
            <FiChevronsDown className="mb-10 cursor-pointer text-sky-400 hover:text-sky-200 w-7 h-7" />
          </div>
          <Image
            src={landingSectionIllustration}
            alt=""
            className="absolute right-0 bottom-0 -z-[1] sm:w-62"
            loading="lazy"
          />
        </section>
      </MainContent>
    </>
  )
}
