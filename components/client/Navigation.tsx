'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Navigation({
  dictionary,
  isScrollOnTop,
  isDrawerNav,
}: {
  dictionary: DictionaryType
  isScrollOnTop: boolean
  isDrawerNav?: boolean
}) {
  const params = useParams()
  return (
    <nav className={`${isDrawerNav ? '' : 'hidden'} lg:block lg:h-full`}>
      <ul
        className={`${
          isDrawerNav
            ? ' h-auto grid grid-flow-row grid-cols-1 place-content-center text-center'
            : 'h-full grid grid-rows-1 grid-flow-col'
        } gap-6 justify-center items-center`}
      >
        <li>
          <Link
            href={`/${params.locale}`}
            about="Back to home"
            aria-label="Back to home"
            className={`text-lg ${
              isScrollOnTop
                ? 'text-primary-50/100 hover:text-primary-20'
                : 'text-white hover:text-primary-50'
            }`}
          >
            {dictionary.navigation.index}
          </Link>
        </li>
        <li>
          <Link
            href={`/${params.locale}/about`}
            about="See about us"
            aria-label="See about us"
            className={`text-lg
            ${
              isScrollOnTop
                ? 'text-primary-50/100 hover:text-primary-20'
                : 'text-white hover:text-primary-50'
            }`}
          >
            {dictionary.navigation.about}
          </Link>
        </li>
        <li>
          <Link
            href={`/${params.locale}/solutions`}
            about="See our solutions"
            aria-label="See our solutions"
            className={`text-lg
            ${
              isScrollOnTop
                ? 'text-primary-50/100 hover:text-primary-20'
                : 'text-white hover:text-primary-50'
            }`}
          >
            {dictionary.navigation.solutions}
          </Link>
        </li>
        <li>
          <Link
            href={`/${params.locale}/projects`}
            about="See our project"
            aria-label="See our project"
            className={`text-lg
            ${
              isScrollOnTop
                ? 'text-primary-50/100 hover:text-primary-20'
                : 'text-white hover:text-primary-50'
            }`}
          >
            {dictionary.navigation.projects}
          </Link>
        </li>
        <li>
          <Link
            href={`/${params.locale}/contact`}
            about="Contact us"
            aria-label="Contact us"
            className={`text-lg
            ${
              isScrollOnTop
                ? 'text-primary-50/100 hover:text-primary-20'
                : 'text-white hover:text-primary-50'
            }`}
          >
            {dictionary.navigation.contact}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
