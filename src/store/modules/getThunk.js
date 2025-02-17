import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
    api_key: '7269aebff8b7461ac95532129bb7d8db',
    language: 'ko-KR',
    genres: 28,
    

};

export const getMovie = createAsyncThunk('movie/getMovie', async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing`;
    try {
        const res = await axios.get(url, {
            params: options,
        });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});
export const getCredit = createAsyncThunk('credit/getCredit', async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    try {
        const res = await axios.get(url, {
            params: options,
        });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});

// New thunk to get movie details including cast
export const getMovieDetails = createAsyncThunk('movie/getMovieDetails', async (movieId) => {
    try {
        // Get movie details
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
        const detailsRes = await axios.get(detailsUrl, {
            params: options,
        });

        // Get movie credits (cast & crew)
        const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const creditsRes = await axios.get(creditsUrl, {
            params: options,
        });

        // Combine the results
        return {
            ...detailsRes.data,
            credits: creditsRes.data
        };
    } catch (error) {
        console.log(error);
    }
});