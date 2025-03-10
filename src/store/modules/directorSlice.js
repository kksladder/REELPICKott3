import { createSlice } from "@reduxjs/toolkit";
import { getActorDetails, getDirectorDetails } from "./getThunk";
import { getDirectorsByCountry } from "./getThunk3";

const initialState = {
    directorInfo: null,
    actorInfo: null,
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
            .addCase(getActorDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.actorInfo = null;  // 펜딩 상태에서 초기화
            })
            .addCase(getActorDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.actorInfo = action.payload.actorInfo;
                state.works = action.payload.actorInfo.works;
                state.directorInfo = null;  // 배우 정보를 불러올 때 감독 정보 초기화
            })
            .addCase(getActorDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // getDirectorDetails 처리
            .addCase(getDirectorDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.directorInfo = null;  // 펜딩 상태에서 초기화
            })
            .addCase(getDirectorDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.directorInfo = action.payload.directorInfo;
                state.works = action.payload.directorInfo.works;
                state.actorInfo = null;  // 감독 정보를 불러올 때 배우 정보 초기화
            })
            .addCase(getDirectorDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // getDirectorsByCountry 처리
            .addCase(getDirectorsByCountry.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDirectorsByCountry.fulfilled, (state, action) => {
                state.loading = false;
                // 첫 페이지면 새로운 데이터로 대체, 아니면 기존 데이터에 추가
                state.filteredDirectors =
                    action.payload.currentPage === 1
                        ? action.payload.filteredDirectors
                        : [...state.filteredDirectors, ...action.payload.filteredDirectors];
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
