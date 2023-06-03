import { FiHexagon } from 'react-icons/fi'
import i18n from '@/i18n'
import Footer from '@/components/server/Footer'
import Header from '@/components/server/Header'
import MainContent from '@/components/server/MainContent'
import MotttoCard from '@/components/server/MottoCard'
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
      </MainContent>
      <Footer dictionary={dictionary} />
    </>
  )
}
