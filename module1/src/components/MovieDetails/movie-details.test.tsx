import React from 'react';
import {render, screen} from '@testing-library/react';
import {IMovie} from "../../constants/сonstants";
import { MovieDetails } from './movie-details'; // assuming this is the location of your file

describe('MovieDetails component', () => {
    const stubMovie = {
        poster: 'test-poster',
        title: 'test-title',
        releaseYear: 'test-year',
        rating: 'test-rating',
        genres: ['test-genre1', 'test-genre2'],
        description: 'test-description'
    };

    it('should render null if no movie is provided', () => {
        const { container } = render(<MovieDetails movie={null} />);

        expect(container).toBeEmptyDOMElement();
    });

    it('should render movie details properly', () => {
        const { getByAltText, getByText } = render(<MovieDetails movie={stubMovie as IMovie} />);

        expect(screen.getByAltText(`${stubMovie.title} poster`)).toBeTruthy();
        expect(screen.getByText(stubMovie.title)).toBeVisible();
        expect(screen.getByText(stubMovie.releaseYear)).toBeVisible();
        expect(screen.getByText(stubMovie.rating)).toBeVisible();
        expect(screen.getByText(stubMovie.genres.join(", "))).toBeVisible();
        expect(screen.getByText(stubMovie.description)).toBeVisible();
    });
});