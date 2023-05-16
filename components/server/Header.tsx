import Image from 'next/image'
import { FiSearch, FiMenu } from 'react-icons/fi'
import Navigation from './Navigation'

export default function Header({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <header className="z-10 h-20 w-full sticky top-0 left-0 flex flex-row justify-between items-center px-4 lg:px-20 py-3 box-border backdrop-blur-lg bg-dark-100[.80]">
      <div className="flex flex-shrink h-14 justify-center items-center">
        <Image
          src="/static/images/xtrateknologi-logo.png"
          alt="xtra logo"
          width={50}
          height={38}
        />
      </div>
      <div className="h-14">
        <Navigation dictionary={dictionary} />
      </div>
      <div className="grid grid-flow-col gap-4 h-14 justify-center items-center">
        <FiSearch className="cursor-pointer text-primary-50 hover:text-primary-20 w-7 h-7" />
        <FiMenu className="block lg:hidden cursor-pointer text-primary-50 hover:text-primary-20 w-7 h-7" />
      </div>
    </header>
  )
}