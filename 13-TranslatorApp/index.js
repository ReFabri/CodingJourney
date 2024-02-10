const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const translateBtn = document.getElementById("translateBtn");
const inputLanguageSelect = document.getElementById("inputLanguageSelect");
const outputLanguageSelect = document.getElementById("outputLanguageSelect");

Object.entries(countries).forEach((countryArr) => {
  if (countryArr[0] === "auto") {
    inputLanguageSelect.appendChild(createOption(countryArr, true));
  } else if (countryArr[0] === navigator.language) {
    inputLanguageSelect.appendChild(createOption(countryArr));
    outputLanguageSelect.appendChild(createOption(countryArr, true));
  } else {
    inputLanguageSelect.appendChild(createOption(countryArr));
    outputLanguageSelect.appendChild(createOption(countryArr));
  }
});

function createOption(countryArr, isSelected) {
  const option = document.createElement("option");
  option.value = countryArr[0];
  option.innerText = countryArr[1];
  if (isSelected) {
    option.selected = true;
  }
  return option;
}

async function translateText() {
  const inputLanguage =
    inputLanguageSelect.options[inputLanguageSelect.selectedIndex].value;
  const outputLanguage =
    outputLanguageSelect.options[outputLanguageSelect.selectedIndex].value;

  outputText.innerText = "";
  const inputPhrases = getPhrases();
  for (phrase of inputPhrases) {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
        phrase
      )}`
    );
    const data = await response.json();
    const translatedPhrase = data[0][0][0] + "\n";
    outputText.innerText += translatedPhrase;
  }
}

function getPhrases() {
  const phrases = inputText.value.split("\n").map((phrase) => phrase.trim());
  return phrases;
}

translateBtn.addEventListener("click", translateText);
