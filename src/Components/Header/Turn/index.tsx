import { ItemValue } from "../../../Types";
import "./Turn.css";

export type TurnProps = {
  turn?: boolean;
  children: React.ReactNode;
};

export const Turn = ({ turn, children }: TurnProps) => {
  return (
    <p className={`${turn ? "playerActive" : "playerInactive"}`}>
      {children}
    </p>
  );
};
