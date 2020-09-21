import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MovieContainer extends Component {
    render() {
        const { movies } = this.props;
        // console.log(movies.results)
        // if (movies.results !== undefined) {
        //     movies.results.map((movie, index) => console.log(movie))
        // }

        let content = '';

        content =
            movies.results !== undefined && movies.results.map((movie, index) => (<MovieCard key={index} movie={movie} />));

        return <div className="row">{content}</div>
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
});

export default connect(mapStateToProps)(MovieContainer);