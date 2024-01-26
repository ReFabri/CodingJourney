const checkboxes = document.querySelectorAll(".password-options input");
const showPassword = document.querySelector(".generated-password input");
const btnGeneratePass = document.querySelector(".generate-password-btn");
const inputPassLength = document.querySelector(".password-length input");
const inputPassLabel = document.querySelector(".password-length label");

const options = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%¨&*()|<,>.:;?/^~{[}]-_=+",
};

btnGeneratePass.addEventListener("click", () => {
  showPassword.value = "";
  const passLength = inputPassLength.value;
  let selectedValues = "";
  let pass = "";
  for (let i = 0; i < 4; i++) {
    if (checkboxes[i].checked) {
      selectedValues += options[checkboxes[i].id];
    }
  }
  if (!selectedValues) return;
  for (let i = 0; i < passLength; i++) {
    const position = Math.floor(Math.random() * selectedValues.length);
    pass += selectedValues[position];
  }
  showPassword.value = pass;
});

inputPassLength.addEventListener("input", () => {
  inputPassLabel.innerText = inputPassLength.value;
});
