export default function MainContent({
  children,
  id,
}: {
  children: React.ReactNode
  id?: string
}) {
  return <main id={id}>{children}</main>
}
