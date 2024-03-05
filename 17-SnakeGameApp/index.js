const [score, highScore] = document.querySelectorAll(".top-bar p");
const tilesWrapper = document.querySelector(".tiles-wrapper");
const [btnLeft, btnUp, btnRight, btnDown] =
  document.querySelectorAll(".bottom-bar button");

const gridSize = 21;
let snake = [{ x: 11, y: 11 }];
let food = createFoodCoords();

function drawGame() {
  tilesWrapper.innerHTML = "";
  drawSnake();
  drawFood(food);
}

function createTile(className, coords) {
  const newTile = document.createElement("div");
  newTile.classList.add(className);
  newTile.style.gridColumn = coords.x;
  newTile.style.gridRow = coords.y;
  return newTile;
}

function drawSnake() {
  snake.forEach((coord) => {
    const snakeTile = createTile("snake-tile", coord);
    tilesWrapper.appendChild(snakeTile);
  });
}

function drawFood(coord) {
  const foodTile = createTile("food-tile", coord);
  tilesWrapper.appendChild(foodTile);
}

function createFoodCoords() {
  const x = Math.ceil(Math.random() * gridSize);
  const y = Math.ceil(Math.random() * gridSize);
  return { x, y };
}

drawGame();
