
import React, { ReactElement, ReactNode } from 'react'

interface SidebarRoot{
  children?: ReactNode,
  width: number,
  padding: number
}


const SidebarRoot = ({children, width, padding}: SidebarRoot): ReactElement => {
  const styles = `p-${padding} flex w-${width} min-h-screen bg-zinc-900 text-white`
  return (
    <aside className={styles}>
      {children}
    </aside>
  )
}

export default SidebarRoot