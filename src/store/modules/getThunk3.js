import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getDirectorsByCountry = createAsyncThunk(
    "director/getDirectorsByCountry",
    async ({ page = 1 }, { getState }) => {
        try {
            const state = getState();
            const directorState = state.directorR;

            // 인기 영화 먼저 불러오기
            const moviesResponse = await axios.get("https://api.themoviedb.org/3/movie/popular", {
                params: {
                    api_key: API_KEY,
                    page,
                    language: "ko-KR",
                },
            });

            // 각 영화의 감독 정보 불러오기
            const directorsPromises = moviesResponse.data.results.map(async (movie) => {
                try {
                    const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, {
                        params: {
                            api_key: API_KEY,
                        },
                    });

                    // 감독 필터링
                    return creditsResponse.data.crew
                        .filter((member) => member.job === "Director" && member.profile_path)
                        .map((director) => ({
                            ...director,
                            known_for: [{ title: movie.title }],
                        }));
                } catch (error) {
                    console.error(`Error fetching credits for movie ${movie.id}:`, error);
                    return [];
                }
            });

            // 모든 영화의 감독 정보 병합
            const directors = (await Promise.all(directorsPromises)).flat();

            // 중복 제거
            const uniqueDirectors = Array.from(new Map(directors.map((d) => [d.id, d])).values());

            return {
                filteredDirectors: uniqueDirectors,
                hasMore: page < moviesResponse.data.total_pages,
                currentPage: page,
            };
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }
);
