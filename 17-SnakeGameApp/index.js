const [scoreTag, highScoreTag] = document.querySelectorAll(".top-bar p");
const tilesWrapper = document.querySelector(".tiles-wrapper");
const buttons = document.querySelectorAll(".bottom-bar button");

const gridSize = 21;
let snake = [{ x: 11, y: 11 }];
let food = createFoodCoords();
let direction = "up";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let highScore = 0;

function drawGame() {
  tilesWrapper.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
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
    case "ArrowUp":
      head.y--;
      break;

    case "ArrowDown":
      head.y++;
      break;

    case "ArrowLeft":
      head.x--;
      break;

    case "ArrowRight":
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

function handleKeyboardPress(event) {
  const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  if (!gameStarted && directions.includes(event.key)) {
    direction = event.key;
    startGame();
  } else {
    if (directions.includes(event.key)) {
      direction = event.key;
    }
  }
}

function handleButtonPress(btn) {
  return () => {
    const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (!gameStarted) {
      direction = btn.id;
      startGame();
    } else {
      direction = btn.id;
    }
  };
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
  updateHighScore();
  stopGame();
  snake = [{ x: 10, y: 10 }];
  food = createFoodCoords();
  direction = "up";
  gameSpeedDelay = 200;
  updateScore();
}

function updateScore() {
  const currentScore = (snake.length - 1) * 10;
  scoreTag.textContent = `Score: ${currentScore.toString()}`;
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
}

function updateHighScore() {
  const currentScore = (snake.length - 1) * 10;
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreTag.textContent = `High Score: ${highScore.toString()}`;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonPress(btn));
});

document.addEventListener("keydown", handleKeyboardPress);
