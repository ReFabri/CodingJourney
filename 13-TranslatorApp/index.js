const toast = document.querySelector(".toast");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const translateBtn = document.getElementById("translateBtn");
const inputLanguageSelect = document.getElementById("inputLanguageSelect");
const outputLanguageSelect = document.getElementById("outputLanguageSelect");
const invertLanguage = document.querySelector(".invert-language");
const [copyInput, copyOutput] = document.querySelectorAll(".fa-copy");
const [voiceInput, voiceOutput] = document.querySelectorAll(".fa-play");
const synth = window.speechSynthesis;
let voices = synth.getVoices();

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
  try {
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
  } catch (error) {
    console.log(error);
  }
}

function getPhrases() {
  const phrases = inputText.value.split("\n").map((phrase) => phrase.trim());
  return phrases;
}

function invertLanguages() {
  const inputLanguage =
    inputLanguageSelect.options[inputLanguageSelect.selectedIndex].value;
  const outputLanguage =
    outputLanguageSelect.options[outputLanguageSelect.selectedIndex].value;

  if (inputLanguage !== "auto") {
    const langSwitch = outputLanguage;
    outputLanguageSelect.value = inputLanguage;
    inputLanguageSelect.value = langSwitch;
  }
}

function textToSpeech(isInput) {
  return () => {
    let utterance;
    let lang = "";
    voices = synth.getVoices();
    if (isInput) {
      if (!inputText.value) return;
      lang = inputLanguageSelect.value;
      utterance = new SpeechSynthesisUtterance(inputText.value);
    } else {
      if (!outputText.innerText) return;
      lang = outputLanguageSelect.value;
      utterance = new SpeechSynthesisUtterance(outputText.innerText);
    }
    if (lang === "auto") {
      return showToast("Select Input Language", "error");
    }
    const voiceMatches = voices.filter((voice) => {
      return voice.lang.includes(lang);
    });

    if (voiceMatches.length) {
      utterance.voice = voiceMatches[0];
      console.log("OK");
    }
    speechSynthesis.speak(utterance);
  };
}

function copyText(el) {
  return () => {
    el.value && navigator.clipboard.writeText(el.value);
    el.innerText && navigator.clipboard.writeText(el.innerText);
    showToast("Text copied");
  };
}

function showToast(message, status = "success") {
  if (status === "success") {
    toast.style.backgroundColor = "#a9f5b3";
  } else {
    toast.style.backgroundColor = "#ff9090";
  }
  toast.innerText = message;
  toast.style.top = "1.5rem";
  setTimeout(() => {
    toast.style.top = "-3rem";
  }, 1500);
}

copyInput.addEventListener("click", copyText(inputText));
copyOutput.addEventListener("click", copyText(outputText));
invertLanguage.addEventListener("click", invertLanguages);
translateBtn.addEventListener("click", translateText);
voiceInput.addEventListener("click", textToSpeech(true));
voiceOutput.addEventListener("click", textToSpeech(false));
