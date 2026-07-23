
import { Link } from 'react-router-dom'
import type { ReactNode, ReactElement } from 'react'

interface SidebarIconProps{
  icon: ReactNode,
  page: string
}





export default function SidebarIcon({icon, page}: SidebarIconProps): ReactElement {
  return (
    <Link to={`/${page}`} >
      {icon}
    </Link>
  )
}
