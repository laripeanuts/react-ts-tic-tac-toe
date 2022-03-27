import { ItemValue } from "../../Types";
import "./Square.css";

export type SquareProps = {
  item: ItemValue;
  onClick: () => void;
};

export const Square = ({ item, onClick }: SquareProps) => {
  return (
    <button className="square" onClick={onClick}>
      <div className={`item ${item}`}>{item}</div>
    </button>
  );
};
