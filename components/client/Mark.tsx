'use client'
import Link from 'next/link'
import { Z2l0aHVi, dXNlcm5hbWU } from '@/constants/enc'

export default function Mark() {
  return (
    <div
      id="all-rights-reserved-and-developer"
      className="px-4 py-1 sm:px-10 lg:px-20 absolute bottom-0 w-full bg-gradient-to-tr from-primary-100 to-primary-80 flex flex-row flex-wrap text-center justify-center md:justify-center text-sm font-normal"
    >
      <Link className="block" href={atob(Z2l0aHVi)}>
        <span
          title={atob(dXNlcm5hbWU)}
          className="text-center hover:text-primary-20 text-[0.8rem]"
        >
          © 2023 PT. Xtra Teknologi Solusi. All rights reserved
        </span>
      </Link>
    </div>
  )
}
