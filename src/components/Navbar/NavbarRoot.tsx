import type { ReactNode } from 'react'

interface NavbarRootProps{
  children?: ReactNode
}

export default function NavbarRoot({children}: NavbarRootProps) {
  return (
    <nav className="flex flex-col gap-5 mt-15 text-white pl-2 pr-2">
      {children}
    </nav>
  )
}
