import { FC } from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode,
  image: string
}

export const ButtonPrimary:FC<ButtonProps> = ({ image, children }) => (
  <button className="btnPrimary">
    <img src={ image }alt="reload" width="30px"></img>
    {children}
  </button>
);

export const ButtonSecondary:FC = ({ children}) => (
  <button className="btnSecondary">
    {children}
  </button>
);