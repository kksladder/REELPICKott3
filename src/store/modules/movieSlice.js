// src/store/modules/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from './getThunk';

const initialState = {
    movieData: [],
    loading: true,
    error: null,
    currentData: null,
}

const movieslice = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state, action) => { })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movieData = action.payload
            })
            .addCase(getMovie.rejected, (state, action) => { });
    },
});

export const moviesliceActions = movieslice.actions;
export default movieslice.reducer;