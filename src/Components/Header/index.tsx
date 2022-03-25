import { FC } from "react";
import { Logo } from "./Logo";
import "./Header.css"

export const Header: FC = ({ children }) => (
  <header className="header">
    <Logo>
      <p>
        ox
        <p>xo</p>
      </p>
    </Logo>
    {children}
    <Logo>
      <p>
        xo
        <p>ox</p>
      </p>
    </Logo>
  </header>
);