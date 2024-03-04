const [score, highScore] = document.querySelectorAll(".top-bar p");
const tilesWrapper = document.querySelector(".tiles-wrapper");
const [btnLeft, btnUp, btnRight, btnDown] =
  document.querySelectorAll(".bottom-bar button");

let snake = [{ x: 11, y: 11 }];

function drawGame() {
  tilesWrapper.innerHTML = "";
  drawSnake();
}

function createTile(className) {
  const newTile = document.createElement("div");
  newTile.classList.add(className);
  return newTile;
}

function setTileCoords(tile, coords) {
  tile.style.gridColumn = coords.x;
  tile.style.gridRow = coords.y;
}

function drawSnake() {
  snake.forEach((coord) => {
    const snakeTile = createTile("snake-tile");
    setTileCoords(snakeTile, coord);
    tilesWrapper.appendChild(snakeTile);
  });
}

function drawFood(coord) {
  const foodTile = createTile("food-tile");
  setTileCoords(foodTile, coord);
  tilesWrapper.appendChild(foodTile);
}
