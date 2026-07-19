
import React, { ReactNode } from 'react'

interface NavbarRoot{
  children?: ReactNode
}

const NavbarRoot = ({children}: NavbarRoot) => {
  return (
    <nav className="flex flex-col gap-5 mt-15 text-white pl-2 pr-2">
      {children}
    </nav>
  )
}

export default NavbarRoot