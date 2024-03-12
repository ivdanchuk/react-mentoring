import * as colorette from "colorette";

export const GENRES = ["ALL", "Crime", "Comedy", "Drama", "Horror"];
export type SortOptionsType = 'Release Date' | 'Title';
export interface IMovieTileProps {
    movies: IMovie[],
    handleClick(movie: IMovie): void
}

export interface IMovie {
    poster: string,
    title: string,
    releaseYear: string,
    genres: string[],
    rating: string,
    description: string
}

export const MOVIES: IMovie[] = [
    {
        poster: "./img/pulp-fiction.png",
        title: "Pulp Fiction",
        releaseYear: "2004",
        genres: ["Action"],
        rating: "5.0",
        description: "some decr"
    },
    {
        poster: "./img/kill-bill.png",
        title: "Bill: Vol2",
        releaseYear: "1994",
        genres: ["Oscar winning Movie"],
        rating: "8.0",
        description: "some decr"
    }
]

