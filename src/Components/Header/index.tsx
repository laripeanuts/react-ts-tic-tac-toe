import { useEffect, useState } from "react";
import { Turn } from "./Turn";
import { ItemValue } from "../../Types";
import App from "../../Pages/App";
import "./Header.css";

type HeaderProps = {
  children: React.ReactNode;
  item?: ItemValue;
  active?: boolean;
};

export const Header = ({ children, item, active }: HeaderProps) => {
  active = item === "X" ? true : false;

  return (
    <header className="header">
      <Turn turn={active}>Player X</Turn>
        {children}
      <Turn turn={!active}>Player O</Turn>
    </header>
  );
};