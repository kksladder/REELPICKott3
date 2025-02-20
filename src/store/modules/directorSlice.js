// store/modules/directorSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getDirectorDetails } from "./getThunk";

const initialState = {
    directorInfo: null,
    works: [],
    loading: false,
    error: null
};

const directorSlice = createSlice({
    name: "director",
    initialState,
    reducers: {
        clearDirectorInfo: (state) => {
            state.directorInfo = null;
            state.works = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDirectorDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDirectorDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.directorInfo = action.payload.directorInfo;
                state.works = action.payload.directorInfo.works;
            })
            .addCase(getDirectorDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearDirectorInfo } = directorSlice.actions;
export default directorSlice.reducer;