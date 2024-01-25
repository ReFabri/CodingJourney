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
const btnFontColor = document.getElementById("fontColor");
const btnFontHighlight = document.getElementById("highlightColor");

function getSelectedText() {
  let selection = window.getSelection();
  let range = selection.getRangeAt(0);
  if (!selection.isCollapsed) {
    return range;
  }
}

btnBold.addEventListener("click", () => {
  const range = getSelectedText();

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
  const range = getSelectedText();

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
  const range = getSelectedText();

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
  const range = getSelectedText();

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

btnAlignLeft.addEventListener("click", () => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.textAlign = "left";
  }
});

btnAlignCenter.addEventListener("click", () => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.textAlign = "center";
  }
});

btnAlignRight.addEventListener("click", () => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.textAlign = "right";
  }
});

btnAlignJustify.addEventListener("click", () => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.textAlign = "justify";
  }
});

btnHeadings.addEventListener("change", (e) => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  }
  let heading = document.createElement(e.target.value);
  range.surroundContents(heading);
});

btnFonts.addEventListener("change", (e) => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.fontFamily = e.target.value;
  }
});

btnFontSize.addEventListener("change", (e) => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.fontSize = e.target.value;
  }
});

btnFontColor.addEventListener("change", (e) => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.color = e.target.value;
  }
});

btnFontColor.addEventListener("change", (e) => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.color = e.target.value;
  }
});

btnFontHighlight.addEventListener("change", (e) => {
  const range = getSelectedText();

  if (
    range.commonAncestorContainer.parentNode.classList.contains("text-editor")
  ) {
    let div = document.createElement("div");
    range.surroundContents(div);
  } else {
    range.commonAncestorContainer.parentNode.style.display = "inline-block";
    range.commonAncestorContainer.parentNode.style.backgroundColor =
      e.target.value;
  }
});
