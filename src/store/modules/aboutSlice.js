// src/store/modules/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        // 초기 상태
    },
    reducers: {
        // 리듀서 함수들
    },
});

export const aboutActions = aboutSlice.actions;
export default aboutSlice.reducer; // 이 줄이 없거나 다르게 되어있을 수 있습니다
