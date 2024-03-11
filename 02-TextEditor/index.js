const optionsButtons = document.querySelectorAll(".option-button");
const advOptionsButtons = document.querySelectorAll(".adv-option-button");
const linkButton = document.getElementById("createLink");

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
