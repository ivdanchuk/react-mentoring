import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {SearchForm} from './search-form';

const mockOnSearch = jest.fn();
const initialText = 'text';
const changedText = 'new text';

const mockProps = {
    initialQuery: initialText,
    onSearch: mockOnSearch
}
const Tested = () => <SearchForm {...mockProps} />;

describe("<SearchForm/>", () => {

    test("checks initial props", () => {
        const {container} = render(<Tested/>);
        expect(screen.getByDisplayValue(initialText)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    test("checks input change", () => {
        const {container} = render(<Tested/>);
        const input = screen.getByDisplayValue(initialText);
        fireEvent.change(input, {target: {value: changedText}});
        expect(input).toHaveValue(changedText);
        expect(container).toMatchSnapshot();
    });

    test("checks search on button click", () => {
        const {container} = render(<Tested/>);
        const input = screen.getByDisplayValue(initialText);
        const button = screen.getByText(/SEARCH/i);
        fireEvent.change(input, {target: {value: changedText}});
        fireEvent.click(button);
        expect(mockOnSearch).toHaveBeenCalledWith(changedText);
        expect(container).toMatchSnapshot();
    });

    it("checks search on enter key press", () => {
        const {container} = render(<Tested/>);
        const input = screen.getByDisplayValue(initialText);
        fireEvent.change(input, {target: {value: changedText}});
        fireEvent.keyDown(input, {keyCode: 13});
        expect(mockOnSearch).toHaveBeenCalled();
        expect(container).toMatchSnapshot();
    });
});