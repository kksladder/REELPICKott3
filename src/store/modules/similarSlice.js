// store/modules/similarSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    api_key: "7269aebff8b7461ac95532129bb7d8db",
    language: "ko-KR",
};

// 비슷한 컨텐츠 가져오기
export const getSimilarContent = createAsyncThunk(
    "similar/getSimilarContent",
    async (params) => {
        const { id, mediaType } = params;
        const originalId = id.split('_')[1] || id;

        try {
            let url = mediaType === 'tv'
                ? `https://api.themoviedb.org/3/tv/${originalId}/similar`
                : `https://api.themoviedb.org/3/movie/${originalId}/similar`;

            const response = await axios.get(url, { params: options });

            // 결과 매핑
            const similarContent = response.data.results.map(item => ({
                ...item,
                media_type: mediaType,
                id: `${mediaType}_${item.id}`,
                title: mediaType === 'tv' ? item.name : item.title,
                release_date: mediaType === 'tv' ? item.first_air_date : item.release_date
            }));

            return similarContent.slice(0, 8); // 8개 항목으로 제한
        } catch (error) {
            console.error("Similar Content API Error:", error);
            throw error;
        }
    }
);

// 초기 상태
const initialState = {
    similarContent: [],
    loading: false,
    error: null,
};

// Slice 생성
const similarSlice = createSlice({
    name: "similarR",
    initialState,
    reducers: {
        clearSimilarContent: (state) => {
            state.similarContent = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSimilarContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSimilarContent.fulfilled, (state, action) => {
                state.loading = false;
                state.similarContent = action.payload;
            })
            .addCase(getSimilarContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearSimilarContent } = similarSlice.actions;
export default similarSlice.reducer;
