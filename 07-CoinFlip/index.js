const [btnFlipCoin, btnReset] = document.querySelectorAll(
  ".container-bottom button"
);
const [headsScore, tailsScore] = document.querySelectorAll(".container-top h2");
const coin = document.querySelector(".coin");

btnReset.addEventListener("click", () => {
  headsScore.innerText = 0;
  tailsScore.innerText = 0;
});

btnFlipCoin.addEventListener("click", () => {
  coin.style.transform = `rotateX(0deg)`;
  coin.style.transition = "none";

  let rounds = Math.floor(3 + Math.random() * 6);
  if (rounds % 2 === 0) {
    changeScore(headsScore);
  } else {
    changeScore(tailsScore);
  }
  setTimeout(() => {
    coin.style.transition = "transform 1s ease-in-out";
    coin.style.transform = `rotateX(${rounds * 180}deg)`;
  }, 1);
});

function changeScore(el) {
  curVal = Number(el.innerText);
  el.innerText = curVal + 1;
}
