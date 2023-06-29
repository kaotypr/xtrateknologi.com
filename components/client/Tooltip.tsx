'use client'
export default function Tooltip({
  children,
  title,
  content,
}: {
  children: JSX.Element
  title: string
  content: JSX.Element
}) {
  return (
    <div
      id="tooltip"
      className="group relative inline-block p-0 m-0 cursor-pointer"
    >
      {children}
      <div
        id="tooltip-container"
        className="absolute top-[calc(100%+10px)] left-[50%] hidden group-hover:block translate-x-[-50%] bg-primary-90 text-white rounded-md shadow-lg drop-shadow-sm"
      >
        <div
          id="tooltip-title"
          className="px-2 py-1 text-xs inline-block whitespace-nowrap"
        >
          {title}
        </div>
        <div
          id="tooltip-content"
          className="px-2 py-2 text-dark-100 bg-slate-50 rounded-b-md"
        >
          {content}
        </div>
        <div
          id="tooltip-arrow"
          className="absolute top-[-10px] left-[calc(50%-8px)] border-x-[8px] border-x-[transparent] border-b-[10px] border-primary-90"
        ></div>
      </div>
    </div>
  )
}
