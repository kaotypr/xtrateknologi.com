'use client'
import { useEffect, useState } from 'react'
import { FiSearch, FiMenu } from 'react-icons/fi'
import LocaleSwitcher from './LocaleSwitcher'
import Navigation from './Navigation'
import XtraTeknologiSVG from './XtraTeknologSVG'

export default function Header({ dictionary }: { dictionary: DictionaryType }) {
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true)
  const [isOpenDrawerNav, setIsOpenDrawerNav] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY <= 80) {
        setIsScrollOnTop(true)
      } else {
        setIsOpenDrawerNav(false)
        setIsScrollOnTop(false)
      }
    })
  }, [])

  return (
    <header
      className={`z-30 h-20 w-full sticky top-0 left-0 flex flex-row flex-wrap justify-between items-center px-4 lg:px-20 py-3 box-border backdrop-blur-lg ease-in duration-300 ${
        isScrollOnTop ? 'bg-dark-100/70' : 'bg-primary-100/80'
      }`}
    >
      <div className="flex flex-shrink h-14 justify-center items-center">
        <XtraTeknologiSVG
          fill={isScrollOnTop ? '#00BFFF' : '#fafafa'}
          width={60}
          height={45}
        />
      </div>
      <div className="h-14">
        <Navigation dictionary={dictionary} isScrollOnTop={isScrollOnTop} />
      </div>
      <div className="grid grid-flow-col gap-4 h-14 justify-center items-center">
        <LocaleSwitcher dictionary={dictionary} isScrollOnTop={isScrollOnTop} />
        <FiSearch
          className={`cursor-pointer w-7 h-7 ${
            isScrollOnTop
              ? 'text-primary-50/100 hover:text-primary-20'
              : 'text-white hover:text-primary-50'
          }`}
        />
        <FiMenu
          className={`block lg:hidden cursor-pointer w-7 h-7 ${
            isScrollOnTop
              ? 'text-primary-50/100 hover:text-primary-20'
              : 'text-white hover:text-primary-50'
          }`}
          onClick={() => setIsOpenDrawerNav((prevVal) => !prevVal)}
        />
      </div>
      <div
        id="drawer-nav"
        className={`w-full absolute top-20 left-0 overflow-hidden lg:!hidden transition-all ease-in-out duration-300 rounded-b-md
        ${isOpenDrawerNav ? ' max-h-[100vh] pb-6 ' : ' max-h-0 '}${
          isScrollOnTop ? ' bg-dark-100/95 ' : ' bg-primary-100/80'
        }`}
      >
        <Navigation
          dictionary={dictionary}
          isScrollOnTop={isScrollOnTop}
          isDrawerNav
        />
      </div>
    </header>
  )
}
