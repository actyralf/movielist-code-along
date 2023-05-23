export function createMovieCard(movie, onDelete, onToggleBookmark) {
  const card = document.createElement("section");
  card.innerHTML = `<h2>${movie.title}</h2>`;
  card.classList.add("movie-card");
  const favoriteButton = document.createElement("button");
  favoriteButton.textContent = movie.isBookmarked
    ? "Remove Bookmark"
    : "Add Bookmark";
  favoriteButton.addEventListener("click", onToggleBookmark);
  card.append(favoriteButton);
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", onDelete);
  deleteButton.textContent = "X";
  card.append(deleteButton);

  return card;
}
