import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    api_key: "7269aebff8b7461ac95532129bb7d8db",
    language: "ko-KR",
};

// 모든 컨텐츠 가져오기
export const getMovie = createAsyncThunk(
    "movie/getMovie",
    async () => {
        try {
            // 영화 가져오기
            const moviesResponse = await axios.get(
                "https://api.themoviedb.org/3/movie/now_playing",
                { params: options }
            );

            // TV 시리즈 가져오기
            const tvResponse = await axios.get(
                "https://api.themoviedb.org/3/tv/on_the_air",
                { params: options }
            );

            // 애니메이션 가져오기
            const animationResponse = await axios.get(
                "https://api.themoviedb.org/3/discover/movie",
                {
                    params: {
                        ...options,
                        with_genres: 16,
                        sort_by: 'popularity.desc'
                    }
                }
            );

            // 각 미디어 타입별로 고유 ID를 생성하여 매핑
            const movies = moviesResponse.data.results.map(item => ({
                ...item,
                media_type: 'movie',
                id: `movie_${item.id}`
            }));

            const tvShows = tvResponse.data.results.map(item => ({
                ...item,
                media_type: 'tv',
                title: item.name,
                release_date: item.first_air_date,
                id: `tv_${item.id}`
            }));

            const animations = animationResponse.data.results.map(item => ({
                ...item,
                media_type: 'animation',
                id: `animation_${item.id}`
            }));

            // 데이터 합치기
            const combinedData = [...movies, ...tvShows, ...animations];

            // 중복 제거 (혹시 모를 중복을 방지)
            const uniqueData = Array.from(new Set(combinedData.map(item => item.id)))
                .map(id => combinedData.find(item => item.id === id));

            return uniqueData;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

// 상세 정보 가져오기
export const getMovieDetails = createAsyncThunk(
    "movie/getMovieDetails",
    async (params) => {
        // ID에서 실제 TMDB ID 추출
        const originalId = params.id.split('_')[1] || params.id;
        const { mediaType } = params;

        try {
            let url = mediaType === 'tv'
                ? `https://api.themoviedb.org/3/tv/${originalId}`
                : `https://api.themoviedb.org/3/movie/${originalId}`;

            const response = await axios.get(url, {
                params: {
                    ...options,
                    append_to_response: "credits,seasons"
                }
            });
            const director = response.data.credits.crew.find(person => person.job === "Director");

            // 배우 정보 가져오기
            const cast = response.data.credits.cast;

            if (mediaType === 'tv') {
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
                    media_type: 'tv',
                    episodes: seasonResponse.data.episodes || [],
                    director,
                    cast
                };
            }

            return {
                ...response.data,
                media_type: mediaType,
                director,
                cast
            };
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }
);