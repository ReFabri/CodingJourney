async function translateText() {
  const inputText = document.getElementById("inputText").value;
  const languageSelect = document.getElementById("languageSelect");
  const targetLanguage =
    languageSelect.options[languageSelect.selectedIndex].value;

  const response = await fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURI(
      inputText
    )}`
  );
  const data = await response.json();
  const translatedText = data[0][0][0];

  document.getElementById("outputText").innerText = translatedText;
}
