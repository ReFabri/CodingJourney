const [time, mistakes, accuracy, speed] = document.querySelectorAll("span");
const [testCopy, testWrite] = document.querySelectorAll(".textBoxes");
const btnWrapper = document.querySelector(".btn-wrapper");
const startBtn = document.querySelector(".startBtn");
const resultWrapper = document.querySelector(".result-wrapper");

const quotes = [
  "Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.",
  "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.",
  "As long as we persist in our pursuit of our deepest destiny, we will continue to grow. We cannot choose the day or time when we will fully bloom. It happens in its own time.",
  "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.",
  "The value of life is not in its duration, but in its donation. You are not important because of how long you live, you are important because of how effective you live.",
  "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
  "I have learned that as long as I hold fast to my beliefs and values - and follow my own moral compass - then the only expectations I need to live up to are my own.",
  "It is very important to generate a good attitude, a good heart, as much as possible. From this, happiness in both the short term and the long term for both yourself and others will come.",
];
let quote = "";

startBtn.addEventListener("click", () => {
  testWrite.value = "";
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  testCopy.innerText = quote;
});

testWrite.addEventListener("input", () => {});
