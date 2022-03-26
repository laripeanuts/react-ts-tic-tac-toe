// Definição das estrturas de dados do estado do jogo
type ItemValue = "X" | "O" | null;

type BoardState = ItemValue[];

type GameState = {
  history: BoardState[];
  play: number;
};

type Player = {
  score?: number;
  player: string;
  turn: boolean;
};

export type { ItemValue, BoardState, GameState, Player };
