export default function MotttoCard({
  letter,
  description,
}: {
  letter: 'X' | 'T' | 'R' | 'A'
  description: string
}) {
  const splittedDescription = description.split(' ')
  const firstWordDescription = splittedDescription.splice(0, 1)
  splittedDescription.shift()

  return (
    <div className="relative p-3 min-h-[100px] md:min-h-[150px] max-h rounded-2xl bg-primary-90 overflow-hidden">
      <div className="relative text-white z-20">
        <strong>{firstWordDescription}&nbsp;</strong>
        {splittedDescription.join(' ')}
      </div>
      <span className="absolute font-bold text-[100pt] md:text-[150pt] text-dark-100 -bottom-[70%] -left-0 sm:max-md:-bottom-[40%]">
        {letter}
      </span>
    </div>
  )
}
