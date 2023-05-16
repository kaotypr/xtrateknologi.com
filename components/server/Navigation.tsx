import Link from 'next/link'

export default function Navigation({
  dictionary,
}: {
  dictionary: DictionaryType
}) {
  return (
    <nav className="hidden lg:block lg:h-full">
      <ul className="h-full grid grid-rows-1 grid-flow-col gap-6 justify-center items-center">
        <li>
          <Link
            href="/"
            about="Back to home"
            aria-label="Back to home"
            className="text-lg text-primary-50 hover:text-primary-10"
          >
            {dictionary.navigation.index}
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            about="See about us"
            aria-label="See about us"
            className="text-lg text-primary-50 hover:text-primary-10"
          >
            {dictionary.navigation.about}
          </Link>
        </li>
        <li>
          <Link
            href="/solutions"
            about="See our solutions"
            aria-label="See our solutions"
            className="text-lg text-primary-50 hover:text-primary-10"
          >
            {dictionary.navigation.solutions}
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            about="See our project"
            aria-label="See our project"
            className="text-lg text-primary-50 hover:text-primary-10"
          >
            {dictionary.navigation.projects}
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            about="Contact us"
            aria-label="Contact us"
            className="text-lg text-primary-50 hover:text-primary-10"
          >
            {dictionary.navigation.contact}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
