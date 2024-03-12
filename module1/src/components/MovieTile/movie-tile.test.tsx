import {render, fireEvent, screen} from '@testing-library/react';
import { MovieTile } from './movie-tile';
import {MOVIES} from "../../constants/сonstants";

describe('<MovieTile />', () => {
    it('renders correctly', () => {
        const handleClick = jest.fn();

        const { getByAltText, getByText } = render(
            <MovieTile movies={MOVIES} handleClick={handleClick} />
        );

        MOVIES.forEach(movie => {
            screen.getByAltText(movie.title);
            screen.getByText(movie.title);
            screen.getByText(movie.releaseYear.toString());
            screen.getByText(movie.genres.join(', '));
        });
    });

    it('handles click event', () => {
        const handleClick = jest.fn();

        const { getByAltText } = render(
            <MovieTile movies={MOVIES} handleClick={handleClick} />
        );

        fireEvent.click(screen.getByAltText('Pulp Fiction'));

        expect(handleClick).toBeCalledWith(MOVIES[0]);
    });
});