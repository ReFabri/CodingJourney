const [score, highScore] = document.querySelectorAll(".top-bar p");
const tilesWrapper = document.querySelector(".tiles-wrapper");
const [btnLeft, btnUp, btnRight, btnDown] =
  document.querySelectorAll(".bottom-bar button");

const gridSize = 21;
let snake = [{ x: 11, y: 11 }];
let food = createFoodCoords();
let direction = "up";
let gameInterval;
let gameSpeedDelay = 200;
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
    increaseSpeed();
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      moveSnake();
      checkCollision();
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
    checkCollision();
    drawGame();
  }, gameSpeedDelay);
}

function handleKeyPress(event) {
  if (
    (!gameStarted && event.code === "Space") ||
    (!gameStarted && event.key === " ")
  ) {
    startGame();
  } else {
    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
    }
  }
}

function increaseSpeed() {
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 2;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay -= 1;
  }
}

function checkCollision() {
  const head = snake[0];
  if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
    resetGame();
  }
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  snake = [{ x: 10, y: 10 }];
  food = createFoodCoords();
  direction = "up";
  gameSpeedDelay = 200;
}

document.addEventListener("keydown", handleKeyPress);
