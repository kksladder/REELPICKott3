import axios from "axios";

// 장르 상수 정의 (TMDB 기준 장르 코드)
const GENRES = {
    DRAMA: 18,
    COMEDY: 35,
    ANIMATION: 16,
    KIDS: 10762,
    FAMILY: 10751,
};

// API 설정
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// 카테고리 설정
const CATEGORY_CONFIG = {
    movieKR: {
        type: "movie",
        endpoint: "discover/movie",
        params: {
            include_adult: false,
            include_video: false,
            sort_by: "popularity.desc",
            "vote_average.gte": 7.0,
            "vote_count.gte": 100,
            with_original_language: "ko",
            region: "KR",
            "primary_release_date.gte": "1800-01-01",
            "primary_release_date.lte": "2025-12-31",
        },
    },
    movieUS: {
        type: "movie",
        endpoint: "discover/movie",
        params: {
            include_adult: false,
            include_video: false,
            sort_by: "popularity.desc",
            "vote_average.gte": 7.0,
            "vote_count.gte": 100,
            with_original_language: "en",
            region: "US",
            "primary_release_date.gte": "1800-01-01",
            "primary_release_date.lte": "2025-12-31",
        },
    },
    movieJP: {
        type: "movie",
        endpoint: "discover/movie",
        params: {
            include_adult: false,
            include_video: false,
            sort_by: "popularity.desc",
            "vote_average.gte": 7.0,
            "vote_count.gte": 50,
            with_original_language: "ja",
            region: "JP",
            "primary_release_date.gte": "1800-01-01",
            "primary_release_date.lte": "2025-12-31",
        },
    },

    dramaKR: {
        type: "tv",
        endpoint: "discover/tv",
        params: {
            with_genres: GENRES.DRAMA,
            sort_by: "popularity.desc",
            "vote_average.gte": 7.0,
            "vote_count.gte": 50,
            with_original_language: "ko",
            origin_country: "KR",
            "first_air_date.gte": "2000-01-01",
            without_genres: GENRES.ANIMATION, // 애니메이션 제외
        },
    },
    dramaUS: {
        type: "tv",
        endpoint: "discover/tv",
        params: {
            with_genres: GENRES.DRAMA,
            sort_by: "popularity.desc",
            "vote_average.gte": 7.0,
            "vote_count.gte": 100,
            with_original_language: "en",
            origin_country: "US",
            "first_air_date.gte": "2000-01-01",
            without_genres: GENRES.ANIMATION,
        },
    },
    dramaGB: {
        type: "tv",
        endpoint: "discover/tv",
        params: {
            with_genres: GENRES.DRAMA,
            sort_by: "popularity.desc",
            "vote_average.gte": 7.0,
            "vote_count.gte": 50,
            with_original_language: "en",
            origin_country: "GB",
            "first_air_date.gte": "2000-01-01",
            without_genres: GENRES.ANIMATION,
        },
    },
    japanAnimation: {
        type: "movie",
        endpoint: "discover/movie",
        params: {
            with_genres: GENRES.ANIMATION,
            include_adult: true, // 성인 콘텐츠 포함
            "vote_count.gte": 5, // 최소 평점 수 낮춤
            with_original_language: "ja", // 일본어 원어
            region: "JP",
            sort_by: "popularity.desc", // 인기도순 정렬
            "primary_release_date.gte": "1980-01-01",
            "primary_release_date.lte": "2025-12-31",
        },
    },
};

// API 인스턴스 생성 - API_KEY를 params에 포함하는 방식으로 변경
export const tmdbApi = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
    headers: {
        "Content-Type": "application/json",
    },
});

// 영화 데이터 가공 함수
export const processMovieData = (movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
    releaseDate: movie.release_date || movie.first_air_date,
    rating: movie.vote_average,
    overview: movie.overview,
    popularity: movie.popularity,
});

/**
 * 한글과 영어/숫자 사이에 공백을 추가하는 함수
 * @param {string} query - 검색어
 * @returns {string} - 공백이 추가된 검색어
 */
const addSpaceToKorean = (query) => {
    return query
        .replace(/([가-힣]+)([A-Za-z0-9]+)/g, "$1 $2")
        .replace(/([A-Za-z0-9]+)([가-힣]+)/g, "$1 $2")
        .replace(/([가-힣])([가-힣]{2,})/g, "$1 $2");
};

/**
 * 카테고리별 콘텐츠를 가져오는 함수
 * @param {string} category - 카테고리 (movie, drama, comedy, animation, kids)
 * @param {number} page - 페이지 번호 (기본값: 1)
 * @param {string} language - 언어 설정 (기본값: 'ko-KR')
 * @returns {Promise<Object>} - 필터링된 콘텐츠 데이터
 */
export const getContentByCategory = async (category, page = 1, language = "ko-KR") => {
    const categoryConfig = CATEGORY_CONFIG[category];

    if (!categoryConfig) {
        throw new Error("유효하지 않은 카테고리입니다.");
    }

    try {
        const response = await tmdbApi.get(categoryConfig.endpoint, {
            params: {
                ...categoryConfig.params,
                language,
                page,
            },
        });

        const processFunction = categoryConfig.type === "movie" ? processMovieData : processMovieData;

        return {
            data: response.data.results.map(processFunction),
            totalPages: response.data.total_pages,
            currentPage: response.data.page,
        };
    } catch (error) {
        console.error(`Error fetching ${category} content:`, error);
        throw new Error(`${category} 콘텐츠를 불러오는데 실패했습니다.`);
    }
};

