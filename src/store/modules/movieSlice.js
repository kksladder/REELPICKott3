import { createSlice } from "@reduxjs/toolkit";
import { getMovie, getMovieDetails } from "./getThunk";

const initialState = {
    movieData: [],
    currentMovie: null,
    loading: false,
    error: null,
    hasMore: true,
    currentPage: 1
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                // 첫 페이지일 경우 데이터 초기화, 아닐 경우 기존 데이터에 추가
                if (action.payload.currentPage === 1) {
                    state.movieData = action.payload.data;
                } else {
                    // 중복 제거를 위해 id 기준으로 필터링
                    const newItems = action.payload.data.filter(
                        newItem => !state.movieData.some(
                            existingItem => existingItem.id === newItem.id
                        )
                    );
                    state.movieData = [...state.movieData, ...newItems];
                }

                state.hasMore = action.payload.hasMore;
                state.currentPage = action.payload.currentPage;
                state.loading = false;
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