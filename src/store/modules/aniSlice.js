import { createSlice } from "@reduxjs/toolkit";
import { getContent, getFilteredContent, searchContent } from "../modules/aniSlice.js";

const initialState = {
    animeList: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 0,
    hasMore: true,
    searchResults: [],
    searchTerm: "",
};

const aniSlice = createSlice({
    name: "ani",
    initialState,
    reducers: {
        clearAnimeList: (state) => {
            state.animeList = [];
            state.currentPage = 1;
            state.hasMore = true;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            if (!action.payload) {
                state.searchResults = [];
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // getContent (기본 인기 애니메이션)
            .addCase(getContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getContent.fulfilled, (state, action) => {
                state.loading = false;
                if (state.currentPage === 1) {
                    state.animeList = action.payload.data;
                } else {
                    state.animeList = [...state.animeList, ...action.payload.data];
                }
                state.currentPage = action.payload.currentPage + 1;
                state.totalPages = action.payload.totalPages;
                state.hasMore = state.currentPage <= Math.min(state.totalPages, 50);
            })
            .addCase(getContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // getFilteredContent (필터링된 애니메이션)
            .addCase(getFilteredContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFilteredContent.fulfilled, (state, action) => {
                state.loading = false;
                if (state.currentPage === 1) {
                    state.animeList = action.payload.data;
                } else {
                    state.animeList = [...state.animeList, ...action.payload.data];
                }
                state.currentPage = action.payload.currentPage + 1;
                state.totalPages = action.payload.totalPages;
                state.hasMore = state.currentPage <= Math.min(state.totalPages, 50);
            })
            .addCase(getFilteredContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // searchContent (애니메이션 검색)
            .addCase(searchContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchContent.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload.data;
                if (state.currentPage === 1) {
                    state.animeList = action.payload.data;
                } else {
                    state.animeList = [...state.animeList, ...action.payload.data];
                }
                state.currentPage = action.payload.currentPage + 1;
                state.totalPages = action.payload.totalPages;
                state.hasMore = state.currentPage <= Math.min(state.totalPages, 50);
            })
            .addCase(searchContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearAnimeList, setSearchTerm } = aniSlice.actions;
export default aniSlice.reducer;
