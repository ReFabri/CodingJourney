async function fetchData() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cdogecoin%2Cethereum%2Clitecoin%2Ctether&vs_currencies=usd&include_24hr_vol=true"
  );
  const data = await response.json();
  console.log(data);
}

fetchData();
