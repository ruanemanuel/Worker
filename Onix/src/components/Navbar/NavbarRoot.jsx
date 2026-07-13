
import React from 'react'

const NavbarRoot = ({children}) => {
  return (
    <nav className="flex flex-col gap-3 mt-8 text-white">
      {children}
    </nav>
  )
}

export default NavbarRoot