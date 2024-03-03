import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from './SearchForm';

describe("<SearchForm/>", () => {

    test("checks initial props", () => {
        render(<SearchForm initialQuery='Test' onSearch={() => { }} />);
        expect(screen.getByDisplayValue(/Test/i)).toBeInTheDocument();
    });

    test("checks input change", () => {
        render(<SearchForm initialQuery='Test' onSearch={() => { }} />);
        const input = screen.getByDisplayValue(/Test/i);
        fireEvent.change(input, { target: { value: 'Test Changed' } });
        expect(input).toHaveValue('Test Changed');
    });

    test("checks search on button click", () => {
        const mockOnSearch = jest.fn();
        render(<SearchForm initialQuery='Test' onSearch={mockOnSearch} />);
        const input = screen.getByDisplayValue(/Test/i);
        const button = screen.getByText(/SEARCH/i);

        fireEvent.change(input, { target: { value: 'Test Changed' } });
        fireEvent.click(button);
        expect(mockOnSearch).toHaveBeenCalledWith('Test Changed');
    });

    it("checks search on enter key press", () => {
        const mockOnSearch = jest.fn();
        render(<SearchForm initialQuery='Test' onSearch={mockOnSearch} />);
        const input = screen.getByDisplayValue(/Test/i);

        fireEvent.change(input, { target: { value: 'Test Changed' } });
        fireEvent.keyDown(input, { keyCode: 13 });

        expect(mockOnSearch).toHaveBeenCalled();
    });
});