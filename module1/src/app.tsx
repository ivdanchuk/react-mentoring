import React, {useState} from 'react';
import './app.scss';
import {GENRES, IMovie, MOVIES, SortOptionsType} from "./constants/сonstants";
import {SearchForm, GenreSelector, MovieTile} from "./components";
import {MovieDetails} from "./components/MovieDetails/movie-details";
import {SortControl} from "./components/SortControl/sort-control";
import AddMovie from "./components/AddMovie/add-movie";
import Dialog from "./components/Dialog/dialog";
import {createPortal} from "react-dom";
import MovieForm from "./components/MovieForm/movie-form";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<string>("Comedy");
    const [selectedSorting, setSelectedSorting] = useState<SortOptionsType>("Release Date");
    const [currentMovie, setCurrentMovie] = useState<IMovie | null>(null);
    const [showModal, setShowModal] = useState(false);
    const handleMovieClick = (movie: IMovie) => {
        setCurrentMovie(movie);
    };
    let handleSearch = (query: string) => {
    };

    let handleGenreSelect = (genre: string) => {
        setSelectedGenre(genre);
    };
    let handleSortingSelect = (sortOption: SortOptionsType) => {
        setSelectedSorting(sortOption);
    };
    return (
        <div>
            <div className="header">
                <button onClick={() => setShowModal(true)}>
                    ADD MOVIE
                </button>

                {showModal &&
                    createPortal(
                        <Dialog onClose={() => setShowModal(false)} title={"title"}>
                            <MovieForm onSubmit={() => {}}/>
                        </Dialog>, document.body)}

                <div>
                    <SearchForm initialQuery="" onSearch={handleSearch}/>
                    <MovieDetails movie={currentMovie}/>
                </div>
            </div>
            <div>
                <GenreSelector
                    genres={GENRES}
                    selectedGenre={selectedGenre}
                    onSelect={handleGenreSelect}
                />
                <SortControl sortedBy={selectedSorting} onSelectChange={handleSortingSelect}/>
            </div>
            <MovieTile movies={MOVIES} handleClick={handleMovieClick}/>
        </div>
    )
        ;
}

export default App;
