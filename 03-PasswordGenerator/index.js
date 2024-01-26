const checkboxes = document.querySelectorAll(".password-options input");
const showPassword = document.querySelector(".generated-password input");
const btnGeneratePass = document.querySelector(".generate-password-btn");
const inputPassLength = document.querySelector(".password-length input");
const inputPassLabel = document.querySelector(".password-length label");
const strengthBar = document.querySelector(".strength-bar");
const copyBtn = document.querySelector(".copy-password");

const options = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%¨&*()|<,>.:;?/^~{[}]-_=+",
  whiteSpaces: " ",
};

let removeDuplicates = checkboxes[5].checked;
let selectedOptions = "";

window.addEventListener("change", () => {
  selectedOptions = "";
  for (let i = 0; i < 5; i++) {
    if (checkboxes[i].checked) {
      selectedOptions += options[checkboxes[i].id];
    }
  }
  let currentStrength =
    selectedOptions.length + Number(inputPassLength.value * 3);

  if (currentStrength > 120) {
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "#5fda66";
  } else if (currentStrength > 60) {
    strengthBar.style.width = "66%";
    strengthBar.style.backgroundColor = "#eeee55";
  } else {
    strengthBar.style.width = "33%";
    strengthBar.style.backgroundColor = "#ff6666";
  }
});

btnGeneratePass.addEventListener("click", () => {
  let passLength = inputPassLength.value;
  showPassword.value = "";
  let safetyBreak = 0;
  let pass = "";

  if (!selectedOptions) return;

  while (pass.length < passLength && safetyBreak < 200) {
    safetyBreak++;
    const position = Math.floor(Math.random() * selectedOptions.length);
    if (removeDuplicates) {
      if (!pass.includes(selectedOptions[position])) {
        pass += selectedOptions[position];
      }
    } else {
      pass += selectedOptions[position];
    }
  }

  showPassword.value = pass;
});

copyBtn.addEventListener("click", () => {
  if (showPassword.value) {
    navigator.clipboard.writeText(showPassword.value);
  }
});

inputPassLength.addEventListener("input", () => {
  inputPassLabel.innerText = inputPassLength.value;
});
