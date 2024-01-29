const tiles = document.querySelectorAll(".tile");
const btnRestart = document.querySelector(".btnRestart");
const modal = document.querySelector(".modal");
const h2Winner = document.querySelector(".modal h2");
const btnCloseModal = document.querySelector(".modal button");

let flip = true;
const tilesArray = new Array(8);
tilesArray.fill(null);

tiles.forEach((tile, i) => {
  tile.addEventListener("click", () => {
    if (tile.innerText === "X" || tile.innerText === "O") {
      flip = !flip;
    } else {
      if (flip) {
        tile.innerText = "X";
        tilesArray[i] = "X";
      } else {
        tile.innerText = "O";
        tilesArray[i] = "O";
      }
    }
    flip = !flip;
    printWinner();
  });
});

btnRestart.addEventListener("click", startNewGame);

btnCloseModal.addEventListener("click", startNewGame);

function startNewGame() {
  modal.style.display = "none";
  tiles.forEach((tile) => {
    tile.innerText = "";
  });
  flip = true;
  tilesArray.fill(null);
}

function GameOver(winner) {
  h2Winner.innerText = `${winner} Wins !`;
  modal.style.display = "flex";
}

function checkForWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const xo = ["X", "O"];
  let winner = "";
  winConditions.forEach((c) => {
    let matches = [];
    c.forEach((i) => {
      matches.push(tilesArray[i]);
    });
    xo.forEach((i) => {
      if (matches.every((j) => j === i)) {
        winner = i;
      }
    });
    matches = [];
  });
  return winner;
}

function printWinner() {
  let winner = checkForWinner();
  if (winner) {
    GameOver(winner);
    return winner;
  }
}
