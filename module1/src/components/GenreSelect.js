import React, { useState } from "react";
import PropTypes from "prop-types";

class GenreSelect extends React.Component {
  render() {
    const { genres, selectedGenre, onSelect } = this.props;
    return (
      // <div className="genre-select">
      //   <ul style={{ display: "flex", listStyleType: "none" }}>
      //     {genres.map((genre) => (
      //       <li
      //         key={genre}
      //         className={`genre-select-button ${
      //           genre === selectedGenre ? "genre-select-button--selected" : ""
      //         }`}
      //         onClick={() => onSelect(genre)}
      //       >
      //         {genre}
      //       </li>
      //     ))}
      //   </ul>
      // </div>
      <div className="movie-genre">
        {genres.map((genre) => (
          <div
            className={`genre-item ${selectedGenre === genre ? "active" : ""}`}
            key={genre}
            //className={this.props.selectedGenre === genre ? "selected" : ""}
            onClick={() => onSelect(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
    );
  }
}

GenreSelect.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GenreSelect;
