import { render, fireEvent, screen } from '@testing-library/react';
import { SortControl } from './sort-control';

describe('SortControl', () => {
    it('renders the current selection', () => {
        const { container } = render(
            <SortControl
                sortedBy="Title"
                onSelectChange={() => {}}
            />
        );

        expect(screen.getByLabelText('Sort by')).toHaveValue('Title');
    });

    it('calls onSelectChange with new value when selection changes', () => {
        const handleSelectionChange = jest.fn();

        const { getByLabelText } = render(
            <SortControl
                sortedBy="Release Date"
                onSelectChange={handleSelectionChange}
            />
        );

        fireEvent.change(screen.getByLabelText('Sort by'), {target: {value: 'Title'}});
        expect(handleSelectionChange).toHaveBeenCalledTimes(1);
        expect(handleSelectionChange).toHaveBeenCalledWith('Title');
    });
});