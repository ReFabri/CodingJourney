const todoInput = document.querySelector(".todo-input");
const todos = document.querySelector(".todos");
const expandOptions = document.querySelector(".todo div > i");
const clearBtn = document.querySelector("nav > button");

let editId = "";

document.addEventListener("DOMContentLoaded", addTodosToDOM);

todoInput.addEventListener("keyup", (e) => {
  const prevTodos = getTodosFromStorage();
  let idCounter = prevTodos[prevTodos.length - 1]?.id + 1 || 0;
  if (e.key === "Enter" && todoInput.value.trim()) {
    if (!editId) {
      addTodoToStorage(idCounter, todoInput.value);
      addTodosToDOM();
    } else {
      const todoIndex = prevTodos.findIndex(
        (todo) => `todo_${todo.id}` === editId
      );
      if (todoIndex !== -1) {
        prevTodos[todoIndex].text = todoInput.value;
        localStorage.setItem("todos", JSON.stringify(prevTodos));
      }
      addTodosToDOM();
      editId = "";
    }
    todoInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.setItem("todos", JSON.stringify([]));
  todos.innerHTML = "";
});

function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function addTodosToDOM() {
  todos.innerHTML = "";
  const prevTodos = getTodosFromStorage();
  prevTodos.forEach((prevTodo) => {
    const newTodo = createTodoElement(prevTodo.id, prevTodo.text);
    todos.appendChild(newTodo);
  });
}

function addTodoToStorage(id, text) {
  const prevTodos = getTodosFromStorage();
  prevTodos.push({ id, text, completed: false });
  localStorage.setItem("todos", JSON.stringify(prevTodos));
}

function createTodoElement(id, todoText) {
  const todoItem = document.createElement("li");
  todoItem.id = `todo_${id}`;
  todoItem.classList.add("todo");

  const label = document.createElement("label");
  label.setAttribute("for", `check_${id}`);

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = `check_${id}`;
  checkCompletedTodo(input);

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
    let prevTodos = getTodosFromStorage();
    prevTodos = prevTodos.filter((todo) => `todo_${todo.id}` !== idToRemove);
    localStorage.setItem("todos", JSON.stringify(prevTodos));
    addTodosToDOM();
  });
}

function editCurrentTodo(el) {
  el.addEventListener("click", function () {
    editId = this.closest(".todo").id;
    todoInput.focus();
    el.parentElement.classList.remove("expandOptions");
  });
}

function checkCompletedTodo(el) {
  el.addEventListener("change", function () {
    const prevTodos = getTodosFromStorage();
    const todoIndex = prevTodos.findIndex(
      (todo) => `todo_${todo.id}` === this.closest(".todo").id
    );
    if (todoIndex === -1) return;
    if (el.checked) {
      prevTodos[todoIndex].completed = true;
    } else {
      prevTodos[todoIndex].completed = false;
    }
    localStorage.setItem("todos", JSON.stringify(prevTodos));
  });
}

/*
When the page loads:
  addTodosToDOM gets todos from localStorage, creates the li's and append to page.

When user enter a new todo:
  addTodoToStorage  get the previous todos array,
    create a new todo with a new ID and the input text and
    append the new Todo to the array in localStorage.

When user edit a todo:
  Get previous todos from localStorage, find it's ID and edit the text.
    store the edited todo to localStorage.
    addTodosToDOM gets todos from localStorage, creates the li's and append to page.

*/
