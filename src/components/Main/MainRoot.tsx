import type { ReactElement, ReactNode } from "react";

interface MainRootProps{
    children: ReactNode
}

export default function MainRoot({children}: MainRootProps) {
  return (
    <main className="flex">
      <div className="space-x flex mt-5">
        {children}
      </div>
    </main>
  )
}
