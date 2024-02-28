import React from "react";
import {useState} from "react";
import "./SearchForm.scss"

type SearchProps = {
    initialQuery: string,
    onSearch: Function
}
export const SearchForm = (props: SearchProps) => {
    const [query, SetQuery] = useState(props.initialQuery || "Search movie ...");
    let handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        SetQuery(event.target.value);
    };

    let handleSearch = () => {
        props.onSearch && props.onSearch(query);
    };

    let handlePressEnter = (event: { keyCode: number; }) => {
        if (event.keyCode === 13) {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDownCapture={handlePressEnter}
            />
            <button onClick={handleSearch}>SEARCH</button>
        </div>
    );
}

export default SearchForm;
