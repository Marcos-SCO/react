import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING } from './types';
import axios from 'axios';

import API_ENV from '../APIENV';

const { API_KEY, API_BASE } = API_ENV;

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovie = text => dispatch => {
    axios
        .get(`${API_BASE}/movie/${text}?api_key=${API_KEY}&language=pt-BR`)
        .then(res => {
            dispatch({
                type: FETCH_MOVIE,
                payload: res.data
            })
        }
        ).catch(err => console.log(err));
};

export const fetchMovies = text => dispatch => {
    axios
        .get(`${API_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&include_adult=true&query=${text}`)
        .then(res => {
            // console.log(res)
            dispatch({
                type: FETCH_MOVIES,
                payload: res.data
            })
        }
        ).catch(err => console.log(err));
};


export const setLoading = () => {
    return {
        type: LOADING
    };
};