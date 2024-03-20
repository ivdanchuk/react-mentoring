import React, { ChangeEvent, useState } from "react";

import styles from "./search-form.module.scss";

interface ISearchProps {
  initialQuery: string;
  onSearch: Function;
}

export const SearchForm = ({ initialQuery, onSearch }: ISearchProps) => {
  const [query, SetQuery] = useState(initialQuery || "Search movie ...");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    SetQuery(event.target.value);
  };

  const handlePressEnter = ({ key }: React.KeyboardEvent) => {
    if (key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch && onSearch(query);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => handleInputChange(e)}
        onKeyDownCapture={(e) => handlePressEnter(e)}
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
};
