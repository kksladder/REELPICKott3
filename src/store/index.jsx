import { configureStore } from "@reduxjs/toolkit";
import authR from "./modules/authSlice";
import movieR from "./modules/movieSlice";
import similarR from "./modules/similarSlice";

export const store = configureStore({
    reducer: {
        authR,
        movieR,
        similarR,
    },
});
