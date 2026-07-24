import type { ReactElement } from "react";

import "../../index.css"
import {useNavigate} from "react-router-dom";
interface NavbarTabProps{
  title: string,
  namePage: string,
}


export default function NavbarTab({title, namePage}: NavbarTabProps):ReactElement {
  const navigator = useNavigate();
  const handleNavigation = async (path: string) => {

    

    if(document.startViewTransition()){
      try{
         document.startViewTransition(() => {
        navigator(path);
      })}catch(err){
        console.error("No problem");
      }
    }else{
      navigator(path);
    }

  }

  return (
    
      <button onClick={() => handleNavigation(`/${namePage}`)} className="hover:bg-white/20 rounded-md p-3 pointer border-[#68696d] border-2 text-center transition duration-200 pl-5 pr-5">
          <div className="navbarTab"><b>{title}</b></div>
      </button>
    
  )
}
