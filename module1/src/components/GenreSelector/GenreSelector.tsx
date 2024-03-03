import React from "react";
import "./GenreSelector.scss"

export type GenreProps = {
    genres: string[],
    selectedGenre: string,
    onSelect: Function
}
export const GenreSelector = (genreProps: GenreProps) => {
    const {genres, selectedGenre, onSelect} = genreProps;
    return (
        <div className="movie-genre">
            {genres.map((genre) => (
                <div
                    className={`genre-item ${selectedGenre === genre ? "active" : ""}`}
                    key={genre}
                    onClick={() => onSelect(genre)}
                >
                    {genre}
                </div>
            ))}
        </div>
    );
}

export default GenreSelector;