/**
 * 인기 영화 추천 데이터를 가져오는 함수
 * @param {number} totalPages - 가져올 페이지 수 (기본값: 10)
 * @param {string} language - 언어 설정 (기본값: 'ko-KR')
 * @param {string} sortBy - 정렬 기준 (기본값: 'popularity')
 * @param {number} startPage - 시작 페이지 (기본값: 1)
 * @returns {Promise<Array>} - 가공된 영화 데이터 배열
 */
export const getMovieRecommendations = async (
    totalPages = 10,
    language = "ko-KR",
    sortBy = "popularity",
    startPage = 1
) => {
    try {
        const requests = Array.from({ length: totalPages }, (_, i) =>
            tmdbApi.get("/movie/popular", {
                params: {
                    language,
                    page: startPage + i,
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
 * 영화 검색 결과를 가져오는 함수 (한글 검색 최적화 적용)
 * @param {string} query - 검색어
 * @param {string} language - 언어 설정 (기본값: 'ko-KR')
 * @param {number} page - 페이지 번호 (기본값: 1)
 * @returns {Promise<Object>} - 가공된 영화 검색 결과 객체
 */
export const searchMovies = async (query, language = "ko-KR", page = 1) => {
    if (!query.trim()) return { data: [], totalPages: 0, currentPage: page };

    try {
        // 영화 검색
        let movieResponse = await tmdbApi.get("/search/movie", {
            params: {
                query,
                language,
                page,
                include_adult: false,
            },
        });

        // TV 프로그램 검색
        let tvResponse = await tmdbApi.get("/search/tv", {
            params: {
                query,
                language,
                page,
                include_adult: false,
            },
        });

        // 한글 검색어 최적화
        if (movieResponse.data.results.length === 0 && tvResponse.data.results.length === 0) {
            const modifiedQuery = addSpaceToKorean(query);

            if (modifiedQuery !== query) {
                movieResponse = await tmdbApi.get("/search/movie", {
                    params: {
                        query: modifiedQuery,
                        language,
                        page,
                        include_adult: false,
                    },
                });

                tvResponse = await tmdbApi.get("/search/tv", {
                    params: {
                        query: modifiedQuery,
                        language,
                        page,
                        include_adult: false,
                    },
                });
            }
        }

        // 영화와 TV 프로그램 결과 합치기
        const combinedResults = [
            ...movieResponse.data.results.map(item => ({
                ...processMovieData(item),
                media_type: 'movie'
            })),
            ...tvResponse.data.results.map(item => ({
                ...processMovieData({
                    ...item,
                    title: item.name,
                    release_date: item.first_air_date
                }),
                media_type: 'tv'
            }))
        ];

        // 유사성 기준으로 정렬 (선택사항)
        const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);

        return {
            data: sortedResults,
            totalPages: Math.max(movieResponse.data.total_pages, tvResponse.data.total_pages),
            currentPage: page,
        };
    } catch (error) {
        console.error("Error searching content:", error);
        throw new Error("콘텐츠 검색에 실패했습니다.");
    }
};

/**
 * 통합 검색 결과를 가져오는 함수 (영화, TV 프로그램, 인물 포함)
 * @param {string} query - 검색어
 * @param {number} page - 페이지 번호 (기본값: 1)
 * @param {string} language - 언어 설정 (기본값: 'ko-KR')
 * @returns {Promise<Object>} - 통합 검색 결과 객체
 */
export const searchMultiContent = async (query, page = 1, language = "ko-KR") => {
    if (!query.trim()) return { data: [], totalPages: 0, currentPage: page };

    try {
        // 원본 쿼리로 먼저 검색
        let response = await tmdbApi.get("/search/multi", {
            params: {
                query,
                page,
                language,
                include_adult: false,
            },
        });

        let results = response.data.results.filter((item) => ["movie", "tv", "person"].includes(item.media_type));

        // 결과가 없으면 수정된 쿼리로 다시 검색
        if (results.length === 0) {
            const modifiedQuery = addSpaceToKorean(query);

            if (modifiedQuery !== query) {
                response = await tmdbApi.get("/search/multi", {
                    params: {
                        query: modifiedQuery,
                        page,
                        language,
                        include_adult: false,
                    },
                });

                results = response.data.results.filter((item) => ["movie", "tv", "person"].includes(item.media_type));
            }
        }

        // 인물 데이터 처리
        const processedResults = results.map((item) => {
            if (item.media_type === "person") {
                return {
                    ...item,
                    known_for: item.known_for?.filter(
                        (work) => work.media_type === "movie" || work.media_type === "tv"
                    ),
                };
            }
            return item.media_type === "movie" ? processMovieData(item) : item;
        });

        return {
            data: processedResults,
            totalPages: response.data.total_pages,
            currentPage: response.data.page,
        };
    } catch (error) {
        console.error("Error in multi search:", error);
        throw new Error("통합 검색에 실패했습니다.");
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
