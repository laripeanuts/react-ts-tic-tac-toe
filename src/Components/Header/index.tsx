import { FC } from "react";
import { Logo } from "./Logo";
import "./Header.css"

export const Header:FC = ({children}) => (
  <header className="header">
    <Logo>xo</Logo>
    {children}
    <Logo>ox</Logo>
  </header>
);