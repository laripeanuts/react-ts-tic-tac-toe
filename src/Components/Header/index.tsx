import { FC } from "react";
import { Logo } from "./Logo";
import "./Header.css"

export const Header: FC = ({ children }) => (
  <header className="header">
    <Logo>
      <p>
        Player X
      </p>
    </Logo>
    {children}
    <Logo>
      <p>
        Player O
      </p>
    </Logo>
  </header>
);