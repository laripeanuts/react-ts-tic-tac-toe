import "./App.css";
import "../../Utils/animate.css";
import { Alert } from "../../Components/Alert";
import { Board } from "../../Components/Board";
import { ButtonPrimary } from "../../Components/Button/";
import { Header } from "../../Components/Header/";
import { useGameState } from "../../Components/GameState/";

const App = () => {
  const {
    gameState,
    now,
    playerTurn,
    playerX,
    playerO,
    winner,
    draw,
    handleClick,
    resetGameState,
  } = useGameState();

  const drawShow = () => (draw ? "Oops... Empatou!" : null);

  const winnerShow = () => (winner ? `Player ${winner} ganhou!` : null);
  
  const win = () => (winner !== null ? true : false);

  return (
    <div className="App">
      <main className="main">
        <Alert win={win} draw={draw} player={winner}></Alert>
        <Header item={`${playerTurn ? "X" : "O"}`}>
          <h1>TicTacToe</h1>
        </Header>
        <Board board={now} onClick={handleClick} />
        <div className="buttons">
          <ButtonPrimary
            image="../../Assets/refresh.svg"
            onClick={resetGameState}
            active={win() || draw}
          >
            Novo Jogo
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}

export default App;
