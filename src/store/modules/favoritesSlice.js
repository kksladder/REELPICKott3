// favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteItems: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            // 아이템이 이미 찜 목록에 있으면 추가하지 않도록 방지
            if (!state.favoriteItems.some((item) => item.id === action.payload.id)) {
                state.favoriteItems.push(action.payload);
            }
        },
        removeFromFavorites: (state, action) => {
            state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
