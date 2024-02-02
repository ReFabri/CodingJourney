const [ratio1, ratio2, width, widthLock, height, heightLock] =
  document.querySelectorAll("input");
const ratios = [ratio1, ratio2];

ratios.forEach((ratio) => {
  ratio.addEventListener("input", () => {
    changeField(widthLock.checked);
  });
});

function changeField(isWidth) {
  if (isWidth) {
    height.value = Math.round(
      (Number(width.value) / Number(ratio1.value)) * Number(ratio2.value)
    );
  } else {
    width.value = Math.round(
      (Number(height.value) / Number(ratio2.value)) * Number(ratio1.value)
    );
  }
}
