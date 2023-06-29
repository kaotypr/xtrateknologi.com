'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiSearch, FiMenu } from 'react-icons/fi'
import LocaleSwitcher from './LocaleSwitcher'
import Navigation from './Navigation'

export default function Header({ dictionary }: { dictionary: DictionaryType }) {
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY <= 80) {
        setIsScrollOnTop(true)
      } else {
        setIsScrollOnTop(false)
      }
    })
  }, [])

  return (
    <header
      className={`z-30 h-20 w-full sticky top-0 left-0 flex flex-row justify-between items-center px-4 lg:px-20 py-3 box-border backdrop-blur-lg ease-in duration-300 ${
        isScrollOnTop ? 'bg-dark-100/70' : 'bg-primary-100/70'
      }`}
    >
      <div className="flex flex-shrink h-14 justify-center items-center">
        <Image
          src="/static/images/logos/xtrateknologi.svg"
          alt="xtra logo"
          width={50}
          height={38}
        />
      </div>
      <div className="h-14">
        <Navigation dictionary={dictionary} isScrollOnTop={isScrollOnTop} />
      </div>
      <div className="grid grid-flow-col gap-4 h-14 justify-center items-center">
        <LocaleSwitcher isScrollOnTop={isScrollOnTop} />
        <FiSearch
          className={`cursor-pointer w-7 h-7 ${
            isScrollOnTop
              ? 'text-primary-50/100 hover:text-primary-20'
              : 'text-white hover:text-primary-50'
          }`}
        />
        <FiMenu className="block lg:hidden cursor-pointer hover:text-primary-20 w-7 h-7" />
      </div>
    </header>
  )
}
