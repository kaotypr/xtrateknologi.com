import Image from 'next/image'
import i18n from '@/i18n'
import CtaButton from '@/components/client/CtaButton'
import ScrollDownButton from '@/components/client/ScrollDownButton'
import SolutionCarousel from '@/components/client/SolutionCarousel'
import Header from '@/components/server/Header'
import MainContent from '@/components/server/MainContent'
import SolutionCard from '@/components/server/SolutionCard'
import WEB_PATH from '@/constants/path'
import {
  XTRA_CAROUSEL_SOLUTION,
  XTRA_MAIN_SOLUTION,
} from '@/constants/solutions'
import { XTRA_TEAM } from '@/constants/teams'
import landingSectionIllustration from '@/public/static/images/illustrations/landing-section.png'
import landingSectionLogo from '@/public/static/images/logos/landing-section.svg'

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
            <ScrollDownButton />
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
              <h2 className="text-center lg:text-left mb-2 font-bold text-2xl">
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
        <section
          id="solutions"
          className="px-4 py-8 sm:px-10 md:py-10 lg:px-20 lg:py-16 xl:px-40 2xl:px-64 flex flex-row justify-center items-center"
        >
          <div className="mt-10 max-w-screen-2xl w-full flex flex-row flex-wrap">
            <h3 className="w-full text-center lg:text-left mb-5 font-bold text-4xl text-white">
              {dictionary.page_index.sections.solution.title}
            </h3>
            <div className="w-full px-8 md:px-0 grid grid-flow-rows rid-rows-3 md:grid-flow-col md:grid-cols-3 gap-5 items-center justify-center">
              {XTRA_MAIN_SOLUTION.map((solution) => (
                <SolutionCard
                  key={solution.link}
                  title={i18n.accessor(dictionary, solution.title_dictionary)}
                  description={i18n.accessor(
                    dictionary,
                    solution.description_dictionary
                  )}
                  image={solution.illustration_image}
                  link={solution.link}
                  linkLabel={dictionary.page_index.actions.learn_more}
                />
              ))}
            </div>
            <div className="my-10 w-full">
              <SolutionCarousel
                dictionary={dictionary}
                solutions={XTRA_CAROUSEL_SOLUTION}
              />
            </div>
            <div className="w-full flex justify-center">
              <CtaButton
                variant="secondary"
                label={dictionary.page_index.actions.more_about_our_solutions}
                href={WEB_PATH.solutions}
              />
            </div>
          </div>
        </section>
      </MainContent>
    </>
  )
}
