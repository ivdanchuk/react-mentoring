import React, {useState} from 'react';
import './app.scss';
import {GENRES} from "./constants/сonstants";
import {SearchForm, GenreSelector} from "./components";

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
