import './App.css';
import { Board } from '../../Components/Board';
import { Header } from '../../Components/Header/';
import { ButtonPrimary } from '../../Components/Button/';
import { useGameState } from '../../Components/GameState/';

function App() {
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

  const drawShow = () => (
    draw ? "Oops! It's a draw!" : null
  );

  const winnerShow = () => (
    winner ? `Player ${winner} wins!` : null
  );

  const thereIsWinner = () => (
    winner !== null ? true : false
  );
  
  const message = () => {
    if (thereIsWinner()) {
      return winnerShow();
    } else if (draw) {
      return drawShow();
    } else {
      return "Bom jogo!";
    }
  }

  return (
    <div className="App">
      <main className="main">
        <div className="alert">{message()}</div>
        <Header item={`${playerTurn ? "X" : "O"}`}>
          <h1>Tic Tac Toe</h1>
        </Header>
        <Board board={now} onClick={handleClick} />
        <div className="buttons">
          <ButtonPrimary
            image="../../Assets/refresh.svg"
            onClick={resetGameState}
            active={thereIsWinner() || draw}
          >
            Novo Jogo
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}

export default App;
