
import React, { ReactNode } from 'react'

interface NavbarRoot{
  children?: ReactNode
}

const NavbarRoot = ({children}: NavbarRoot) => {
  return (
    <nav className="flex flex-col gap-3 mt-8 text-white">
      {children}
    </nav>
  )
}

export default NavbarRoot