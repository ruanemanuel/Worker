import type { ReactElement, ReactNode } from "react"


interface MainIconProps{
    icon: ReactNode;
}


export default function MainIcon({icon}: MainIconProps): ReactElement {
  return (
    <div>
        {icon}
    </div>
  )
}

