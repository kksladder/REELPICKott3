// src/store/modules/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const commonslice = createSlice({
    name: 'common',
    initialState: {},
    reducers: {},
});

export const commonsliceActions = commonslice.actions;
export default commonslice.reducer;
