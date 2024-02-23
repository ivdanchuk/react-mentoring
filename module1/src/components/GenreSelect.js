import React from "react";
import PropTypes from "prop-types";

class GenreSelect extends React.Component {
  render() {
    const { genres, selectedGenre, onSelect } = this.props;
    return (
      <div className="genre-select">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-select-button ${
              genre === selectedGenre ? "genre-select-button--selected" : ""
            }`}
            onClick={() => onSelect(genre)}
          >
            {genre}
          </button>
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
