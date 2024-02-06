const [searchInput, searchBtn] = document.querySelectorAll(
  ".search-container > *"
);
const movieContainer = document.querySelector(".movie-container");
const poster = document.querySelector(".movie-data img");
const movieTitle = document.querySelector(".data-wrapper h1");
const movieScore = document.querySelector(".rating h2:last-child");
const [movieRating, movieYear, movieRuntime] =
  document.querySelectorAll(".info h3");
const genresContainer = document.querySelector(".genres");
const [moviePlot, movieCast] = document.querySelectorAll(".movie-info p");
const notFound = document.querySelector(".notFound");

async function getMovieData() {
  const title = searchInput.value;

  const omdbApi = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
  const data = await fetch(omdbApi);
  const json = await data.json();
  return json;
}

function changeValues(json) {
  poster.src = json.Poster;
  poster.alt = `${json.Title} poster`;
  movieTitle.innerText = json.Title;
  movieScore.innerText = json.imdbRating;
  movieRating.innerText = json.Rated;
  movieYear.innerText = json.Year;
  movieRuntime.innerText = json.Runtime;
  moviePlot.innerText = json.Plot;
  movieCast.innerText = json.Actors;

  const genres = json.Genre.split(",");
  genresContainer.innerHTML = "";
  genres.forEach((text) => {
    const newEl = document.createElement("div");
    newEl.innerText = text;
    genresContainer.appendChild(newEl);
  });
}

searchBtn.addEventListener("click", async () => {
  const movieData = await getMovieData();
  if (!movieData.Error) {
    changeValues(movieData);
    notFound.style.height = "0";
    movieContainer.style.height = "100%";
  } else {
    movieContainer.style.height = "0";
    notFound.style.height = "100%";
  }
});
