const todoInput = document.querySelector(".todo-input");
const todos = document.querySelector(".todos");
const expandOptions = document.querySelector(".todo div > i");

let idCounter = 0;
let editId = "";

document.addEventListener("DOMContentLoaded", loadTodos);

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && todoInput.value.trim()) {
    if (!editId) {
      const newTodo = createTodo(idCounter, todoInput.value);
      todos.appendChild(newTodo);
      idCounter++;
    } else {
      todos.querySelector(`#${editId} p`).textContent = todoInput.value;
      editId = "";
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

  let prevTodos = JSON.parse(localStorage.getItem("todos")) || [];
  prevTodos.push({ id, text: todoText });
  localStorage.setItem("todos", JSON.stringify(prevTodos));

  return todoItem;
}

function loadTodos() {
  const prevTodos = JSON.parse(localStorage.getItem("todos")) || [];
  localStorage.setItem("todos", JSON.stringify([]));
  todos.innerHTML = "";
  prevTodos.forEach((prevTodo) => {
    const newTodo = createTodo(prevTodo.id, prevTodo.text);
    todos.appendChild(newTodo);
  });
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

    let prevTodos = JSON.parse(localStorage.getItem("todos")) || [];
    prevTodos = prevTodos.filter((todo) => todo.id !== idToRemove);
    localStorage.setItem("todos", JSON.stringify(prevTodos));
  });
}

function editCurrentTodo(el) {
  el.addEventListener("click", function () {
    const idToEdit = this.closest(".todo").id;
    todoInput.focus();
    editId = idToEdit;
    el.parentElement.classList.remove("expandOptions");

    let prevTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoIndex = prevTodos.findIndex((todo) => todo.id === idToEdit);
    if (todoIndex !== -1) {
      prevTodos[todoIndex].text = todoInput.value;
      localStorage.setItem("todos", JSON.stringify(prevTodos));
    }
  });
}
