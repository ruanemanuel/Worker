import { ReactElement, ReactNode } from "react"


interface MainIcon{
    icon: ReactNode;
}


const MainIcon = ({ icon }: MainIcon): ReactElement => {
  return (
    <div>
        { icon }
    </div>
  )
}

export default MainIcon