import { FiHexagon } from 'react-icons/fi'
import i18n from '@/i18n'
import Footer from '@/components/server/Footer'
import Header from '@/components/server/Header'
import MainContent from '@/components/server/MainContent'

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
          <h1 className="mb-5 font-bold text-3xl md:text-5xl text-primary-50">
            PT. Xtra Teknologi Solusi
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
      </MainContent>
      <Footer dictionary={dictionary} />
    </>
  )
}
