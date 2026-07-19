import React, { ReactElement, ReactNode } from 'react'

type MainRoot = {
  children: ReactNode
}

const MainRoot = ({children}: MainRoot): ReactElement => {
  return (
    <main className="flex">
      <div className="space-x flex mt-5">
        {children}
      </div>
    </main>
  )
}

export default MainRoot