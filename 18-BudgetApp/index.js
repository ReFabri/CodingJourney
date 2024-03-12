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
  pAmount.innerText = inputExpenseAmount.value;
  const iEdit = document.createElement("i");
  iEdit.className = "fa-solid fa-pen-to-square";
  const iDelete = document.createElement("i");
  iDelete.addEventListener("click", deleteExpense);
  iDelete.className = "fa-solid fa-trash";
  li.appendChild(pName);
  li.appendChild(pAmount);
  li.appendChild(iEdit);
  li.appendChild(iDelete);
  expenses.appendChild(li);
}

btnAddExpense.addEventListener("click", createExpense);
