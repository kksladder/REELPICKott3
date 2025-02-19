import { createSlice } from "@reduxjs/toolkit";
import { getMovie, getMovieDetails } from "./getThunk";

const initialState = {
    movieData: [],
    currentMovie: null,
    loading: false,
    error: null,
};

const movieSlice = createSlice({
    name: "movieR",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.movieData = action.payload;
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getMovieDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.currentMovie = action.payload;
            })
            .addCase(getMovieDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default movieSlice.reducer;
