const form = document.querySelector(".wrapper-form");
const buttonsNext = document.querySelectorAll(".btn-next");
const buttonsBack = document.querySelectorAll(".btn-back");
const btnSubmit = document.querySelector(".btn-submit");
const steps = document.querySelectorAll(".step");

const positions = {
  screen: [0, -300, -600],
  bar2: [20, 100, 100],
  bar3: [40, 120, 200],
};

let currPage = 0;

buttonsNext.forEach((btnNext, i) => {
  btnNext.addEventListener("click", () => {
    changePage(i + 1);
  });
});

buttonsBack.forEach((btnNext, i) => {
  btnNext.addEventListener("click", () => {
    changePage(i);
  });
});

function changePage(page) {
  form.style.transform = `translateX(${positions.screen[page]}px)`;
  steps[1].style.left = `${positions.bar2[page]}px`;
  steps[2].style.left = `${positions.bar3[page]}px`;
}
