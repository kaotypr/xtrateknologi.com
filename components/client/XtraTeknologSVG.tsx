export default function XtraTeknologiSVG({
  fill = '#00BFFF',
  className,
  width,
  height,
}: {
  fill: string
  className?: string
  width?: string | number
  height?: string | number
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m24.319 22.107 8.3 15.216h-16.6l8.3-15.216ZM24.319 19.921l8.3-15.244h-16.6l8.3 15.244Z"
        fill={fill}
      />
      <path
        d="M33.717.25H13.806L0 20.723 13.806 41.75H34.86l13.28-21.027h-2.241L33.726 39.537H14.912L2.74 20.723l12.173-18.26h18.805V.25Z"
        fill={fill}
      />
      <path
        d="M45.899 20.723h11.067v2.214H45.899v-2.214ZM22.659 21 14.553 6.337l-9.6 14.386 9.96 14.94L22.658 21ZM25.951 21l8.107-14.663 9.6 14.386-9.96 14.94L25.951 21Z"
        fill={fill}
      />
    </svg>
  )
}
