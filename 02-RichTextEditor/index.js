const textEditor = document.querySelector(".text-editor");
const btnBold = document.querySelector(".btn-bold");
const btnSup = document.querySelector(".btn-sup");
const btnSub = document.querySelector(".btn-sub");
const btnOl = document.querySelector(".btn-ordered-list");
const btnUl = document.querySelector(".btn-unordered-list");

function getSelectedText() {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  return [selection, range];
}

btnBold.addEventListener("click", () => {
  const [selection, range] = getSelectedText();
  if (!selection.isCollapsed) {
    let span = document.createElement("span");
    span.style.fontWeight = "bold";
    range.surroundContents(span);
  }
});

btnSup.addEventListener("click", () => {
  const [selection, range] = getSelectedText();
  if (!selection.isCollapsed) {
    let sup = document.createElement("sup");
    range.surroundContents(sup);
  }
});

btnSub.addEventListener("click", () => {
  const [selection, range] = getSelectedText();
  if (!selection.isCollapsed) {
    let sub = document.createElement("sub");
    range.surroundContents(sub);
  }
});

btnOl.addEventListener("click", () => {
  const [selection, range] = getSelectedText();
  console.log(range);
  if (!selection.isCollapsed) {
    let li = document.createElement("li");
    range.surroundContents(li);
  }
});

btnUl.addEventListener("click", () => {
  const [selection, range] = getSelectedText();
  if (!selection.isCollapsed) {
    let ul = document.createElement("ul");
    range.surroundContents(ul);
  }
});
