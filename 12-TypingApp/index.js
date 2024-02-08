const [timeVal, mistakesVal, accuracyVal, speedVal] =
  document.querySelectorAll(".typing-info span");
const [testCopy, testWrite] = document.querySelectorAll(".textBoxes");
const btnWrapper = document.querySelector(".btn-wrapper");
const [startBtn, stopBtn] = document.querySelectorAll(".btn");
const resultWrapper = document.querySelector(".result-wrapper");
testWrite.disabled = true;

const quotes_array = [
  "Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.",
  "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.",
  "As long as we persist in our pursuit of our deepest destiny, we will continue to grow. We cannot choose the day or time when we will fully bloom. It happens in its own time.",
  "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.",
  "The value of life is not in its duration, but in its donation. You are not important because of how long you live, you are important because of how effective you live.",
  "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
  "I have learned that as long as I hold fast to my beliefs and values - and follow my own moral compass - then the only expectations I need to live up to are my own.",
  "It is very important to generate a good attitude, a good heart, as much as possible. From this, happiness in both the short term and the long term for both yourself and others will come.",
];

let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let timer = null;

function startGame() {
  resetValues();
  updateQuote();
  clearInterval(timer);
  timer = setInterval(() => {
    timeElapsed++;
    timeVal.textContent = timeElapsed + "s";
  }, 1000);
}

function resetValues() {
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNum = 0;
  testWrite.disabled = false;

  testWrite.value = "";
  testCopy.textContent = "The text to be typed is shown here.";
  accuracyVal.textContent = 100;
  timeVal.textContent = timeElapsed + "s";
  mistakesVal.textContent = 0;
  stopBtn.style.display = "block";
  startBtn.style.display = "none";
  resultWrapper.style.height = "0";
}

function updateQuote() {
  testCopy.textContent = null;
  const randQuoteVal = Math.floor(Math.random() * quotes_array.length);
  current_quote = quotes_array[randQuoteVal];

  current_quote.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    testCopy.appendChild(charSpan);
  });
}

function processCurrentText() {
  const curr_input = testWrite.value;
  const curr_input_array = curr_input.split("");

  characterTyped++;
  errors = 0;

  const quoteSpanArray = testCopy.querySelectorAll("span");
  quoteSpanArray.forEach((char, index) => {
    const typedChar = curr_input_array[index];
    if (typedChar == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    } else if (typedChar === char.innerText) {
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
    } else {
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      errors++;
    }
  });

  mistakesVal.textContent = total_errors + errors;
  let correctCharacters = characterTyped - (total_errors + errors);
  let accuracy_text = (correctCharacters / characterTyped) * 100;
  accuracyVal.textContent = Math.round(accuracy_text);

  if (curr_input.length === current_quote.length) {
    total_errors += errors;
    finishGame();
  }
}

function finishGame() {
  clearInterval(timer);
  wpm = Math.round((characterTyped / 5 / timeElapsed) * 60);

  testWrite.disabled = true;
  testCopy.textContent = "The text to be typed is shown here.";
  speedVal.style.display = "block";
  stopBtn.style.display = "none";
  startBtn.style.display = "block";
  speedVal.textContent = wpm ? `${wpm}wpm` : "0wpm";
  if (testWrite.value) {
    resultWrapper.style.height = "10rem";
  }
}

testWrite.addEventListener("focus", startGame);
startBtn.addEventListener("click", resetValues);
testWrite.addEventListener("input", processCurrentText);
stopBtn.addEventListener("click", finishGame);
