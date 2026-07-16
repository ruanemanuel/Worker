import {Link, NavLink} from "react-router-dom";
import React from 'react';

interface NavbarTab extends React.HTMLAttributes<HTMLAnchorElement>{
  title: string,
}


const NavbarTab = ({ title}: NavbarTab) => {
  return (
    <a className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2 text-center"
    >
      {title}
    </a>
  )
}

export default NavbarTab