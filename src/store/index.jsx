import { configureStore } from '@reduxjs/toolkit';
import authR from './modules/authSlice';
import movieR from "./modules/movieSlice";

export const store = configureStore({
    reducer: {
        authR,
        movieR,
    },
});
