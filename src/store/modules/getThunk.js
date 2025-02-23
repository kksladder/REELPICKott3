// store/modules/getThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    api_key: "7269aebff8b7461ac95532129bb7d8db",
    language: "ko-KR",
};


export const getDirectorDetails = createAsyncThunk("director/getDirectorDetails", async (directorId) => {
    try {
        const directorResponse = await axios.get(`https://api.themoviedb.org/3/person/${directorId}`, {
            params: {
                ...options,
                append_to_response: "movie_credits,tv_credits",
            },
        });

        const { data } = directorResponse;

        // 영화와 TV 작품 모두에 media_type 추가
        const movieWorks = data.movie_credits.crew
            .filter(credit => credit.job === "Director")
            .map(work => ({ ...work, media_type: "movie" }));

        const tvWorks = data.tv_credits.crew
            .filter(credit => credit.job === "Director")
            .map(work => ({ ...work, media_type: "tv" }));

        const works = [...movieWorks, ...tvWorks].sort((a, b) =>
            new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date)
        );

        return {
            directorInfo: {
                ...data,
                works,
            },
        };
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
});

/// 배우 상세 정보 가져오기
export const getActorDetails = createAsyncThunk("actor/getActorDetails", async (actorId) => {
    try {
        const actorResponse = await axios.get(`https://api.themoviedb.org/3/person/${actorId}`, {
            params: {
                ...options,
                append_to_response: "movie_credits,tv_credits",
            },
        });

        // media_type 추가하여 작품 목록 정리
        const movieWorks = (actorResponse.data.movie_credits?.cast || [])
            .map(work => ({ ...work, media_type: "movie" }));

        const tvWorks = (actorResponse.data.tv_credits?.cast || [])
            .map(work => ({ ...work, media_type: "tv" }));

        const works = [...movieWorks, ...tvWorks].sort((a, b) =>
            new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date)
        );

        return {
            actorInfo: {
                ...actorResponse.data,
                works,
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
export const getMovieDetails = createAsyncThunk(
    "movie/getMovieDetails",
    async ({ id, mediaType }, { rejectWithValue }) => {
        try {
            // id에서 숫자 부분 추출
            const originalId = id.split('_')[1] || id;

            let response;
            if (mediaType === 'tv') {
                response = await axios.get(`https://api.themoviedb.org/3/tv/${originalId}`, {
                    params: {
                        ...options,
                        append_to_response: "credits,similar,videos,content_ratings,release_dates",
                        language: "ko-KR"
                    },
                });
            } else if (mediaType === 'movie') {
                response = await axios.get(`https://api.themoviedb.org/3/movie/${originalId}`, {
                    params: {
                        ...options,
                        append_to_response: "credits,similar,belongs_to_collection,videos,release_dates",
                        language: "ko-KR"
                    },
                });
            } else if (mediaType === 'animation') {
                // 애니메이션의 경우 영화로 처리
                response = await axios.get(`https://api.themoviedb.org/3/movie/${originalId}`, {
                    params: {
                        ...options,
                        append_to_response: "credits,similar,videos,release_dates",
                        language: "ko-KR"
                    },
                });
            } else {
                throw new Error("Invalid media type");
            }

            const { data } = response;

            // 트레일러 선택 로직
            const videos = data.videos?.results || [];
            const trailer =
                videos.find((video) => video.type === "Trailer" && video.site === "YouTube" && video.iso_639_1 === "ko") ||
                videos.find((video) => video.type === "Trailer" && video.site === "YouTube") ||
                videos[0];

            // 미디어 타입에 따른 인증 정보 처리
            let certification;
            if (mediaType === 'tv') {
                const contentRatings = await axios.get(`https://api.themoviedb.org/3/tv/${originalId}/content_ratings`, {
                    params: options,
                });
                const ratings = contentRatings.data.results || [];
                const krRating = ratings.find(r => r.iso_3166_1 === "KR");
                certification = krRating?.rating || "NR";
            } else {
                const releaseDates = await axios.get(`https://api.themoviedb.org/3/movie/${originalId}/release_dates`, {
                    params: options,
                });
                const releases = releaseDates.data.results || [];
                const krRelease = releases.find(r => r.iso_3166_1 === "KR");
                certification = krRelease?.release_dates[0]?.certification || "NR";
            }

            return {
                ...data,
                media_type: mediaType,
                director: data.credits.crew.find((person) => person.job === "Director"),
                cast: data.credits.cast,
                seriesMovies: data.belongs_to_collection
                    ? (await axios.get(
                        `https://api.themoviedb.org/3/collection/${data.belongs_to_collection.id}`,
                        { params: options }
                    )).data.parts.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
                    : [],
                trailer,
                certification,
            };
        } catch (error) {
            console.error("API Error:", error);
            return rejectWithValue(error.message);
        }
    }
);
