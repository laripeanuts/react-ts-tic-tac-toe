import { FC } from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode,
  image: string
  onClick: () => void
}

export const ButtonPrimary = ({ image, children, onClick }: ButtonProps) => (
  <button className="button" id="btnPrimary" onClick={onClick}>
    <img src={image} alt="reload" width="30px"></img>
    {children}
  </button>
);

export const ButtonSecondary: FC = ({ children }) => (
  <button className="button" id="btnSecondary">
    {children}
  </button>
);