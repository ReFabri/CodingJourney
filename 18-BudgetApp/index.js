const [inputBudget, inputExpenseName, inputExpenseAmount] =
  document.querySelectorAll(".top-box input");
const [btnSetBudget, btnAddExpense] =
  document.querySelectorAll(".top-box button");
const [labelBudget, labelExpenses, labelBalance] = document.querySelectorAll(
  ".mid-box > div > h3:last-child"
);
const expenses = document.querySelector(".expenses");

function createExpense() {
  const li = document.createElement("li");
  const pName = document.createElement("p");
  pName.innerText = inputExpenseName.value;
  const pAmount = document.createElement("p");
  pAmount.className = "expense-amount";
  pAmount.innerText = inputExpenseAmount.value;
  const iEdit = document.createElement("i");
  iEdit.addEventListener("click", editExpense);
  iEdit.className = "fa-solid fa-pen-to-square";
  const iDelete = document.createElement("i");
  iDelete.addEventListener("click", deleteExpense);
  iDelete.className = "fa-solid fa-trash";
  const editDiv = document.createElement("div");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  const numInput = document.createElement("input");
  numInput.type = "number";
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", closeEdit);
  editDiv.appendChild(titleInput);
  editDiv.appendChild(numInput);
  editDiv.appendChild(editBtn);
  li.appendChild(pName);
  li.appendChild(pAmount);
  li.appendChild(iEdit);
  li.appendChild(iDelete);
  li.appendChild(editDiv);
  expenses.appendChild(li);
}

function deleteExpense() {
  expenses.removeChild(this.parentElement);
}

function editExpense() {
  const expense = this.parentElement;
  const [title, amount] = expense.querySelectorAll("p");
  const editDiv = expense.querySelector("div");
  const [newTitle, newAmount] = editDiv.querySelectorAll("input");
  newTitle.value = title.innerText;
  newAmount.value = amount.innerText;
  editDiv.style.padding = "0.5rem";
  editDiv.style.height = "2.4rem";
}

function closeEdit() {
  const expense = this.closest("li");
  const editDiv = this.parentElement;
  const [newTitle, newAmount] = editDiv.querySelectorAll("input");
  if (!newTitle.value.trim() || !newAmount.value) return;
  const [title, amount] = expense.querySelectorAll("p");
  title.innerText = newTitle.value;
  amount.innerText = newAmount.value;
  editDiv.style.padding = "0";
  editDiv.style.height = "0";
}

function setBudget() {
  setExpenses();
  if (!inputBudget.value || Number(inputBudget.value) <= 0) return;
  labelBudget.innerText = inputBudget.value;
}

function setExpenses() {
  const amounts = expenses.querySelectorAll(".expense-amount");
  if (!amounts.length) {
    labelExpenses.innerText = "0";
    return;
  }
  let allAmounts = 0;
  amounts.forEach((expense) => {
    allAmounts += Number(expense.innerText);
  });
  labelExpenses.innerText = allAmounts;
}

btnSetBudget.addEventListener("click", setBudget);
btnAddExpense.addEventListener("click", createExpense);
