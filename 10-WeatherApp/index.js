//=================================================
const apiKey = "";
//=================================================

const openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${apiKey}`;

const getData = async () => {
  try {
    const data = await fetch(openWeatherAPI);
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
getData();
