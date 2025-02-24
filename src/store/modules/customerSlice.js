// src/store/modules/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const customoerslice = createSlice({
    name: 'customoer',
    initialState: {},
    reducers: {},
});

export const commonsliceActions = customoerslice.actions;
export default customoerslice.reducer;
