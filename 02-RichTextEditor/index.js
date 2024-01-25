const textEditor = document.querySelector(".text-editor");
const btnBold = document.querySelector(".btn-bold");
const btnSup = document.querySelector(".btn-sup");
const btnSub = document.querySelector(".btn-sub");
const btnOl = document.querySelector(".btn-ordered-list");
const btnUl = document.querySelector(".btn-unordered-list");

function getSelectedText() {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  if (!selection.isCollapsed) {
    return [selection, range];
  }
}

btnBold.addEventListener("click", () => {
  const [selection, range] = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    div.classList.add("bold");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.classList.toggle("bold");
  }
});

btnSup.addEventListener("click", () => {
  const [selection, range] = getSelectedText();

  let sup = document.createElement("sup");
  range.surroundContents(sup);
});

btnSub.addEventListener("click", () => {
  const [selection, range] = getSelectedText();

  let sub = document.createElement("sub");
  range.surroundContents(sub);
});

btnOl.addEventListener("click", () => {
  const [selection, range] = getSelectedText();
  console.log(range);

  let li = document.createElement("li");
  range.surroundContents(li);
});

btnUl.addEventListener("click", () => {
  const [selection, range] = getSelectedText();

  let ul = document.createElement("ul");
  range.surroundContents(ul);
});
