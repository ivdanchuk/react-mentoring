import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";

class App extends Component {
  handleSearch = (query) => {
    console.log("Searching:", query);
  };

  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <SearchForm initialQuery="" onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
