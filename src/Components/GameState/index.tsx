import { useState } from "react";
import { ItemValue, BoardState, GameState, Player } from "../../Types";

const newGameState = () => Array<ItemValue>(9).fill(null);

// Lógica da documentação do React
const validateWinner = (boardState: BoardState) => {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }

  return null;
};

//Lógica do professor Rodrigo Sol
const checkWin = function (board: BoardState[]) {
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      return board[i][0];
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }
  return false;
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    history: [newGameState()],
    play: 0,
  });

  function resetGameState() {
    setGameState({
      history: [newGameState()],
      play: 0,
    });
  }

  const handleClick = (square: number) => {
    const history = gameState.history.slice(0, gameState.play + 1);
    const boardState = history[history.length - 1];
    if (validateWinner(boardState) || boardState[square]) {
      return;
    }
    const newBoardState = boardState.slice();
    newBoardState[square] = gameState.play % 2 === 0 ? "X" : "O";
    history.push(newBoardState);
    setGameState({
      history: history,
      play: history.length - 1,
    });
  };

  const now = gameState.history[gameState.play];
  const playerTurn = gameState.play % 2 === 0;
  const winner = validateWinner(now);
  const draw = !winner && gameState.play >= 9;

  const playerX: Player = {
    score: 0,
    player: "X",
    turn: playerTurn,
  };

  const playerO: Player = {
    score: 0,
    player: "O",
    turn: !playerTurn,
  };


  return {
    gameState,
    now,
    playerTurn,
    playerX,
    playerO,
    winner,
    draw,
    handleClick,
    resetGameState,
  };
};
