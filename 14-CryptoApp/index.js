const mainContainer = document.querySelector(".main-container");

async function fetchData() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cdogecoin%2Cethereum%2Clitecoin%2Ctether&vs_currencies=usd&include_24hr_vol=true"
  );
  const data = await response.json();

  const entries = Object.entries(data);

  entries.forEach((crypto) => {
    const card = createCard(crypto);
    mainContainer.appendChild(card);
  });
}

function createCard(arr) {
  const divCard = document.createElement("div");
  const img = document.createElement("img");
  const divCrypto = document.createElement("div");
  const h2Crypto = document.createElement("h2");
  const span = document.createElement("span");
  const divNum = document.createElement("div");
  const h2Num = document.createElement("h2");
  const h3Num = document.createElement("h3");

  divCard.classList.add("card");
  img.src = `./images/${arr[0]}.png`;
  h2Crypto.innerText = arr[0].toUpperCase();
  span.innerText = "/USD";
  h2Num.innerText = arr[1].usd;
  h3Num.innerText = arr[1].usd_24h_vol.toFixed(5);

  if (arr[1].usd_24h_vol < 0) divCard.classList.add("card-red");

  divCard.appendChild(img);
  divCard.appendChild(divCrypto);
  divCard.appendChild(divNum);
  divCrypto.appendChild(h2Crypto);
  divCrypto.appendChild(span);
  divNum.appendChild(h2Num);
  divNum.appendChild(h3Num);

  return divCard;
}

fetchData();
