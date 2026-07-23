
import type { ReactElement, ReactNode } from 'react'

interface SidebarRootProps{
  children?: ReactNode,
  width: number,
  padding: number
}


export default function SidebarRoot({children, width, padding}: SidebarRootProps): ReactElement {
  return (
    <aside className={`p-${padding} flex w-${width} min-h-screen bg-zinc-900 text-white`}>
      {children}
    </aside>
  )
}
