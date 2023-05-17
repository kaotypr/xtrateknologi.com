import Image from 'next/image'
import { FiChevronsDown } from 'react-icons/fi'
import i18n from '@/i18n'
import CtaButton from '@/components/client/CtaButton'
import Header from '@/components/server/Header'
import MainContent from '@/components/server/MainContent'
import WEB_PATH from '@/constants/path'
import { XTRA_TEAM } from '@/constants/teams'
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
            <CtaButton
              href={WEB_PATH.contact}
              label={dictionary.page_index.actions.make_an_appointment}
            />
            <CtaButton
              href={WEB_PATH.about}
              variant="secondary"
              label={dictionary.page_index.actions.learn_more_about_us}
            />
          </div>
          <div className="flex flex-1 flex-col justify-end items-center">
            <FiChevronsDown className="mb-10 cursor-pointer text-sky-400 hover:text-sky-200 w-7 h-7" />
          </div>
          <Image
            src={landingSectionIllustration}
            alt=""
            className=" max-w-none absolute right-0 bottom-0 -z-[1] sm:w-62"
            loading="lazy"
          />
        </section>
        <section
          id="founder"
          className="px-4 py-8 sm:px-10 md:py-10 lg:px-20 lg:py-16 xl:px-40 2xl:px-64 flex flex-row justify-center items-center bg-white"
        >
          <div className="max-w-screen-2xl flex flex-row flex-wrap justify-center lg:flex-row-reverse lg:flex-nowrap ">
            <div className="lg:pl-5 flex flex-col flex-wrwap justify-center text-dark-100">
              <h2 className="text-center lg:text-left mb-5 font-bold text-4xl">
                {dictionary.page_index.sections.founder.title}
              </h2>
              <p>{dictionary.page_index.sections.founder.description}</p>
              <p className="mt-4 hidden lg:block">
                <em>{dictionary.page_index.sections.founder.quote}</em>
                <span className="text-primary-80">
                  &nbsp; {XTRA_TEAM[0].name} - Founder Xtra Teknologi
                </span>
              </p>
            </div>
            <div className="py-8 lg:py-2 max-w-[250px] lg:min-w-[200px] flex items-center">
              <Image
                src={XTRA_TEAM[0].photo}
                alt="founder photo"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <p className="text-dark-100 text-center lg:hidden">
              <em>{dictionary.page_index.sections.founder.quote}</em>
              <span className=" text-primary-80">
                &nbsp; {XTRA_TEAM[0].name} - Founder Xtra Teknologi
              </span>
            </p>
          </div>
        </section>
      </MainContent>
    </>
  )
}
