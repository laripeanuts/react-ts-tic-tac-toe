import './App.css';

function Game() {
  
  class TicTacToe {
    board: string[][];
    player: string;

    constructor() {
      this.board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.player = "X";

      let squares = document.querySelectorAll(".square");

      squares.forEach((square) => {
        square.addEventListener("click", () => {
          let row = parseInt(square.getAttribute("data-row"));
          let col = parseInt(square.getAttribute("data-col"));

          if (square.textContent === "") {
            square.textContent = this.player;
            this.play(row, col);
          }
        });
      });
    }

    play =  (row: number, col: number) => {
      this.board[row][col] = this.player;
      if (this.checkWin()) {
        this.announceWinner();
        return;
      }
      this.player = this.player === "X" ? "O" : "X";
    };

    checkWin =  () => {
      for (let i = 0; i < this.board.length; i++) {
        if (
          this.board[i][0] === this.board[i][1] &&
          this.board[i][1] === this.board[i][2]
        ) {
          return this.board[i][0];
        }
      }
      for (let i = 0; i < this.board.length; i++) {
        if (
          this.board[0][i] === this.board[1][i] &&
          this.board[1][i] === this.board[2][i]
        ) {
          return this.board[0][i];
        }
      }
      if (
        this.board[0][0] === this.board[1][1] &&
        this.board[1][1] === this.board[2][2]
      ) {
        return this.board[0][0];
      }
      if (
        this.board[0][2] === this.board[1][1] &&
        this.board[1][1] === this.board[2][0]
      ) {
        return this.board[0][2];
      }
      return false;
    };

    announceWinner =  () => {
      console.log(`${this.player} wins!`);
    };
  }

  window.onload = function () {
    let game = new TicTacToe();
  };
  
  return (
    <main>
      <div className="ticTacToe">
          <div className="column">
              <span className="square" data-col="0" data-row="0"></span>
              <span className="square" data-col="0" data-row="1"></span>
              <span className="square" data-col="0" data-row="2"></span>
          </div>
          <div className="column">
              <span className="square" data-col="1" data-row="0"></span>
              <span className="square" data-col="1" data-row="1"></span>
              <span className="square" data-col="1" data-row="2"></span>
          </div>
          <div className="column">
              <span className="square" data-col="2" data-row="0"></span>
              <span className="square" data-col="2" data-row="1"></span>
              <span className="square" data-col="2" data-row="2"></span>
          </div>
      </div>
    </main>
  );
}

export default Game;
