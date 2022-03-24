import { FC } from "react";
import "./Logo.css";

export const Logo: FC = ({ children }) => (
  <div className="logo">
    <h2 className="logoText">{children}</h2>
  </div>
);