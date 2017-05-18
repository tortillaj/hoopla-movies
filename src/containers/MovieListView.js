import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { MovieList } from '../components';
import * as movieActionCreators from '../store/actions/movieActions.js';

class MovieListView extends Component {
  componentDidMount () {
    this.getMovies();
  }

  getMovies () {
    // this is our auto-bound saga watcher
    // from GET_MOVIES
    this.props.movieActions.getMovies();
  }

  render () {
    const { movies } = this.props;

    return (
      <div>
        <MovieList movies={movies}/>
      </div>
    )
  }
}

// Automatically map state to props to make accessing easier
function mapStateToProps (state) {
  return {
    movies: state.getIn(['movies', 'list'], Immutable.List()).toJS()
  }
}

// Make it easier to dispatch to saga actions
function mapDispatchToProps (dispatch) {
  return {
    movieActions: bindActionCreators(movieActionCreators, dispatch)
  };
}

// Connect this list view to the store
export default connect(mapStateToProps, mapDispatchToProps)(MovieListView);
