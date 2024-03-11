const optionsButtons = document.querySelectorAll(".option-button");
const advOptionsButtons = document.querySelectorAll(".adv-option-button");
const fontSizeSelect = document.getElementById("fontSize");
const fontFamilySelect = document.getElementById("fontName");
const linkButton = document.getElementById("createLink");

const alignButtons = document.querySelectorAll(".align");
const spacingButtons = document.querySelectorAll(".spacing");
const formatButtons = document.querySelectorAll(".format");
const scriptButtons = document.querySelectorAll(".script");
const writingArea = document.getElementById("text-input");

console.log(advOptionsButtons);

function initializer() {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);
  fontSizeSelect.value = "12px";
}

function highlighter(className, needsRemoval) {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        className.forEach((button) => {
          button.classList.remove("active");
        });
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
}

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

advOptionsButtons.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL?");
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = `http://${userLink}`;
    modifyText(linkButton.id, false, userLink);
  }
});

window.onload = initializer();
