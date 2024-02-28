import React from "react";
import PropTypes from "prop-types";
import "./GenreSelector.scss"

class GenreSelector extends React.Component {
  render() {
    const { genres, selectedGenre, onSelect } = this.props;
    return (
      <div className="movie-genre">
        {genres.map((genre) => (
          <div
            className={`genre-item ${selectedGenre === genre ? "active" : ""}`}
            key={genre}
            onClick={() => onSelect(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
    );
  }
}

GenreSelector.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GenreSelector;
