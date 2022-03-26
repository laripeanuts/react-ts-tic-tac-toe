// Definição das estrturas de dados do estado do jogo
type ItemValue = "X" | "O" | null;

type BoardState = ItemValue[];

type GameState = {
  history: BoardState[];
  play: number;
};

export type { ItemValue, BoardState, GameState };
