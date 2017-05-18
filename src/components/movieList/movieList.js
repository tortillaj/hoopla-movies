import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/movie.js';
import './movieList.scss';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(movie =>
          <Movie movie={movie} key={movie.titleId} />
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
