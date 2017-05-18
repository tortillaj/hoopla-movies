import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.scss';

class Movie extends Component {
  render() {
    return (
      <figure className="movie">
        <img src={`https://d2snwnmzyr8jue.cloudfront.net/${this.props.movie.artKey}_270.jpeg`} className="movie__image"/>
        <figcaption className="movie__caption">
          <h2 className="movie__title">{this.props.movie.title}</h2>
          <p className="movie__artist">{this.props.movie.artistName}</p>
        </figcaption>
      </figure>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
