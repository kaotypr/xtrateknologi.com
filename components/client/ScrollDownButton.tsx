'use client'
import { FiChevronsDown } from 'react-icons/fi'

export default function ScrollDownButton({ toId }: { toId?: string }) {
  const onClick = () => {
    if (toId) {
      const targetScroll = document.getElementById(toId)
      if (targetScroll) {
        targetScroll.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    } else {
      scrollBy({
        top: document.documentElement.clientHeight - 80,
        behavior: 'smooth',
      })
    }
  }
  return (
    <FiChevronsDown
      onClick={onClick}
      className="mb-10 cursor-pointer text-sky-400 hover:text-sky-200 w-7 h-7"
    />
  )
}
