import { createSlice } from "@reduxjs/toolkit";
import { getContent, getFilteredContent } from "./getThunk2";

const initialState = {
    data: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
    activeFilters: {
        sortBy: "popularity.desc",
        genres: [],
        status: null,
        country: null,
        networks: [],
        seasons: null,
    },
};
const dramaSlice = createSlice({
    name: "drama",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        clearData: (state) => {
            state.data = [];
            state.currentPage = 1;
            state.totalPages = 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getContent.fulfilled, (state, action) => {
                if (action.payload.currentPage === 1) {
                    state.data = action.payload.data;
                } else {
                    const newData = action.payload.data.filter(
                        (newItem) => !state.data.some((existingItem) => existingItem.id === newItem.id)
                    );
                    state.data = [...state.data, ...newData];
                }
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.loading = false;
            })
            .addCase(getContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getFilteredContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFilteredContent.fulfilled, (state, action) => {
                if (action.payload.currentPage === 1) {
                    state.data = action.payload.data;
                } else {
                    const newData = action.payload.data.filter(
                        (newItem) => !state.data.some((existingItem) => existingItem.id === newItem.id)
                    );
                    state.data = [...state.data, ...newData];
                }
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.loading = false;
            })
            .addCase(getFilteredContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const dramaActions = dramaSlice.actions;
export default dramaSlice.reducer;
