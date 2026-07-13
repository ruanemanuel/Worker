import {Link, NavLink} from "react-router-dom";
import React from 'react';

const NavbarTab = ({title, callback, href}) => {
  return (
    <a className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2 text-center"
            onClick={() => callback(true)}
            href={href}
    >
      {title}
    </a>
  )
}
<NavbarTab />
export default NavbarTab