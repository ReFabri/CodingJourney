const todoInput = document.querySelector(".todo-input");
const todos = document.querySelector(".todos");
const expandOptions = document.querySelector(".todo div > i");

let idCounter = 0;

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && todoInput.value.trim()) {
    const newTodo = createTodo(idCounter, todoInput.value);
    todos.appendChild(newTodo);
    idCounter++;
  }
});

function createTodo(id, todoText) {
  const todoItem = document.createElement("li");
  todoItem.id = `todo_${id}`;
  todoItem.classList.add("todo");

  const label = document.createElement("label");
  label.setAttribute("for", `check_${id}`);

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = `check_${id}`;

  const p = document.createElement("p");
  p.textContent = todoText;

  label.appendChild(input);
  label.appendChild(p);

  todoItem.appendChild(label);

  const div = document.createElement("div");

  const ellipsisIcon = document.createElement("i");
  ellipsisIcon.classList.add("fa-solid", "fa-ellipsis");

  ellipsisIcon.addEventListener("click", (e) => {
    const menu = e.target.nextElementSibling;
    if (menu.classList.contains("expandOptions")) {
      menu.classList.remove("expandOptions");
    } else {
      document.querySelectorAll(".todo div ul").forEach((menu) => {
        menu.classList.remove("expandOptions");
      });
      e.target.nextElementSibling.classList.add("expandOptions");
    }
  });

  div.appendChild(ellipsisIcon);

  const ul = document.createElement("ul");

  const editLi = document.createElement("li");
  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pen-to-square");
  editLi.appendChild(editIcon);
  editLi.appendChild(document.createTextNode("Edit"));

  const deleteLi = document.createElement("li");
  deleteLi.addEventListener("click", function () {
    const idToRemove = this.closest(".todo").id;
    const todoToRemove = document.getElementById(idToRemove);
    todos.removeChild(todoToRemove);
  });
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteLi.appendChild(deleteIcon);
  deleteLi.appendChild(document.createTextNode("Delete"));

  ul.appendChild(editLi);
  ul.appendChild(deleteLi);

  div.appendChild(ul);

  todoItem.appendChild(div);

  return todoItem;
}
