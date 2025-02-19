import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
    headers: {
        "Content-Type": "application/json",
    },
});

export const getMovieRecommendations = async (totalPages = 10) => {
    try {
        const requests = Array.from({ length: totalPages }, (_, i) =>
            tmdbApi.get("/movie/popular", {
                params: {
                    language: "ko-KR",
                    page: i + 1,
                },
            })
        );

        const responses = await Promise.all(requests);

        const allMovies = responses.flatMap((response) =>
            response.data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                releaseDate: movie.release_date,
                rating: movie.vote_average,
                overview: movie.overview,
                popularity: movie.popularity,
            }))
        );

        // 인기도(popularity) 기준으로 정렬
        return allMovies.sort((a, b) => b.popularity - a.popularity);
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error("영화 데이터를 불러오는데 실패했습니다.");
    }
};
