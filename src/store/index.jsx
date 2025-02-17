import { configureStore } from '@reduxjs/toolkit';
import authR from './modules/authSlice';
import movieR from "./modules/movieSlice";
import creditR from "./modules/creditsSlice";

export const store = configureStore({
    reducer: {
        authR,
        movieR,
        creditR,
    },
});
