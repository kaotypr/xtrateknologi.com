import Image from 'next/image'
import Link from 'next/link'
import i18n from '@/i18n'
import {
  footerContactInfo,
  footerInformation,
  footerServices,
  footerSocialMedia,
} from '@/constants/footer'

export default function Footer({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <footer
      id="footer"
      className="relative px-4 pt-8 pb-28 sm:px-10 md:py-10 lg:px-20 lg:py-16 xl:px-40 2xl:px-64 flex flex-row flex-wrap justify-center items-center bg-white overflow-hidden"
    >
      <div
        id="footer-divider"
        className="absolute top-0 left-0 w-full h-2 bg-primary-50 opacity-10"
      ></div>
      <div className="w-full grid grid-flow-row grid-cols-2 gap-5 md:grid-cols-10 z-10">
        <div className="md:col-span-2 text-primary-90 my-4 lg:my-0 ">
          <div className="text-md font-bold mb-2">
            {dictionary.footer.information.title}
          </div>
          {footerInformation.map((footItem) => (
            <Link key={footItem.link} href={footItem.link} prefetch={false}>
              <span className="block text-sm my-1">
                {i18n.accessor(dictionary, footItem.title_dictionary)}
              </span>
            </Link>
          ))}
        </div>
        <div className="md:col-span-2 text-primary-90 my-4 lg:my-0 ">
          <div className="text-md font-bold mb-2">
            {dictionary.footer.services.title}
          </div>
          {footerServices.map((footItem) => (
            <Link key={footItem.link} href={footItem.link} prefetch={false}>
              <span className="block text-sm my-1">
                {i18n.accessor(dictionary, footItem.title_dictionary)}
              </span>
            </Link>
          ))}
        </div>
        <div className="md:col-span-3 text-primary-90 my-4 lg:my-0 ">
          <div className="text-md font-bold mb-2">
            {dictionary.footer.contact_info.title}
          </div>
          {footerContactInfo.map(({ icon: Icon, ...footItem }) => (
            <div key={footItem.id} className="my-1">
              <Link href={footItem.link} className="flex" prefetch={false}>
                <Icon className="inline text-[18px]" />
                <span className="text-sm ml-2 flex-1">{footItem.content}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:col-span-3 text-primary-90 my-4 lg:my-0">
          <div className="text-md font-bold mb-2">
            {dictionary.footer.social_media.title}
          </div>
          <div className="flex flex-row flex-wrap items-center">
            {footerSocialMedia.map((footItem) => (
              <Link
                key={footItem.id}
                href={footItem.link}
                className="mx-1 my-1 w-[30px] h-[30px] flex justify-center"
                prefetch={false}
              >
                <Image
                  src={footItem.imgSrc}
                  width={50}
                  height={50}
                  alt={footItem.imgAlt}
                  className="max-w-[unset]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        id="footer-background-image"
        className="w-full h-[120px] absolute bottom-7 left-0"
      ></div>
      <div
        id="all-rights-reserved-and-developer"
        className="px-4 py-1 sm:px-10 lg:px-20 absolute bottom-0 w-full bg-gradient-to-tr from-primary-100 to-primary-80 flex flex-row flex-wrap text-center justify-center md:justify-between text-sm font-normal"
      >
        <Link className="block" href={'https://github.com/kaotypr'}>
          <span className="text-center hover:text-primary-20 text-[0.8rem]">
            © 2023 PT. Xtra Teknologi Solusi. All rights reserved
          </span>
        </Link>
        <Link className="ml-2 block" href={'https://github.com/kaotypr'}>
          <span className="hover:text-primary-20 text-[0.8rem]">
            Designed by @kaotypr
          </span>
        </Link>
      </div>
    </footer>
  )
}
