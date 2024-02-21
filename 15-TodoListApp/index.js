const todoInput = document.querySelector(".todo-input");

const expandOptions = document.querySelector(".todo div > i");

expandOptions.addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle("expand");
});

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log("Pressed enter");
  }
});
