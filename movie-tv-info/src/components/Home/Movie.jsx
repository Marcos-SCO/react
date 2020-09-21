import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from '../Layout/Spinner';

export class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }


    render() {
        const { loading, movie } = this.props;
        console.log(movie)

        let genres = [];
        for (let i in movie.genres) {
            genres.push(`${movie.genres[i].name}`);
        }

        let movieInfo = (
            <div className="container">
                <div className="row">
                    <figure className="col-md-4 card card-body">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="thumbnail" alt="Poster" />
                    </figure>
                    <div className="col-md-8">
                        <h2 className="mb-4">{movie.title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Gêneros:</strong> {genres.join(', ')}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> {movie.release_date}
                            </li>
                            <li className="list-group-item">
                                <strong>Avaliação:</strong> {movie.vote_average}
                            </li>
                            <li className="list-group-item">
                                <strong>Director:</strong> {movie.Director}
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> {movie.Writer}
                            </li>
                            <li className="list-group-item">
                                <strong>Actors:</strong> {movie.Actors}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>Sobre </h3>
                            {movie.Plot}
                            <hr />
                            <a
                                href={'https://www.imdb.com/title/' + movie.imdb_id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >Ver no IMDB</a>
                            <Link to="/" className="btn btn-default text-light">Go Back To Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

        let content = loading ? <Spinner /> : movieInfo;

        return (
            <>{content}</>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);