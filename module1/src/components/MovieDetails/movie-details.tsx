import {IMovie} from "../../constants/сonstants";
import './movie-details.scss';
export interface Props {
    movie: IMovie | null;
}

export const MovieDetails = ({movie}: Props) => {
    if (!movie) {
        return null;
    }
    return (
        <div className="movie-details">
            <img
                src={movie?.poster}
                alt={`${movie.title} poster`}
                className="movie-details__poster"
            />
            <div className="movie-details__info">
                <h2 className="movie-details__title">{movie.title}</h2>
                <p className="movie-details__year">{movie.releaseYear}</p>
                <p className="movie-details__rating">{movie.rating}</p>
                <p className="movie-details__genre">{movie.genres.join(", ")}</p>
                <p className="movie-details__description">{movie.description}</p>
            </div>
        </div>
    );
}