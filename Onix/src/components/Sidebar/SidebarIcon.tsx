
import { Link } from 'react-router-dom'
import React, { ReactNode, ReactElement } from 'react'

interface SidebarIcon{
  icon: ReactNode,
  page: string
}



const SidebarIcon = ({icon, page} : SidebarIcon): ReactElement => {
  return (
    <Link to={`/${page}`} >
      {icon}
    </Link>
  )
}

export default SidebarIcon