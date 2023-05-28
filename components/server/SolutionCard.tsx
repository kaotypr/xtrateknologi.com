import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function SolutionCard({
  title,
  description,
  image,
  link,
  linkLabel,
}: {
  title: string
  description: string
  image: string
  link: string
  linkLabel: string
}) {
  return (
    <div className="min-h-[350px] sm:min-h-[300px] max-w-[350px] flex flex-col">
      <div className="w-full max-h-38 md:max-h-60 bg-dark-100 rounded-t-2xl overflow-hidden">
        <Image
          src={image}
          alt={`${title} image`}
          width={300}
          height={200}
          className="w-full"
        />
      </div>
      <div className="w-full flex flex-col flex-1 px-4 py-2 bg-white rounded-b-2xl text-dark-100 overflow-hidden">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p>{description}</p>
        <div className="mt-4 mb-2 md:my-4 md-mb-0 flex flex-1 items-end">
          <Link
            prefetch={false}
            href={link}
            className="flex flex-row items-center text-primary-80 hover:text-primary-50"
          >
            {linkLabel}
            <span className="ml-2">
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
