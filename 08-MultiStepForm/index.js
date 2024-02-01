const form = document.querySelector(".wrapper-form");
const btnsNext = document.querySelectorAll(".btn-next");
const btnsBack = document.querySelectorAll(".btn-back");
const btnSubmit = document.querySelector(".btn-submit");

// const formPos = window.getComputedStyle(form)
// console.log(formPos.getPropertyValue("transform"));

btnsNext.forEach((btnNext, i) => {
  const posX = (i + 1) * 300 * -1;
  btnNext.addEventListener("click", changePage(posX));
});

btnsBack.forEach((btnBack, i) => {
  const posX = i * 300 * -1;
  btnBack.addEventListener("click", changePage(posX));
});

function changePage(translateAmount) {
  return () => {
    form.style.transform = `translateX(${translateAmount}px)`;
  };
}
