'use client'

import { useRouter, usePathname, useParams } from 'next/navigation'
import { useMemo } from 'react'
import i18n from '@/i18n'
import { capitalizeFirstLetter } from '@/utils/common'
import Tooltip from './Tooltip'

export default function LocaleSwitcher({
  isScrollOnTop,
}: {
  isScrollOnTop?: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = useMemo(() => {
    return params.locale
  }, [params])
  const otherLocales: Locale[] = useMemo(() => {
    return i18n.config.locales.filter(
      (unabledLocale) => unabledLocale !== currentLocale
    )
  }, [currentLocale])

  const SwitcherOptions = ({ targetLocale }: { targetLocale: Locale }) => (
    <div className="flex justify-center">
      <button
        onClick={() =>
          router.push(pathname.replace(currentLocale, targetLocale))
        }
        className="text-sm hover:text-primary-80"
      >
        {i18n.config.localesContinuation[targetLocale]}
      </button>
    </div>
  )

  return (
    <Tooltip
      title="Switch Language"
      content={
        <div>
          {otherLocales.map((targetLocale, index) => (
            <SwitcherOptions
              key={`${targetLocale}_${index}`}
              targetLocale={targetLocale}
            />
          ))}
        </div>
      }
    >
      <div
        className={`px-1 py-[.75] min-w-[40px] text-center rounded-md border-[2px] ${
          isScrollOnTop
            ? 'text-primary-50 border-primary-50 hover:border-primary-20/100 hover:text-primary-20/100'
            : 'text-white border-white hover:text-primary-50/100 hover:border-primary-50/100'
        }`}
      >
        {capitalizeFirstLetter(currentLocale)}
      </div>
    </Tooltip>
  )
}
