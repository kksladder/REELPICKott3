// store/modules/watchingHistorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const HISTORY_MAX_SIZE = 20; // 최대 저장할 시청 기록 수

const initialState = {
    history: [],
    loading: false,
    error: null,
};

const watchingHistorySlice = createSlice({
    name: "watchingHistory",
    initialState,
    reducers: {
        // 시청 기록 추가
        addToHistory: (state, action) => {
            const newEntry = {
                ...action.payload,
                watchedAt: new Date().toISOString(),
            };

            // 중복 제거
            state.history = [newEntry, ...state.history.filter((item) => item.id !== action.payload.id)].slice(
                0,
                HISTORY_MAX_SIZE
            ); // 최대 개수 제한

            // localStorage 동기화
            localStorage.setItem("watchingHistory", JSON.stringify(state.history));
        },

        // localStorage에서 시청 기록 로드
        loadHistory: (state) => {
            try {
                const savedHistory = JSON.parse(localStorage.getItem("watchingHistory") || "[]");
                console.log("Loaded history from localStorage:", savedHistory); // 이 부분 추가
                state.history = savedHistory;
            } catch (error) {
                state.error = "시청 기록을 불러오는데 실패했습니다.";
            }
        },

        // 특정 시청 기록 삭제
        removeFromHistory: (state, action) => {
            state.history = state.history.filter((item) => item.id !== action.payload);
            localStorage.setItem("watchingHistory", JSON.stringify(state.history));
        },

        // 모든 시청 기록 삭제
        clearHistory: (state) => {
            state.history = [];
            localStorage.removeItem("watchingHistory");
        },
    },
});

export const { addToHistory, loadHistory, removeFromHistory, clearHistory } = watchingHistorySlice.actions;

export default watchingHistorySlice.reducer;
