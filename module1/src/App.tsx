import React, {useState} from 'react';
import './App.scss';
import SearchForm from "./components/SearchForm/SearchForm";
import {GENRES} from "./constants/Constants";
import GenreSelector from "./components/GenreSelector/GenreSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>("Comedy");

  let handleSearch = (query: string) => {
  };

  let handleSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
      <div>
        <div className="header">
          <SearchForm initialQuery="" onSearch={handleSearch}/>
        </div>
        <GenreSelector
            genres={GENRES}
            selectedGenre={selectedGenre}
            onSelect={handleSelect}
        />
      </div>
  );
}

export default App;
