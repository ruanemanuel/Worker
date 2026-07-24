import type { ReactNode } from "react";

interface NavbarRootProps {
  children?: ReactNode;
}

export default function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "60px",
        color: "white",
        padding: "2px 2px",
      }}
    >
      {children}
    </nav>
  );
}
