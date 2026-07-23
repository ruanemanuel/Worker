
import type { ReactElement, ReactNode } from 'react';

interface FooterRootProps {
  children?: ReactNode;
}

function FooterRoot({children}: FooterRootProps): ReactElement {
  return (
    <footer>
        {children}
    </footer>
  )
}

export default FooterRoot