import { createSlice } from '@reduxjs/toolkit';
import { getMovie, getMovieDetails } from './getThunk';

const initialState = {
    movieData: [],
    currentMovie: null,
    loading: false,
    error: null
};

const creditSlice = createSlice({
    name: 'creditR', // Using your existing slice name
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle getMovie thunk
            .addCase(getMovie.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.movieData = action.payload;
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Handle getMovieDetails thunk
            .addCase(getMovieDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.currentMovie = action.payload;
            })
            .addCase(getMovieDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default creditSlice.reducer;