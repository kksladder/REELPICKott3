import { configureStore } from "@reduxjs/toolkit";
import authR from "./modules/authSlice";
import movieR from "./modules/movieSlice";
import searchR from "./modules/searchSlice";

export const store = configureStore({
    reducer: {
        authR,
        movieR,
        searchR,
    },
});
