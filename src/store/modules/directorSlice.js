// store/modules/directorSlice.js 수정
import { createSlice } from "@reduxjs/toolkit";
import { getDirectorDetails } from "./getThunk";
import { getDirectorsByCountry } from "./getThunk3";

const initialState = {
    directorInfo: null,
    works: [],
    loading: false,
    error: null,
    selectedCountry: "all",
    filteredDirectors: [],
    currentPage: 1,
    hasMore: true,
};

const directorSlice = createSlice({
    name: "director",
    initialState,
    reducers: {
        clearDirectorInfo: (state) => {
            state.directorInfo = null;
            state.works = [];
        },
        setSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload;
            state.currentPage = 1;
            state.filteredDirectors = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // 기존 getDirectorDetails 유지
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
            })
            // 새로운 getDirectorsByCountry 처리 추가
            .addCase(getDirectorsByCountry.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDirectorsByCountry.fulfilled, (state, action) => {
                state.loading = false;
                state.filteredDirectors = action.payload.filteredDirectors;
                state.hasMore = action.payload.hasMore;
                state.currentPage = action.payload.currentPage;
            })
            .addCase(getDirectorsByCountry.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearDirectorInfo, setSelectedCountry } = directorSlice.actions;
export default directorSlice.reducer;
