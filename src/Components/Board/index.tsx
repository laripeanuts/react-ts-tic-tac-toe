import { Square, SquareProps } from "../Square"
import { BoardState } from "../../Types";


import "./Board.css";

type BoardProps = {
  board: BoardState,
  playerTurn?: boolean
  onClick: (square: number) => void,
};

export const Board = ({ board, onClick, playerTurn }: BoardProps) => {
  const newProps = (square: number): SquareProps => {
    return {
      item: board[square],
      onClick: () => onClick(square),
      playerTurn: playerTurn,
    };
  };

  return (
    <div className="board">
      <div className="column">
        <Square {...newProps(0)} />
        <Square {...newProps(1)} />
        <Square {...newProps(2)} />
      </div>
      <div className="column">
        <Square {...newProps(3)} />
        <Square {...newProps(4)} />
        <Square {...newProps(5)} />
      </div>
      <div className="column">
        <Square {...newProps(6)} />
        <Square {...newProps(7)} />
        <Square {...newProps(8)} />
      </div>
    </div>
  );
};