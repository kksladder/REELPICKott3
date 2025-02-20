import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getMovieRecommendations, searchMovies, searchMultiContent, processMovieData, tmdbApi } from "./tmdbApi"; // 기존 API 함수 임포트

// 데이터 처리 함수

const processData = (item, mediaType) => {
    if (mediaType === "movie") {
        return processMovieData(item); // 기존 함수 재활용
    } else {
        // TV 시리즈(애니메이션, 드라마)
        return {
            id: item.id,
            title: item.name,
            poster_path: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
            poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
            releaseDate: item.first_air_date,
            rating: item.vote_average,
            overview: item.overview,
            popularity: item.popularity,
        };
    }
};

// 각 미디어 타입별 기본 설정
const mediaTypeSettings = {
    movie: {
        endpoint: "/movie/popular",
        discoverEndpoint: "/discover/movie",
        processor: (item) => processData(item, "movie"),
    },
    ani: {
        endpoint: "/discover/tv",
        discoverEndpoint: "/discover/tv",
        processor: (item) => processData(item, "tv"),
        defaultParams: { with_genres: "16" }, // 애니메이션 장르 ID
    },
    drama: {
        endpoint: "/discover/tv",
        discoverEndpoint: "/discover/tv",
        processor: (item) => processData(item, "tv"),
        defaultParams: { without_genres: "16" }, // 애니메이션 제외
    },
};

// 콘텐츠 가져오기 (기본 인기 콘텐츠)
export const getContent = createAsyncThunk("movis/getContent", async ({ mediaType, page = 1 }, { rejectWithValue }) => {
    try {
        // 기존 릴픽 추천 함수 호환성 유지
        if (mediaType === "movie" && page === 1) {
            // getMovieRecommendations를 사용해 릴픽 추천 기능 유지
            const recommendedMovies = await getMovieRecommendations();
            return {
                data: recommendedMovies,
                currentPage: 1,
                totalPages: 1,
            };
        }

        const settings = mediaTypeSettings[mediaType];
        if (!settings) {
            return rejectWithValue(`Unsupported media type: ${mediaType}`);
        }

        const response = await tmdbApi.get(settings.endpoint, {
            params: {
                language: "ko-KR",
                page,
                ...settings.defaultParams,
            },
        });

        return {
            data: response.data.results.map(settings.processor),
            currentPage: response.data.page,
            totalPages: response.data.total_pages,
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// 필터링된 콘텐츠 가져오기
export const getFilteredContent = createAsyncThunk(
    "content/getFilteredContent",
    async ({ mediaType, page = 1, filters }, { rejectWithValue }) => {
        try {
            const settings = mediaTypeSettings[mediaType];
            if (!settings) {
                return rejectWithValue(`Unsupported media type: ${mediaType}`);
            }

            // 필터 파라미터 구성
            const params = {
                language: "ko-KR",
                page,
                ...settings.defaultParams,
            };

            // 공통 필터 처리
            if (filters) {
                if (filters.sortBy) params.sort_by = filters.sortBy;
                if (filters.genres && filters.genres.length > 0) {
                    // 애니메이션의 경우 기본 장르(16)와 추가 장르 병합
                    if (mediaType === "ani") {
                        const otherGenres = filters.genres.filter((g) => g !== 16);
                        if (otherGenres.length > 0) {
                            params.with_genres = `16,${otherGenres.join(",")}`;
                        }
                    } else {
                        params.with_genres = filters.genres.join(",");
                    }
                }
                if (filters.country) params.with_origin_country = filters.country;

                // 미디어 타입별 특수 필터
                if (mediaType === "movie") {
                    if (filters.year) params.primary_release_year = filters.year;
                    if (filters.runtime) {
                        const [min, max] = filters.runtime.split("-");
                        if (min) params.with_runtime_gte = min;
                        if (max) params.with_runtime_lte = max;
                    }
                    if (filters.ratings) params.vote_average_gte = filters.ratings;
                } else if (mediaType === "drama") {
                    if (filters.status) params.with_status = filters.status;
                    if (filters.networks && filters.networks.length > 0) {
                        params.with_networks = filters.networks.join(",");
                    }
                    if (filters.seasons) params.with_seasons = filters.seasons;
                } else if (mediaType === "ani") {
                    if (filters.year) params.first_air_date_year = filters.year;
                    if (filters.ratings) params.vote_average_gte = filters.ratings;
                }
            }

            const response = await tmdbApi.get(settings.discoverEndpoint, { params });

            return {
                data: response.data.results.map(settings.processor),
                currentPage: response.data.page,
                totalPages: response.data.total_pages,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// 검색 함수 (기존 함수와 통합)
export const searchContent = createAsyncThunk(
    "content/searchContent",
    async ({ query, mediaType, page = 1 }, { rejectWithValue }) => {
        try {
            // 기존 검색 함수 재사용 (영화 검색)
            if (mediaType === "movie") {
                return await searchMovies(query, "ko-KR", page);
            }

            // 통합 검색 (애니메이션/드라마)
            const response = await searchMultiContent(query, page);

            if (mediaType === "ani") {
                // 애니메이션 필터링 (TV + 애니메이션 장르)
                const animeResults = response.data.filter(
                    (item) =>
                        item.media_type === "tv" &&
                        (item.genre_ids?.includes(16) || item.genres?.some((g) => g.id === 16))
                );

                return {
                    data: animeResults.map((item) => processData(item, "tv")),
                    totalPages: response.totalPages,
                    currentPage: response.currentPage,
                };
            } else if (mediaType === "drama") {
                // 드라마 필터링 (TV - 애니메이션 장르)
                const dramaResults = response.data.filter(
                    (item) =>
                        item.media_type === "tv" &&
                        !item.genre_ids?.includes(16) &&
                        !item.genres?.some((g) => g.id === 16)
                );

                return {
                    data: dramaResults.map((item) => processData(item, "tv")),
                    totalPages: response.totalPages,
                    currentPage: response.currentPage,
                };
            }

            // 전체 검색 결과 반환 (기본값)
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
