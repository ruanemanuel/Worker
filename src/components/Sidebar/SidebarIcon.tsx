import { useNavigate } from "react-router-dom"
import "../../index.css"
import type { ReactNode, ReactElement } from 'react'

interface SidebarIconProps{
  icon: ReactNode,
  page: string
}





export default function SidebarIcon({icon, page}: SidebarIconProps): ReactElement {

  const navigator = useNavigate();
  const handleNavigation = async (path: string) => {

    

    if(document.startViewTransition()){
      await document.startViewTransition(() => {
        navigator(path);
      })
    }else{
      navigator(path);
    }

  }



  return (
    <button onClick={() => handleNavigation(`/${page}`)} className="pl-6 pr-5" >
      <div className="navbarTab"><b>{icon}</b></div>
    </button>
  )
}
