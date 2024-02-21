const todoInput = document.querySelector(".todo-input");
const todos = document.querySelector(".todos");
const expandOptions = document.querySelector(".todo div > i");

const idCounter = 0;

expandOptions.addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle("expand");
});

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && todoInput.value.trim()) {
    const newTodo = createTodo(idCounter, todoInput.value);
    todos.appendChild(newTodo);
  }
});

function createTodo(todoId, todoText) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo");

  const label = document.createElement("label");
  label.setAttribute("for", todoId);

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = todoId;

  const p = document.createElement("p");
  p.textContent = todoText;

  label.appendChild(input);
  label.appendChild(p);

  todoItem.appendChild(label);

  const div = document.createElement("div");

  const ellipsisIcon = document.createElement("i");
  ellipsisIcon.classList.add("fa-solid", "fa-ellipsis");

  div.appendChild(ellipsisIcon);

  const ul = document.createElement("ul");

  const editLi = document.createElement("li");
  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pen-to-square");
  editLi.appendChild(editIcon);
  editLi.appendChild(document.createTextNode("Edit"));

  const deleteLi = document.createElement("li");
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
