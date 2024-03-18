import {SortOptionsType} from "../../constants/сonstants";
export interface ISortControlProps {
    sortedBy: SortOptionsType;
    onSelectChange: Function
}

export const SortControl = ({sortedBy, onSelectChange}:ISortControlProps) => {
    return (
        <div className="movie-genre">
            <label>Sort by
                <select value={sortedBy} onChange={event => onSelectChange(event.target.value)}>
                    <option value="Release Date">Release Date</option>
                    <option value="Title">Title</option>
                </select>
            </label>
        </div>
    );
}