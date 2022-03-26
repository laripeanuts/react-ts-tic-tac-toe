import { ItemValue } from "../../Types";
import "./Square.css";
import { useGameState } from '../../Utils/GameState';

export type SquareProps = {
  item: ItemValue;
  playerTurn?: boolean;
  playerX?: boolean;
  playerO?: boolean;
  onClick: () => void;
};

export const Square = ({ item, onClick }: SquareProps) => {
  const { gameState, now, playerTurn, playerX, playerO,winner, handleClick, resetGameState } =
    useGameState();
  
  const player = () => {
    if (playerX) {
      return "X";
    } else if (playerO) {
      return "O";
    } else {
      return null;
    }
  }
  
  return (
    <button className="square" onClick={onClick}>
      <div id={(player)} className="item">
        {item}
      </div>
    </button>
  );
};
