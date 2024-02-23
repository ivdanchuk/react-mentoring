import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

class App extends Component {
  handleSearch = (query) => {
    console.log("Searching:", query);
  };

  handleSelect = (genre) => {
    console.log("Selected genre:", genre);
  };

  render() {
    const genres = ["Action", "Comedy", "Drama", "Horror"];
    const selectedGenre = "Comedy";

    return (
      <div className="App">
        {/* <Counter></Counter> */}
        {/* <SearchForm initialQuery="" onSearch={this.handleSearch} /> */}
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
