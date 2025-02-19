import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk for fetching search results
export const fetchSearchResults = createAsyncThunk("search/fetchSearchResults", async (query, { rejectWithValue }) => {
    try {
        // Simulate an API call - replace with actual API call
        return [
            { id: 1, title: `${query} 검색 결과 1`, content: "검색 내용 1" },
            { id: 2, title: `${query} 검색 결과 2`, content: "검색 내용 2" },
        ];
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const initialState = {
    results: [],
    loading: "idle",
    error: null,
    recentSearches: [],
    popularSearches: [
        { id: 1, text: "넷플릭스" },
        { id: 2, text: "디즈니+" },
        { id: 3, text: "웨이브" },
        { id: 4, text: "쿠팡플레이" },
        { id: 5, text: "애플TV+" },
    ],
};

const loadFromLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error loading from localStorage", error);
        return [];
    }
};

const saveToLocalStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
};

const searchSlice = createSlice({
    name: "search",
    initialState: {
        ...initialState,
        recentSearches: loadFromLocalStorage("recentSearches"),
    },
    reducers: {
        addRecentSearch: (state, action) => {
            const exists = state.recentSearches.find((item) => item.text === action.payload);
            if (!exists) {
                const newSearch = { id: Date.now(), text: action.payload };
                state.recentSearches = [newSearch, ...state.recentSearches].slice(0, 5);
                saveToLocalStorage("recentSearches", state.recentSearches);
            }
        },
        removeRecentSearch: (state, action) => {
            state.recentSearches = state.recentSearches.filter((item) => item.id !== action.payload);
            saveToLocalStorage("recentSearches", state.recentSearches);
        },
        clearAllRecentSearches: (state) => {
            state.recentSearches = [];
            localStorage.removeItem("recentSearches");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.loading = "idle";
                state.results = action.payload;
                state.error = null;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.loading = "idle";
                state.error = action.payload;
                state.results = [];
            });
    },
});

export const { addRecentSearch, removeRecentSearch, clearAllRecentSearches } = searchSlice.actions;
export default searchSlice.reducer;
