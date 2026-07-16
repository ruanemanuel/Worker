

import React, { ReactNode } from 'react'

interface NavbarIcon{
  icon: ReactNode,
  callback: (value: boolean) => void
}

const NavbarIcon = ({icon, callback}: NavbarIcon) => {
  return (
    <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2"
            onClick={() => {callback(true)}}
    >
        {icon}
    </button>
  )
}

export default NavbarIcon