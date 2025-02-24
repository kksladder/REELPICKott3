import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const COUNTRY_PRIORITY = {
    KR: 1,
    JP: 2,
    US: 3,
    GB: 4,
};

export const getDirectorsByCountry = createAsyncThunk(
    "director/getDirectorsByCountry",
    async ({ page = 1, selectedCountry = "ALL" }, { rejectWithValue }) => {
        try {
            // 인기 영화 목록 가져오기
            const moviesResponse = await axios.get(`${BASE_URL}/movie/popular`, {
                params: {
                    api_key: API_KEY,
                    page,
                    language: "ko-KR",
                },
            });

            // 감독 정보를 저장할 Set (중복 제거용)
            const processedDirectorIds = new Set();
            const directors = [];

            for (const movie of moviesResponse.data.results) {
                try {
                    const creditsResponse = await axios.get(`${BASE_URL}/movie/${movie.id}/credits`, {
                        params: { api_key: API_KEY },
                    });

                    const movieDirectors = creditsResponse.data.crew.filter(
                        (member) =>
                            member.job === "Director" && member.profile_path && !processedDirectorIds.has(member.id)
                    );

                    for (const director of movieDirectors) {
                        if (processedDirectorIds.has(director.id)) continue;

                        const directorDetails = await axios.get(`${BASE_URL}/person/${director.id}`, {
                            params: {
                                api_key: API_KEY,
                                language: "ko-KR",
                                append_to_response: "movie_credits",
                            },
                        });

                        const place_of_birth = directorDetails.data.place_of_birth || "Unknown";
                        const countryCode = place_of_birth.includes("Korea")
                            ? "KR"
                            : place_of_birth.includes("Japan")
                            ? "JP"
                            : place_of_birth.includes("United States")
                            ? "US"
                            : place_of_birth.includes("United Kingdom")
                            ? "GB"
                            : "OTHER";

                        // 감독이 연출한 영화 중 가장 인기 있는 2개 선택
                        const known_for = directorDetails.data.movie_credits.crew
                            .filter((credit) => credit.job === "Director" && credit.poster_path)
                            .sort((a, b) => b.popularity - a.popularity)
                            .slice(0, 2)
                            .map((movie) => ({
                                title: movie.title,
                                id: movie.id,
                                poster_path: movie.poster_path,
                                release_date: movie.release_date,
                                overview: movie.overview,
                                vote_average: movie.vote_average,
                            }));

                        directors.push({
                            ...director,
                            place_of_birth,
                            biography: directorDetails.data.biography,
                            countryCode,
                            countryPriority: COUNTRY_PRIORITY[countryCode] || 999,
                            known_for,
                        });

                        processedDirectorIds.add(director.id);
                    }
                } catch (error) {
                    console.error(`Error fetching data for movie ${movie.id}:`, error);
                }
            }

            // 국가별 필터링
            let filteredDirectors = directors;
            if (selectedCountry !== "ALL") {
                filteredDirectors = directors.filter((director) => director.countryCode === selectedCountry);
            }

            // 우선순위 및 인기도에 따라 정렬
            const sortedDirectors = filteredDirectors.sort((a, b) => {
                if (a.countryPriority !== b.countryPriority) {
                    return a.countryPriority - b.countryPriority;
                }
                return b.popularity - a.popularity;
            });

            return {
                filteredDirectors: sortedDirectors,
                hasMore: page < moviesResponse.data.total_pages,
                currentPage: page,
            };
        } catch (error) {
            console.error("API Error:", error);
            return rejectWithValue(error.response?.data || "API 요청 중 오류가 발생했습니다.");
        }
    }
);
