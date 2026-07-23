import type { ReactElement } from "react";

import "../../index.css"
import { Link } from "react-router-dom";
interface NavbarTabProps{
  title: string,
  namePage: string,
}


export default function NavbarTab({title, namePage}: NavbarTabProps):ReactElement {
  return (
    <Link to={`/${namePage.toLowerCase()}`} className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2 text-center transition duration-200">
        <b>{title}</b>
    </Link>
  )
}
