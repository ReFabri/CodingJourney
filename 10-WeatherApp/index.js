const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-wrapper input");
const weatherImage = document.querySelector(".img-wrapper img");
const temp = document.querySelector(".temperature-wrapper h2");
const tempInfo = document.querySelector(".temperature-info h2");
const weatherBody = document.querySelector(".body-wrapper");
const [humidVal, windVal] = document.querySelectorAll(".moreInfo h3");

searchInput.addEventListener("input", () => {
  searchInput.value = searchInput.value.toUpperCase();
  weatherBody.style.height = "0";
});

searchBtn.addEventListener("click", async () => {
  const weatherData = await getWeatherData();
  changePageInfo(weatherData);
  changeImage(weatherData.weather[0].main);
  if (weatherData) {
    weatherBody.style.height = "480px";
  }
});

async function getWeatherData() {
  try {
    const location = searchInput.value;
    const openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    if (location) {
      const data = await fetch(openWeatherAPI);
      const json = await data.json();
      if (json) {
        return json;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function changePageInfo(json) {
  temp.innerText = json.main.temp;
  tempInfo.innerText = json.weather[0].description;
  humidVal.innerText = `${json.main.humidity}%`;
  windVal.innerText = `${json.wind.speed}Km/h`;
}

function changeImage(weather) {
  const weathers = {
    Clear: "./images/clear.png",
    Clouds: "./images/cloud.png",
    Haze: "./images/mist.png",
    Rain: "./images/rain.png",
    Drizzle: "./images/rain.png",
    Thunderstorm: "./images/rain.png",
    Snow: "./images/snow.png",
  };
  if (Object.keys(weathers).includes(weather)) {
    weatherImage.style.height = "250px";
    weatherImage.src = weathers[weather];
  } else {
    weatherImage.style.height = "0";
    weatherImage.src = "";
  }
}
