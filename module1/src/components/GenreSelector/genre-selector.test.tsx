import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GenreSelector, GenreProps } from './genre-selector';

afterEach(cleanup);

const mockProps: GenreProps = {
    genres: ['Action', 'Comedy', 'Drama'],
    selectedGenre: 'Drama',
    onSelect: jest.fn()
};

describe('GenreSelector', () => {
    test('renders the correct genres', () => {
        render(<GenreSelector {...mockProps} />);
        mockProps.genres.forEach((genre) => {
            expect(screen.getByText(genre)).toBeInTheDocument();
        });
    });

    test('correctly highlights the selected genre', () => {
        render(<GenreSelector {...mockProps} />);
        expect(screen.getByText(mockProps.selectedGenre)).toHaveClass('active');
    });

    test('calls onSelect with the correct genre when a genre is clicked', () => {
        render(<GenreSelector {...mockProps} />);
        fireEvent.click(screen.getByText('Action'));
        expect(mockProps.onSelect).toHaveBeenCalledWith('Action');
    })
});