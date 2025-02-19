import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    api_key: "7269aebff8b7461ac95532129bb7d8db",
    language: "ko-KR",
};

// 모든 컨텐츠 가져오기
export const getMovie = createAsyncThunk(
    "movie/getMovie",
    async ({ page = 1 }, { getState }) => {
        try {
            const { movieR } = getState();
            const existingMovies = movieR.movieData || [];

            // 영화 가져오기
            const moviesResponse = await axios.get(
                "https://api.themoviedb.org/3/movie/now_playing",
                {
                    params: {
                        ...options,
                        page
                    }
                }
            );

            // TV 시리즈 가져오기
            const tvResponse = await axios.get(
                "https://api.themoviedb.org/3/discover/tv",
                {
                    params: {
                        ...options,
                        with_genres: 18,
                        sort_by: 'popularity.desc',
                        page
                    }
                }
            );

            // 애니메이션 가져오기
            const animationResponse = await axios.get(
                "https://api.themoviedb.org/3/discover/movie",
                {
                    params: {
                        ...options,
                        with_genres: 16,
                        sort_by: 'popularity.desc',
                        page
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

            // 새로운 데이터와 기존 데이터 합치기
            const newData = [...movies, ...tvShows, ...animations];
            const combinedData = page === 1 ? newData : [...existingMovies, ...newData];

            // 중복 제거
            const uniqueData = Array.from(new Set(combinedData.map(item => item.id)))
                .map(id => combinedData.find(item => item.id === id));

            // 더 불러올 데이터가 있는지 확인
            const hasMore =
                page < moviesResponse.data.total_pages ||
                page < tvResponse.data.total_pages ||
                page < animationResponse.data.total_pages;

            return {
                data: uniqueData,
                hasMore,
                currentPage: page
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

// 상세 정보 가져오기 (기존 코드 유지)
export const getMovieDetails = createAsyncThunk(
    "movie/getMovieDetails",
    async (params) => {
        const originalId = params.id.split('_')[1] || params.id;
        const { mediaType } = params;

        try {
            let url = mediaType === 'tv'
                ? `https://api.themoviedb.org/3/tv/${originalId}`
                : `https://api.themoviedb.org/3/movie/${originalId}`;

            const response = await axios.get(url, {
                params: {
                    ...options,
                    append_to_response: "credits,similar,belongs_to_collection"
                }
            });

            // 영화 시리즈인 경우 컬렉션 정보 가져오기
            let seriesMovies = [];
            if (mediaType !== 'tv' && response.data.belongs_to_collection) {
                const collectionResponse = await axios.get(
                    `https://api.themoviedb.org/3/collection/${response.data.belongs_to_collection.id}`,
                    { params: options }
                );
                seriesMovies = collectionResponse.data.parts.sort(
                    (a, b) => new Date(a.release_date) - new Date(b.release_date)
                );
            }

            const director = response.data.credits.crew.find(person => person.job === "Director");
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
                    cast,
                    seriesMovies: []
                };
            }

            return {
                ...response.data,
                media_type: mediaType,
                director,
                cast,
                seriesMovies
            };
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    });