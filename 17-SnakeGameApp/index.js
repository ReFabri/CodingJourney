const [score, highScore] = document.querySelectorAll(".top-bar p");
const tilesWrapper = document.querySelector(".tiles-wrapper");
const [btnLeft, btnUp, btnRight, btnDown] =
  document.querySelectorAll(".bottom-bar button");

const gridSize = 21;
let snake = [{ x: 11, y: 11 }];
let food = createFoodCoords();
let direction = "up";
let gameInterval;
let gameSpeedDelay = 500;
let gameStarted = false;

function drawGame() {
  tilesWrapper.innerHTML = "";
  drawSnake();
  drawFood();
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

function drawFood() {
  const foodTile = createTile("food-tile", food);
  tilesWrapper.appendChild(foodTile);
}

function createFoodCoords() {
  const x = Math.ceil(Math.random() * gridSize);
  const y = Math.ceil(Math.random() * gridSize);
  return { x, y };
}

function moveSnake() {
  const head = { ...snake[0] };
  switch (direction) {
    case "up":
      head.y--;
      break;

    case "down":
      head.y++;
      break;

    case "left":
      head.x--;
      break;

    case "right":
      head.x++;
      break;

    default:
      break;
  }
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = createFoodCoords();
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      moveSnake();
      drawGame();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
}

function startGame() {
  gameStarted = true;
  gameInterval = setInterval(() => {
    moveSnake();
    drawGame();
  }, gameSpeedDelay);
}

drawGame();
