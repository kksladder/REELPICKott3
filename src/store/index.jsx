import { configureStore } from "@reduxjs/toolkit";
import authR from "./modules/authSlice";
import movieR from "./modules/movieSlice";
import searchR from "./modules/searchSlice";
import similarR from "./modules/similarSlice";
import dramaR from "./modules/dramaSlice";
import movieR1 from "./modules/movieSlice2";
import directiorR from "./modules/directorSlice";

export const store = configureStore({
    reducer: {
        authR,
        movieR,
        searchR,
        similarR,
        dramaR,
        movieR1,
        directiorR,
    },
});
