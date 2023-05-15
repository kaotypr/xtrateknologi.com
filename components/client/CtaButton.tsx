'use client'

export default function CtaButton() {
  const handleClick = () => {
    window.alert('Clicked!')
  }
  return <button onClick={handleClick}>Call To Action</button>
}
