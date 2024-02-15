const [btnAll, btnPending, btnCompleted, btnClear] =
  document.querySelectorAll("nav button");
const todoInput = document.querySelector(".main-container > input");

const todos = document.querySelector("#todos");

btnAll.addEventListener("click", () => {
  todos.style.justifyContent = "left";
});

btnPending.addEventListener("click", () => {
  todos.style.justifyContent = "center";
});

btnCompleted.addEventListener("click", () => {
  todos.style.justifyContent = "right";
});
