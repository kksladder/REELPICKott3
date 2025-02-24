import { configureStore } from '@reduxjs/toolkit';

// 임시 리듀서 (나중에 실제 리듀서로 교체)
const tempReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: {
        temp: tempReducer, // 임시 리듀서 추가
    },
});
