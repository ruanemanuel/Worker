
import React from 'react'

const SidebarRoot = ({children, width, padding}) => {
  const styles = `p-${padding} flex w-${width} h-screen bg-zinc-900 justify-center text-white`
  return (
    <aside className={styles}>
      {children}
    </aside>
  )
}

export default SidebarRoot