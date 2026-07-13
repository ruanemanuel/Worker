
import React from 'react'

const NavbarTab = ({title, callback}) => {
  return (
    <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2"
            onClick={() => callback(true)}
    >
      {title}
    </button>
  )
}
<NavbarTab />
export default NavbarTab