import { configureStore } from "@reduxjs/toolkit";
import authR from "./modules/authSlice";
import movieR from "./modules/movieSlice2";
import searchR from "./modules/searchSlice";
import similarR from "./modules/similarSlice";
import aniR from "./modules/aniSlice";
import dramaR from "./modules/dramaSlice";

export const store = configureStore({
    reducer: {
        authR,
        movieR,
        searchR,
        similarR,
        aniR,
        dramaR,
    },
});
