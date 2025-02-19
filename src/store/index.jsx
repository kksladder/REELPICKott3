import { configureStore } from "@reduxjs/toolkit";
import authR from "./modules/authSlice";
import movieR from "./modules/movieSlice";
<<<<<<< HEAD
import searchR from "./modules/searchSlice";
=======
import similarR from "./modules/similarSlice";
>>>>>>> ec4ea5dee80279e04ca170ec6a862dd96da1ab30

export const store = configureStore({
    reducer: {
        authR,
        movieR,
<<<<<<< HEAD
        searchR,
=======
        similarR,
>>>>>>> ec4ea5dee80279e04ca170ec6a862dd96da1ab30
    },
});
