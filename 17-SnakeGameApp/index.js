const [score, highScore] = document.querySelectorAll(".top-bar p");
const tilesWrapper = document.querySelector(".tiles-wrapper");
const [btnLeft, btnUp, btnRight, btnDown] =
  document.querySelectorAll(".bottom-bar button");

const COLS = 30;
const ROWS = 35;

function generateGrid() {
  for (let i = 0; i < ROWS; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < COLS; j++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      row.appendChild(tile);
    }
    tilesWrapper.appendChild(row);
  }
}
generateGrid();
