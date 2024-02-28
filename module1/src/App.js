    import { Component } from "react";
    import "./styles/App.scss";
    import SearchForm from "./components/SearchForm/SearchForm";
    import GenreSelector from "./components/GenreSelector/GenreSelector";
    import Counter from "./components/Counter/Counter";
    import { GENRES } from "./constants/Constants";

    class App extends Component {
      state = {
        genres: GENRES,
        selectedGenre: "Comedy",
      };

      handleSearch = (query) => {};

      handleSelect = (genre) => {
        this.setState({ selectedGenre: genre });
      };

  render() {
    return (
      <div>
        <div className="header">
          <SearchForm initialQuery="" onSearch={this.handleSearch} />
        </div>
        <GenreSelector
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
