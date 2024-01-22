const gridWidthInput = document.getElementById("gridWidth");
const gridHeightInput = document.getElementById("gridHeight");
const gridWidthLabel = document.getElementById("gridWidth-label");
const gridHeightLabel = document.getElementById("gridHeight-label");
const btnCreate = document.getElementById("btn-create");
const btnClear = document.getElementById("btn-clear");
const btnErase = document.getElementById("btn-erase");
const btnPaint = document.getElementById("btn-paint");
const colorPicker = document.getElementById("picker");
const gridCanvas = document.querySelector(".gridCanvas");
let gridTiles;

//Update width Label
gridWidthInput.addEventListener("change", () => {
  gridWidthLabel.innerText = gridWidthInput.value;
});

//Update height Label
gridHeightInput.addEventListener("change", () => {
  gridHeightLabel.innerText = gridHeightInput.value;
});

//Create grid
btnCreate.addEventListener("click", () => {
  const rows = gridHeightInput.value;
  const cols = gridWidthInput.value;

  gridCanvas.innerHTML = "";

  for (let row = 0; row < rows; row++) {
    const newRow = document.createElement("div");
    for (let col = 0; col < cols; col++) {
      const gridTile = document.createElement("div");
      gridTile.className = "grid-tile";
      gridTile.style.backgroundColor = "none";
      newRow.appendChild(gridTile);
    }
    gridCanvas.appendChild(newRow);
  }
  gridTiles = document.querySelectorAll(".grid-tile");
});

//==============================================================

// mousedown mousemove mouseup
// touchstart touchmove touchend

let isDrawing = false;
let isErasing = false;

gridCanvas.addEventListener("mouseover", () => {
  gridTiles.forEach((tile) => {
    tile.addEventListener("mousedown", () => {
      isDrawing = true;
      tile.style.backgroundColor = colorPicker.value;
    });
    tile.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    tile.addEventListener("mousemove", () => {
      if (isDrawing) tile.style.backgroundColor = colorPicker.value;
    });
  });
});
