import { createSlice } from "@reduxjs/toolkit";
import { getDirectorsByCountry } from "./getThunk3";

const initialState = {
    filteredDirectors: [],
    loading: false,
    error: null,
    hasMore: true,
    currentPage: 1,
    selectedCountry: "all", // 국가 선택 상태 유지
};

const directorSlice = createSlice({
    name: "director",
    initialState,
    reducers: {
        setSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload;
            state.filteredDirectors = [];
            state.currentPage = 1;
            state.hasMore = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDirectorsByCountry.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDirectorsByCountry.fulfilled, (state, action) => {
                // 첫 페이지일 경우 데이터 초기화, 아닐 경우 기존 데이터에 추가
                if (action.payload.currentPage === 1) {
                    state.filteredDirectors = action.payload.filteredDirectors;
                } else {
                    // 중복 제거를 위해 id 기준으로 필터링
                    const newDirectors = action.payload.filteredDirectors.filter(
                        (newDirector) =>
                            !state.filteredDirectors.some((existingDirector) => existingDirector.id === newDirector.id)
                    );
                    state.filteredDirectors = [...state.filteredDirectors, ...newDirectors];
                }

                state.hasMore = action.payload.hasMore;
                state.currentPage = action.payload.currentPage;
                state.loading = false;
            })
            .addCase(getDirectorsByCountry.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setSelectedCountry } = directorSlice.actions;
export default directorSlice.reducer;
