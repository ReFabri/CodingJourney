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

gridWidthInput.addEventListener("change", () => {
  gridWidthLabel.innerText = gridWidthInput.value;
});

gridHeightInput.addEventListener("change", () => {
  gridHeightLabel.innerText = gridHeightInput.value;
});

btnCreate.addEventListener("click", () => {
  const rows = gridHeightInput.value;
  const cols = gridWidthInput.value;

  gridCanvas.innerHTML = "";

  for (let row = 0; row < rows; row++) {
    const newRow = document.createElement("div");
    for (let col = 0; col < cols; col++) {
      const gridTile = document.createElement("div");
      gridTile.className = "grid-tile";
      newRow.appendChild(gridTile);
    }
    gridCanvas.appendChild(newRow);
  }
});
