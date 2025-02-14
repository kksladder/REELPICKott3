// src/store/modules/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pagenationSlice = createSlice({
    name: 'pagenation',
    initialState: {},
    reducers: {},
});

export const pagenationActions = pagenationSlice.actions;
export default pagenationSlice.reducer;
