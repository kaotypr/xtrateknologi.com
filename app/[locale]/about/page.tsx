import Image from 'next/image'
import { FiHexagon } from 'react-icons/fi'
import i18n from '@/i18n'
import Footer from '@/components/server/Footer'
import Header from '@/components/server/Header'
import MainContent from '@/components/server/MainContent'
import MotttoCard from '@/components/server/MottoCard'
import { REASONS_CHOOSE_XTRA } from '@/constants/reasons'
import { XTRA_WORKFLOW } from '@/constants/workflow'

export default async function About({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await i18n.getDictionary(locale)
  return (
    <>
      <Header dictionary={dictionary} />
      <MainContent id="about">
        <section
          id="pt-xtra-teknologi-solusi"
          className="px-4 py-8 sm:px-10 md:py-10 lg:px-20 lg:py-16 xl:px-40 2xl:px-64 flex flex-row flex-wrap justify-start items-center"
        >
          <h1 className="mb-5 font-bold text-2xl sm:text-3xl xl:text-4xl text-primary-50">
            {dictionary.page_about.sections.pt_xtra_teknologi_solusi.title}
          </h1>
          <p>
            {
              dictionary.page_about.sections.pt_xtra_teknologi_solusi
                .description
            }
          </p>
          <div id="vision" className="mt-5">
            <div id="vision-title" className="font-bold">
              {dictionary.page_about.sections.pt_xtra_teknologi_solusi.vision}
            </div>
            <ul id="vision-descriptions">
              {dictionary.page_about.sections.pt_xtra_teknologi_solusi.vision_descriptions.map(
                (desc: string, index) => (
                  <li
                    key={`vision-desc-${index}`}
                    className="flex items-center"
                  >
                    <span className="md:w-3 mr-2 pt-1 md:pt-0 md:mr-3 text-primary-50 self-start md:self-center">
                      <FiHexagon className="w-3 md:w-4" />
                    </span>
                    <p>{desc}</p>
                  </li>
                )
              )}
            </ul>
          </div>
          <div id="mission" className="mt-5">
            <div id="mission-title" className="font-bold">
              {dictionary.page_about.sections.pt_xtra_teknologi_solusi.mission}
            </div>
            <ul id="mission-descriptions">
              {dictionary.page_about.sections.pt_xtra_teknologi_solusi.mission_descriptions.map(
                (desc: string, index) => (
                  <li
                    key={`mission-desc-${index}`}
                    className="flex items-center"
                  >
                    <span className="md:w-3 mr-2 pt-1 md:pt-0 md:mr-3 text-primary-50 self-start md:self-center">
                      <FiHexagon className="w-3 md:w-4" />
                    </span>
                    <p>{desc}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>
        <section
          id="motto"
          className="px-4 py-8 sm:px-10 md:py-10 lg:px-20 lg:py-16 xl:px-40 2xl:px-64 flex flex-row flex-wrap justify-start items-center"
        >
          <h2 className="mb-5 font-bold text-2xl sm:text-3xl xl:text-4xl text-primary-50">
            MOTTO XTRA TEKNOLOGI
          </h2>
          <div
            id="motto-cards-wrapper"
            className="w-full grid  grid-flow-col grid-rows-4 sm:grid-flow-row sm:grid-rows-1 sm:grid-cols-4 gap-3 md:gap-5"
          >
            {Object.keys(dictionary.page_about.sections.motto).map(
              (xtraLetter, index) => (
                <MotttoCard
                  key={xtraLetter}
                  letter={xtraLetter as 'X' | 'T' | 'R' | 'A'}
                  description={
                    dictionary.page_about.sections.motto[
                      xtraLetter as 'X' | 'T' | 'R' | 'A'
                    ] as string
                  }
                  isFlipped={(index + 1) % 2 === 0}
                />
              )
            )}
          </div>
        </section>
        <section
          id="workflow"
          className="px-4 py-8 sm:px-10 md:py-10 lg:px-20 lg:py-16 xl:px-40 2xl:px-64 flex flex-row flex-wrap justify-start items-center"
        >
          <h3 className="mb-5 font-bold text-2xl sm:text-3xl xl:text-4xl text-primary-50">
            {dictionary.page_about.sections.workflow.title}
          </h3>
          <div
            id="workflow-items-wrapper"
            className="w-full grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {XTRA_WORKFLOW.map(({ icon: IconWorkflow, title }) => (
              <div
                key={title}
                className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start"
              >
                <div className="flex flex-col justify-center items-center">
                  <div
                    id="workflow-item"
                    className="w-[80px] h-[80px] rounded-full bg-primary-10 flex justify-center items-center"
                    title={title}
                  >
                    <IconWorkflow className="text-4xl text-primary-90" />
                  </div>
                  <span className="mt-3 text-lg text-center">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          id="why-choose-us"
          className="px-4 py-8 sm:px-10 md:py-10 lg:px-20 lg:py-16 xl:px-40 2xl:px-64 flex flex-row flex-wrap justify-start items-center"
        >
          <h3 className="mb-5 font-bold text-2xl sm:text-3xl xl:text-4xl text-primary-50">
            {dictionary.page_about.sections.why_choose_us.title}
          </h3>
          <div
            id="why-choose-us-description"
            className="w-full flex flex-row items-start"
          >
            <Image
              src="/static/images/logos/xtrateknologi-light.svg"
              alt="xtra teknologi logo"
              width={110}
              height={100}
              className="lighter-logo mr-3 hidden sm:block"
            />
            <p>{dictionary.page_about.sections.why_choose_us.description}</p>
          </div>
          <div id="reasons-wrapper" className="w-full">
            {REASONS_CHOOSE_XTRA.map((reasonItem, index) => (
              <div
                key={`reason_${index}`}
                className="w-full my-5 bg-white rounded-2xl p-3 flex flex-col sm:flex-row flex-nowrap items-start"
              >
                <div className="flex flex-row items-center">
                  <div
                    id="reason-icon-wrapper"
                    className="p-3 sm:p-5 rounded-full bg-dark-100"
                  >
                    <Image
                      src={reasonItem.icon_source}
                      alt={i18n.accessor(
                        dictionary,
                        reasonItem.title_dictionary
                      )}
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] sm:w-[30px] sm:h-[28px]"
                    />
                  </div>
                  <div className="sm:hidden ml-3 font-bold text-2xl text-dark-100">
                    {i18n.accessor(dictionary, reasonItem.title_dictionary)}
                  </div>
                </div>
                <div
                  id="reason-content-wrapper"
                  className="flex flex-col flex-1 mt-1 sm:mt-0 sm:ml-3"
                >
                  <div className="hidden sm:block font-bold text-lg text-dark-100">
                    {i18n.accessor(dictionary, reasonItem.title_dictionary)}
                  </div>
                  <p className="text-dark-100">
                    {i18n.accessor(
                      dictionary,
                      reasonItem.description_dictionary
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </MainContent>
      <Footer dictionary={dictionary} />
    </>
  )
}
