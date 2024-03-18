import {useState} from "react";
import "./search-form.scss"

interface ISearchProps {
    initialQuery: string,
    onSearch: Function
}
export const SearchForm = ({initialQuery, onSearch}:ISearchProps) => {
    const [query, SetQuery] = useState(initialQuery || "Search movie ...");
    let handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        SetQuery(event.target.value);
    };

    let handleSearch = () => {
        onSearch && onSearch(query);
    };

    let handlePressEnter = ({ key}:React.KeyboardEvent) => {
        if (key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDownCapture={(e) => handlePressEnter(e)}
            />
            <button onClick={handleSearch}>SEARCH</button>
        </div>
    );
}
