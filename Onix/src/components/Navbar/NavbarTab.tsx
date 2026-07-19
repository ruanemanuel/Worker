import { Link } from "react-router-dom";
import React from 'react';

interface NavbarTab{
  title: string,
  namePage: string,
}


const NavbarTab = ({ title, namePage }: NavbarTab) => {
  return (
    <Link to={`/${namePage.toLowerCase()}`} className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2 text-center transition duration-200">
        <b>{title}</b>
    </Link>
  )
}

export default NavbarTab