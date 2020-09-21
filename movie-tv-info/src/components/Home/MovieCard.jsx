import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
    render() {

        function releaseYear(release_date = '0000') {
            return release_date.substring(0, 4);
        }

        const { movie } = this.props;
        console.log(movie);
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Cover" onError={(e) => { e.target.onerror = null; e.target.src = `https://raw.githubusercontent.com/Marcos-SCO/gordao110porcento/master/public/img/not_found/no_image.jpg`}} />
                    <h5 className="text-light card-title">
                        {movie.title} - {releaseYear(movie.release_date)}
                    </h5>
                    <Link className="btn btn-primary" to={`movie/${movie.id}`}>Detalhes<i className="fas fa-chevron-right" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default MovieCard;