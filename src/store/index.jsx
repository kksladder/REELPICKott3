import { configureStore } from "@reduxjs/toolkit";
import authR from "./modules/authSlice";
import movieR from "./modules/movieSlice";
import searchR from "./modules/searchSlice";
import similarR from "./modules/similarSlice";
import directorR from "./modules/directorSlice";
import dramaR from "./modules/dramaSlice";
import movieR1 from "./modules/movieSlice2";
import watchingHistoryR from "./modules/watchingHistorySlice";
import favoritesR from "./modules/favoritesSlice";

export const store = configureStore({
    reducer: {
        authR,
        movieR,
        searchR,
        similarR,
        dramaR,
        movieR1,
        directorR,
        watchingHistoryR,
        favoritesR,
    },
});
