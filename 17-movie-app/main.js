/* Constants */
const API_KEY = "6d2950b0059337fed4d25779fc402e79",
  API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`,
  API_IMAGE = `https://image.tmdb.org/t/p/w1280`,
  API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`,
  d = document,
  $main = d.getElementById("main"),
  $form = d.getElementById("form"),
  $search = d.getElementById("search");

/* Functions */

async function getMovies(url) {
  const res = await fetch(url),
    data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  $main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie,
      movieEl = d.createElement("div");

    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${API_IMAGE + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    $main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchValue = $search.value;

  if (searchValue && searchValue !== "") {
    getMovies(`${API_SEARCH}${searchValue}"`);

    $search.value = "";
  } else {
    window.location.reload();
  }
});

/* Execute functions */

getMovies(API_URL);
