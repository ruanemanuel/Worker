
import React, { ReactNode, ReactElement } from 'react'

interface SidebarIcon{
  icon: ReactNode
}



const SidebarIcon = ({icon} : SidebarIcon): ReactElement => {
  return (
    <div>
      {icon}
    </div>
  )
}

export default SidebarIcon