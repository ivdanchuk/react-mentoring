import React, { useState } from "react";
import { createPortal } from "react-dom";

import { GENRES, IMovie, MOVIES, SortOptionsType } from "./constants";
import {
  Dialog,
  GenreSelector,
  MovieDetails,
  MovieForm,
  MovieTile,
  SearchForm,
  SortControl,
} from "./components";

import styles from "./app.module.scss";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>("Comedy");
  const [selectedSorting, setSelectedSorting] =
    useState<SortOptionsType>("Release Date");
  const [currentMovie, setCurrentMovie] = useState<IMovie | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleMovieClick = (movie: IMovie) => {
    setCurrentMovie(movie);
  };

  const handleSortingSelect = (sortOption: SortOptionsType) => {
    setSelectedSorting(sortOption);
  };

  const handleSearch = (query: string) => {};

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  function resolveMovies(sortBy: "Release Date" | "Title") {
    if (sortBy === "Title") {
      return MOVIES.sort((a, b) => a.title.localeCompare(b.title));
    }
    return MOVIES.sort((a, b) => a.releaseYear - b.releaseYear);
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.addMovie}>
          <button onClick={() => setShowModal(true)}>ADD MOVIE</button>
          {showModal &&
            createPortal(
              <Dialog onClose={() => setShowModal(false)} title={"ADD MOVIE"}>
                <MovieForm onSubmit={() => {}} />
              </Dialog>,
              document.body,
            )}
        </div>
        <div>
          <SearchForm initialQuery="" onSearch={handleSearch} />
          <MovieDetails movie={currentMovie} />
        </div>
      </div>

      <div className={styles.genres}>
        <GenreSelector
          genres={GENRES}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
        <SortControl
          sortedBy={selectedSorting}
          onSelectChange={handleSortingSelect}
        />
      </div>

      <div className={styles.movieTileContainer}>
        <MovieTile
          movies={resolveMovies(selectedSorting)}
          handleClick={handleMovieClick}
        />
      </div>
    </>
  );
}

export default App;
