import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.initialQuery || "Search movie ...",
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch && this.props.onSearch(this.state.query);
  };

  handlePressEnter = (event) => {
    if (event.keyCode === 13) {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
          onPressEnter={this.handlePressEnter}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
