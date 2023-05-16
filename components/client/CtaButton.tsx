'use client'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'

interface ICtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: 'primary' | 'secondary'
  icon?: IconType
  href: string
}

export default function CtaButton({
  variant = 'primary',
  label,
  icon: CtaIcon,
  href,
  onClick,
  ...buttonProps
}: ICtaButtonProps) {
  const router = useRouter()

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClick && !href) {
        onClick(event)
        return
      }
      if (href) {
        router.push(href)
      }
    },
    [href, onClick, router]
  )

  if (variant === 'secondary') {
    return (
      <button
        {...buttonProps}
        onClick={handleClick}
        className="group mx-3 my-2 px-10 py-2 flex flex-row flex-wrap items-center justify-center border-2 border-primary-50 rounded-3xl cursor-pointer hover:border-primary-80"
      >
        <div className="text-md lg:text-lg font-medium text-primary-50 group-hover:text-primary-80">
          {label}
        </div>
        {CtaIcon && <CtaIcon className="ml-5" />}
      </button>
    )
  }

  return (
    <button
      {...buttonProps}
      onClick={handleClick}
      className="group mx-3 my-2 px-10 py-2 flex flex-row flex-wrap items-center justify-center rounded-3xl cursor-pointer bg-gradient-to-tr from-primary-80 to-primary-30 hover:from-primary-100 hover:to-primary-50"
    >
      <div className="text-md lg:text-lg font-medium text-dark-100 group-hover:text-dark-100 group-focus:text-dark-100">
        {label}
      </div>
      {CtaIcon && <CtaIcon className="ml-5" />}
    </button>
  )
}
