import { Component } from "react";
import "./css/App.css";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";
import Counter from "./components/Counter";

class App extends Component {
  handleSearch = (query) => {
    console.log("Searching:", query);
  };

  handleSelect = (genre) => {
    console.log("Selected genre:", genre);
  };

  render() {
    const genres = ["ALL", "Crime", "Comedy", "Drama", "Horror"];
    const selectedGenre = "Comedy";

    return (
      <div>
        <div className="header">
          <SearchForm initialQuery="" onSearch={this.handleSearch} />
        </div>
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={this.handleSelect}
        />
        <Counter initValue={10}></Counter>
      </div>
    );
  }
}

export default App;
