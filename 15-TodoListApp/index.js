const todoInput = document.querySelector(".todo-input");
const todos = document.querySelector(".todos");
const expandOptions = document.querySelector(".todo div > i");

let idCounter = 0;
let editMode = false;
let editId = "";

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && todoInput.value.trim()) {
    if (!editMode) {
      const newTodo = createTodo(idCounter, todoInput.value);
      todos.appendChild(newTodo);
      idCounter++;
    } else {
      todos.querySelector(`#${editId} p`).textContent = todoInput.value;
      editMode = false;
    }
    todoInput.value = "";
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
  todoShowHideMenu(ellipsisIcon);
  div.appendChild(ellipsisIcon);

  const ul = document.createElement("ul");

  const editLi = document.createElement("li");
  editCurrentTodo(editLi);
  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pen-to-square");
  editLi.appendChild(editIcon);
  editLi.appendChild(document.createTextNode("Edit"));

  const deleteLi = document.createElement("li");
  deleteCurrentTodo(deleteLi);
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

function todoShowHideMenu(el) {
  el.addEventListener("click", (e) => {
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
}

function deleteCurrentTodo(el) {
  el.addEventListener("click", function () {
    const idToRemove = this.closest(".todo").id;
    const todoToRemove = document.getElementById(idToRemove);
    todos.removeChild(todoToRemove);
  });
}

function editCurrentTodo(el) {
  el.addEventListener("click", function () {
    const idToEdit = this.closest(".todo").id;
    todoInput.focus();
    editMode = true;
    editId = idToEdit;
    el.parentElement.classList.remove("expandOptions");
  });
}
