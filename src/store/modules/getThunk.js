// store/modules/getThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    api_key: "7269aebff8b7461ac95532129bb7d8db",
    language: "ko-KR",
};

// 감독 상세 정보 가져오기
export const getDirectorDetails = createAsyncThunk("director/getDirectorDetails", async (directorId) => {
    try {
        // 감독 상세 정보 가져오기
        const directorResponse = await axios.get(`https://api.themoviedb.org/3/person/${directorId}`, {
            params: {
                ...options,
                append_to_response: "movie_credits,tv_credits",
            },
        });

        // 작품 목록 정리 (영화와 TV 시리즈)
        const movies =
            directorResponse.data.movie_credits?.crew
                .filter((credit) => credit.job === "Director")
                .sort((a, b) => new Date(b.release_date) - new Date(a.release_date)) || [];

        const tvShows =
            directorResponse.data.tv_credits?.crew
                .filter((credit) => credit.job === "Director")
                .sort((a, b) => new Date(b.first_air_date) - new Date(a.first_air_date)) || [];

        // 감독 정보와 작품 목록 합치기
        return {
            directorInfo: {
                ...directorResponse.data,
                works: [...movies, ...tvShows].sort(
                    (a, b) =>
                        new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date)
                ),
            },
        };
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
});

// 모든 컨텐츠 가져오기
export const getMovie = createAsyncThunk("movie/getMovie", async ({ page = 1 }, { getState }) => {
    try {
        const { movieR } = getState();
        const existingMovies = movieR.movieData || [];

        // 영화 가져오기
        const moviesResponse = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
            params: {
                ...options,
                page,
            },
        });

        // TV 시리즈 가져오기
        const tvResponse = await axios.get("https://api.themoviedb.org/3/discover/tv", {
            params: {
                ...options,
                with_genres: 18,
                sort_by: "popularity.desc",
                page,
            },
        });

        // 애니메이션 가져오기
        const animationResponse = await axios.get("https://api.themoviedb.org/3/discover/movie", {
            params: {
                ...options,
                with_genres: 16,
                sort_by: "popularity.desc",
                page,
            },
        });

        // 각 미디어 타입별로 고유 ID를 생성하여 매핑
        const movies = moviesResponse.data.results.map((item) => ({
            ...item,
            media_type: "movie",
            id: `movie_${item.id}`,
        }));

        const tvShows = tvResponse.data.results.map((item) => ({
            ...item,
            media_type: "tv",
            title: item.name,
            release_date: item.first_air_date,
            id: `tv_${item.id}`,
        }));

        const animations = animationResponse.data.results.map((item) => ({
            ...item,
            media_type: "animation",
            id: `animation_${item.id}`,
        }));

        // 새로운 데이터와 기존 데이터 합치기
        const newData = [...movies, ...tvShows, ...animations];
        const combinedData = page === 1 ? newData : [...existingMovies, ...newData];

        // 중복 제거
        const uniqueData = Array.from(new Set(combinedData.map((item) => item.id))).map((id) =>
            combinedData.find((item) => item.id === id)
        );

        // 더 불러올 데이터가 있는지 확인
        const hasMore =
            page < moviesResponse.data.total_pages ||
            page < tvResponse.data.total_pages ||
            page < animationResponse.data.total_pages;

        return {
            data: uniqueData,
            hasMore,
            currentPage: page,
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
});

// 상세 정보 가져오기
export const getMovieDetails = createAsyncThunk("movie/getMovieDetails", async (params) => {
    const originalId = params.id.split("_")[1] || params.id;
    const { mediaType } = params;

    try {
        let url =
            mediaType === "tv"
                ? `https://api.themoviedb.org/3/tv/${originalId}`
                : `https://api.themoviedb.org/3/movie/${originalId}`;

        const response = await axios.get(url, {
            params: {
                ...options,
                append_to_response: "credits,similar,belongs_to_collection,videos",
            },
        });

        // 비디오 정보 찾기 (한국어 트레일러 우선, 없으면 영어 트레일러)
        const videos = response.data.videos?.results || [];
        const trailer =
            videos.find((video) => video.type === "Trailer" && video.site === "YouTube" && video.iso_639_1 === "ko") ||
            videos.find((video) => video.type === "Trailer" && video.site === "YouTube") ||
            videos[0];

        if (mediaType === "tv") {
            const seasonNumber = params.season || 1;
            const seasonResponse = await axios.get(
                `https://api.themoviedb.org/3/tv/${originalId}/season/${seasonNumber}`,
                { params: options }
            );

            return {
                ...response.data,
                title: response.data.name,
                release_date: response.data.first_air_date,
                runtime: response.data.episode_run_time?.[0],
                media_type: "tv",
                episodes: seasonResponse.data.episodes || [],
                director: response.data.credits.crew.find((person) => person.job === "Director"),
                cast: response.data.credits.cast,
                seriesMovies: [],
                trailer,
            };
        }

        return {
            ...response.data,
            media_type: mediaType,
            director: response.data.credits.crew.find((person) => person.job === "Director"),
            cast: response.data.credits.cast,
            seriesMovies: response.data.belongs_to_collection
                ? (
                      await axios.get(
                          `https://api.themoviedb.org/3/collection/${response.data.belongs_to_collection.id}`,
                          { params: options }
                      )
                  ).data.parts.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
                : [],
            trailer,
        };
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
});
