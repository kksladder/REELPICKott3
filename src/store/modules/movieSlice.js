// src/store/modules/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movieslice = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {},
});

export const moviesliceActions = movieslice.actions;
export default movieslice.reducer;
