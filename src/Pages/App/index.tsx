import * as React from "react";
import './App.css';
import { Board } from '../../Components/Board';
import { Header } from '../../Components/Header/';
import { ButtonPrimary } from '../../Components/Button/';
import { useGameState } from '../../Utils/GameState';

function App() {
  const { gameState, now, playerTurn, playerX, playerO, winner, handleClick, resetGameState } = useGameState();

  return (
    <div className="App">
      <main className="main">
        <Header>
          <h1>Tic Tac Toe</h1>
        </Header>
        {winner
          ? `Vencedor ${winner}`
          : `Próximo jogador ${playerX ? "X" : "O"}`}
        ;
        <Board board={now} onClick={handleClick} />
        <div className="buttons">
          <ButtonPrimary
            image="../../Assets/refresh.svg"
            onClick={resetGameState}
          >
            Novo Jogo
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}

export default App;
