const textEditor = document.querySelector(".text-editor");
const btnBold = document.querySelector(".btn-bold");
const btnSup = document.querySelector(".btn-sup");
const btnSub = document.querySelector(".btn-sub");
const btnOl = document.querySelector(".btn-ordered-list");
const btnUl = document.querySelector(".btn-unordered-list");
const btnLink = document.querySelector(".btn-link");
const btnAlignLeft = document.querySelector(".btn-align-left");
const btnAlignCenter = document.querySelector(".btn-align-center");
const btnAlignRight = document.querySelector(".btn-align-right");
const btnAlignJustify = document.querySelector(".btn-align-justify");
const btnHeadings = document.getElementById("headings");
const btnFonts = document.getElementById("fonts");
const btnFontSize = document.getElementById("fontSize");

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

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  }

  let sup = document.createElement("sup");
  range.surroundContents(sup);
});

btnSub.addEventListener("click", () => {
  const [selection, range] = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  }

  let sub = document.createElement("sub");
  range.surroundContents(sub);
});

btnLink.addEventListener("click", () => {
  const [selection, range] = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  }

  let link = document.createElement("a");
  const url = window.prompt("Enter a Url:").toLowerCase();
  link.setAttribute("href", url);
  range.surroundContents(link);
});
