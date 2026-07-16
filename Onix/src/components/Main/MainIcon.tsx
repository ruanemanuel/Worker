import React, { ReactNode } from 'react'

interface MainIcon{
  icon: ReactNode,
  setter: (value: boolean) => void
}

const MainIcon = ({icon, setter}: MainIcon) => {
  return (
    <div>MainIcon</div>
  )
}

export default MainIcon