async function getMovieData() {
  const title = "The Matrix";

  const omdbApi = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
  const data = await fetch(omdbApi);
  const json = await data.json();
  console.log(json);
}

getMovieData();

/*
API Data Structure (All strings)

json.Actors
json.Genre
json.Plot     
json.Poster
json.Rated
json.imdbRating
json.Runtime
json.Year
*/
