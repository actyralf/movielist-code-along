import { initialMovies } from "./initial-movies.js";
import { createMovieCard } from "../components/MovieCard/MovieCard.js";

console.clear();

const cardList = document.querySelector('[data-js="card-list"]');

// state
let movies = [];

const movieJSON = localStorage.getItem("movies");
if (movieJSON) {
  movies = JSON.parse(movieJSON);
} else {
  movies = initialMovies.map((movie) => movie);
}

function deleteMovie(id) {
  movies = movies.filter((movie) => movie.id !== id);
  localStorage.setItem("movies", JSON.stringify(movies));
}

function toggleBookmark(id) {
  movies = movies.map((movie) => {
    if (movie.id === id) {
      return {
        ...movie,
        isBookmarked: !movie.isBookmarked,
      };
    }
    return movie;
  });
  localStorage.setItem("movies", JSON.stringify(movies));
}

function renderMovieList() {
  cardList.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = createMovieCard(
      movie,
      () => {
        deleteMovie(movie.id);
        renderMovieList();
      },
      () => {
        toggleBookmark(movie.id);
        renderMovieList();
      }
    );
    cardList.append(movieCard);
  });
}

renderMovieList();
