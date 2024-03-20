import React, { useState } from "react";

import { GENRES, IMovie, MOVIES, SortOptionsType } from "./constants";
import { GenreSelector, MovieTile, SearchForm } from "./components";
import { MovieDetails } from "./components/MovieDetails/movie-details";
import { SortControl } from "./components/SortControl/sort-control";
import Dialog from "./components/Dialog/dialog";
import { createPortal } from "react-dom";
import MovieForm from "./components/MovieForm/movie-form";

import "./app.scss";

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
      <div className="header">
        <button onClick={() => setShowModal(true)}>ADD MOVIE</button>

        {showModal &&
          createPortal(
            <Dialog onClose={() => setShowModal(false)} title={"title"}>
              <MovieForm onSubmit={() => {}} />
            </Dialog>,
            document.body,
          )}

        <div>
          <SearchForm initialQuery="" onSearch={handleSearch} />
          <MovieDetails movie={currentMovie} />
        </div>
      </div>
      <div>
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
