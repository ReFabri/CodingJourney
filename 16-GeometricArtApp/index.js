const generateBtn = document.querySelector("button");
const tilesWrapper = document.querySelector(".tiles-wrapper");

document.addEventListener("DOMContentLoaded", appendTiles);

generateBtn.addEventListener("click", appendTiles);

function createNewTile() {
  const shapes = ["circle", "half-circle", "half-square"];
  const colors = ["#FFC700", "#FE9E13", "#01D2FD", "#07D0C8"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  const rotation = 90 * Math.floor(Math.random() * 4);

  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.transform = `rotate(${rotation}deg)`;

  const shapeDiv = document.createElement("div");
  shapeDiv.style.backgroundColor = color;
  shapeDiv.classList.add(shape);

  tile.appendChild(shapeDiv);
  return tile;
}

function appendTiles() {
  tilesWrapper.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    let newTile = createNewTile();
    tilesWrapper.appendChild(newTile);
  }
}
