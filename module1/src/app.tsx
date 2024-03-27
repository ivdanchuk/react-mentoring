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

  const handleSearch = (query: string) => {};

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  const handleSortingSelect = (sortOption: SortOptionsType) => {
    setSelectedSorting(sortOption);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.addMovie}>
          <button onClick={() => setShowModal(true)}>ADD MOVIE</button>
          {showModal &&
            createPortal(
              <Dialog onClose={() => setShowModal(false)} title={"ADD MOVIE"}>
                <MovieForm onSubmit={() => {}} />
                {/*<MovieForm initialMovieInfo={MOVIES[0]} onSubmit={() => {}} />*/}
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
      <MovieTile movies={MOVIES} handleClick={handleMovieClick} />
    </>
  );
}

export default App;
