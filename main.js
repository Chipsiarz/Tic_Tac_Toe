const xScore = document.getElementById("xScore");
const oScore = document.getElementById("oScore");
const gameResult = document.getElementById("gameResult");

let x = 0;
let o = 0;

let playerTurn = "X";
let gameEnded = false;

let winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    if (this.innerHTML === "" && !gameEnded) {
      this.innerHTML = playerTurn;
      this.classList.add(playerTurn.toLowerCase());

      checkWin();

      if (gameEnded) return;

      playerTurn === "X" ? (playerTurn = "O") : (playerTurn = "X");
    }
  });
}

function checkWin() {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      document.getElementById(winConditions[i][0]).innerHTML === playerTurn &&
      document.getElementById(winConditions[i][1]).innerHTML === playerTurn &&
      document.getElementById(winConditions[i][2]).innerHTML === playerTurn
    ) {
      document.getElementById(winConditions[i][0]).classList.add("win");
      document.getElementById(winConditions[i][1]).classList.add("win");
      document.getElementById(winConditions[i][2]).classList.add("win");
      gameEnded = true;

      if (playerTurn === "X") {
        gameResult.textContent = "Player X Win!";
        x++;
      } else {
        gameResult.textContent = "Player O Win!";
        o++;
      }

      xScore.textContent = x;
      oScore.textContent = o;
    }
  }
}

document.getElementById("resetBtn").addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerHTML = "";
    document.getElementById(i.toString()).classList.remove("x");
    document.getElementById(i.toString()).classList.remove("o");
    document.getElementById(i.toString()).classList.remove("win");
    playerTurn = "X";
    gameEnded = false;
    gameResult.textContent = "Tic Tac Toe Game";
  }
});
