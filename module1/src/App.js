import { Component } from "react";
import "./css/App.scss";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    genres: ["ALL", "Crime", "Comedy", "Drama", "Horror"],
    selectedGenre: "Comedy",
  };

  handleSearch = (query) => {
    console.log("Searching:", query);
  };

  handleSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    return (
      <div>
        <div className="header">
          <SearchForm initialQuery="" onSearch={this.handleSearch} />
        </div>
        <GenreSelect
          genres={this.state.genres}
          selectedGenre={this.state.selectedGenre}
          onSelect={this.handleSelect}
        />
        <div>
          <Counter initValue={10}></Counter>
        </div>
      </div>
    );
  }
}

export default App;
