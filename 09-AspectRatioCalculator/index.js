const [ratio1, ratio2, width, widthLock, height, heightLock] =
  document.querySelectorAll("input");

ratio1.addEventListener("input", () => {
  const ratio = getRatio(ratio1.value);
  changeField(ratio, "ratio1");
});

ratio2.addEventListener("input", () => {
  const ratio = getRatio(ratio2.value);
  changeField(ratio, "ratio2");
});

function getRatio(baseRatio) {
  if (widthLock.checked) {
    return Number(width.value) / Number(baseRatio);
  } else {
    return Number(height.value) / Number(baseRatio);
  }
}
function changeField(value, elCaller) {
  const elValue =
    elCaller === "ratio1" ? Number(ratio2.value) : Number(ratio1.value);
  if (widthLock.checked) {
    height.value = Math.round(value * Number(elValue));
  } else {
    width.value = Math.round(value * Number(elValue));
  }
}
