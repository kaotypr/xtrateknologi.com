'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import i18n from '@/i18n'
import { SolutionType } from '@/constants/solutions'

export default function SolutionCarousel({
  dictionary,
  solutions,
}: {
  dictionary: DictionaryType
  solutions: SolutionType[]
}) {
  const sliderId = 'solution-carousel-slider'
  const [slider, setSlider] = useState<HTMLElement | null>(null)
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  const slideLeft = () => {
    if (slider) {
      window.matchMedia('(min-width: 768px)').matches
        ? (slider.scrollLeft = slider.scrollLeft - 200)
        : (slider.scrollLeft = slider.scrollLeft - 130)
    }
  }

  const slideRight = () => {
    if (slider) {
      window.matchMedia('(min-width: 768px)').matches
        ? (slider.scrollLeft = slider.scrollLeft + 200)
        : (slider.scrollLeft = slider.scrollLeft + 130)
    }
  }

  const onSliderMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsMouseDown(true)
    if (slider) {
      setStartX(e.pageX - slider.offsetLeft)
      setScrollLeft(slider.scrollLeft)
    }
  }

  const onSliderMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (slider && isMouseDown) {
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1 //scroll-fast
      slider.scrollLeft = scrollLeft - walk
    }
  }

  useEffect(() => {
    setSlider(document.getElementById(sliderId))
  }, [])

  return (
    <div
      className="w-full px-8 md:px-0 relative flex flex-row items-center cursor-grab"
      onMouseDown={onSliderMouseDown}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseMove={onSliderMouseMove}
    >
      <FiChevronLeft
        onClick={slideLeft}
        className="absolute left-0 md:-left-[30px] cursor-pointer text-[30px] hover:text-primary-50"
      />
      <div
        id={sliderId}
        className="snap-x w-full px-5 py-5 md:py-10 overflow-x-auto whitespace-nowrap scroll-smooth rounded-2xl bg-[#1F1F1F] flex shadow-[inset_-6px_8px_15px_#0D0D0D] scrollbar-hide"
      >
        {solutions.map((solution) => (
          <div
            key={solution.link}
            className="snap-center min-w-[130px] md:min-w-[200px] px-2 flex flex-col justify-center items-center hover:scale-110 ease-in-out duration-300"
          >
            <Link href={solution.link} className="cursor-pointer">
              <Image
                src={solution.illustration_image}
                width={150}
                height={150}
                alt={i18n.accessor(dictionary, solution.title_dictionary)}
                className="w-[80px] md:w-[120px]"
              />
            </Link>
            <div className="mt-1 text-sm md:text-xl">
              {i18n.accessor(dictionary, solution.title_dictionary)}
            </div>
          </div>
        ))}
        {solutions.map((solution) => (
          <div
            key={solution.link}
            className="snap-center min-w-[130px] md:min-w-[200px] px-2 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <Image
              src={solution.illustration_image}
              width={150}
              height={150}
              alt={i18n.accessor(dictionary, solution.title_dictionary)}
              className="w-[80px] md:w-[120px]"
            />
            <div className="mt-1 text-sm md:text-xl">
              {i18n.accessor(dictionary, solution.title_dictionary)}
            </div>
          </div>
        ))}
        {solutions.map((solution) => (
          <div
            key={solution.link}
            className="snap-center min-w-[130px] md:min-w-[200px] px-2 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <Image
              src={solution.illustration_image}
              width={150}
              height={150}
              alt={i18n.accessor(dictionary, solution.title_dictionary)}
              className="w-[80px] md:w-[120px]"
            />
            <div className="mt-1 text-sm md:text-xl">
              {i18n.accessor(dictionary, solution.title_dictionary)}
            </div>
          </div>
        ))}
        {solutions.map((solution) => (
          <div
            key={solution.link}
            className="snap-center min-w-[130px] md:min-w-[200px] px-2 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in-out duration-300"
          >
            <Image
              src={solution.illustration_image}
              width={150}
              height={150}
              alt={i18n.accessor(dictionary, solution.title_dictionary)}
              className="w-[80px] md:w-[120px]"
            />
            <div className="mt-1 text-sm md:text-xl">
              {i18n.accessor(dictionary, solution.title_dictionary)}
            </div>
          </div>
        ))}
      </div>
      <FiChevronRight
        onClick={slideRight}
        className="absolute right-0 md:-right-[30px] cursor-pointer text-[30px] hover:text-primary-50"
      />
    </div>
  )
}
