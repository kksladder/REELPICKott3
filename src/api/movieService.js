import axios from "axios";

// API 설정
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// API 인스턴스 생성 - API_KEY를 params에 포함하는 방식으로 변경
const tmdbApi = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
    headers: {
        "Content-Type": "application/json",
    },
});

// 영화 데이터 가공 함수
const processMovieData = (movie) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null, // 추가: Reelpick 컴포넌트와 호환되도록
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    overview: movie.overview,
    popularity: movie.popularity,
});

/**
 * 인기 영화 추천 데이터를 가져오는 함수
 * @param {number} totalPages - 가져올 페이지 수 (기본값: 10)
 * @param {string} language - 언어 설정 (기본값: 'ko-KR')
 * @param {string} sortBy - 정렬 기준 (기본값: 'popularity')
 * @returns {Promise<Array>} - 가공된 영화 데이터 배열
 */
export const getMovieRecommendations = async (totalPages = 10, language = "ko-KR", sortBy = "popularity") => {
    try {
        const requests = Array.from({ length: totalPages }, (_, i) =>
            tmdbApi.get("/movie/popular", {
                params: {
                    language,
                    page: i + 1,
                },
            })
        );

        const responses = await Promise.all(requests);
        const allMovies = responses.flatMap((response) => response.data.results.map(processMovieData));

        // 정렬 기준에 따라 정렬
        if (sortBy === "popularity") {
            return allMovies.sort((a, b) => b.popularity - a.popularity);
        } else if (sortBy === "rating") {
            return allMovies.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "releaseDate") {
            return allMovies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        }

        return allMovies;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error("영화 데이터를 불러오는데 실패했습니다.");
    }
};

/**
 * 영화 검색 결과를 가져오는 함수
 * @param {string} query - 검색어
 * @param {string} language - 언어 설정 (기본값: 'ko-KR')
 * @returns {Promise<Array>} - 가공된 영화 검색 결과 배열
 */
export const searchMovies = async (query, language = "ko-KR") => {
    try {
        const response = await tmdbApi.get("/search/movie", {
            params: {
                query,
                language,
                include_adult: false,
            },
        });

        return response.data.results.map(processMovieData);
    } catch (error) {
        console.error("Error searching movies:", error);
        throw new Error("영화 검색에 실패했습니다.");
    }
};

/**
 * 영화 상세 정보를 가져오는 함수
 * @param {number} movieId - 영화 ID
 * @param {string} language - 언어 설정 (기본값: 'ko-KR')
 * @returns {Promise<Object>} - 영화 상세 정보 객체
 */
export const getMovieDetails = async (movieId, language = "ko-KR") => {
    try {
        const response = await tmdbApi.get(`/movie/${movieId}`, {
            params: {
                language,
                append_to_response: "credits,videos,similar",
            },
        });

        return {
            ...processMovieData(response.data),
            genres: response.data.genres,
            runtime: response.data.runtime,
            cast: response.data.credits?.cast?.slice(0, 10) || [],
            director: response.data.credits?.crew?.find((person) => person.job === "Director") || null,
            videos: response.data.videos?.results?.filter((video) => video.site === "YouTube") || [],
            similar: response.data.similar?.results?.map(processMovieData) || [],
        };
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw new Error("영화 상세 정보를 불러오는데 실패했습니다.");
    }
};
