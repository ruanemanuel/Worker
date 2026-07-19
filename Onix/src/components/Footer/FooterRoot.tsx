

import { Home } from 'lucide-react'
import React, { ReactElement, ReactNode } from 'react'

interface FooterRoot {
  children?: ReactNode;
}

const FooterRoot = ({children}: FooterRoot): ReactElement => {
  return (
    <footer>
      {children}
    </footer>
  )
}

export default FooterRoot