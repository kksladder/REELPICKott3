import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const options = {
    api_key: '7269aebff8b7461ac95532129bb7d8db',
    lenguage: 'ko-KR',
    genres: 28,
};

export const getMovie = createAsyncThunk('movie/getMovie', async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing`;
    try {
        // const res = await axios.get(url);
        const res = await axios.get(url, {
            params: options,
        });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});