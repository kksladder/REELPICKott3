// store/modules/getThunk3.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    api_key: "7269aebff8b7461ac95532129bb7d8db",
    language: "ko-KR",
};

export const getDirectorsByCountry = createAsyncThunk(
    "director/getDirectorsByCountry",
    async ({ page = 1 }, { getState }) => {
        try {
            const { director } = getState();
            const existingDirectors = director.filteredDirectors || [];

            // 인기 감독 목록 가져오기
            const response = await axios.get("https://api.themoviedb.org/3/person/popular", {
                params: {
                    ...options,
                    page,
                },
            });

            // 감독 필터링 (directing 직무만)
            let directors = response.data.results.filter((person) => person.known_for_department === "Directing");

            // 국가별 필터링
            if (director.selectedCountry !== "all") {
                directors = directors.filter((director) => {
                    const birthPlace = director.place_of_birth?.toLowerCase() || "";
                    switch (director.selectedCountry) {
                        case "KR":
                            return birthPlace.includes("korea") || birthPlace.includes("한국");
                        case "US":
                            return birthPlace.includes("usa") || birthPlace.includes("united states");
                        case "JP":
                            return birthPlace.includes("japan") || birthPlace.includes("일본");
                        default:
                            return true;
                    }
                });
            }

            // 새로운 데이터와 기존 데이터 합치기
            const combinedData = page === 1 ? directors : [...existingDirectors, ...directors];

            // 중복 제거
            const uniqueData = Array.from(new Set(combinedData.map((item) => item.id))).map((id) =>
                combinedData.find((item) => item.id === id)
            );

            return {
                filteredDirectors: uniqueData,
                hasMore: page < response.data.total_pages,
                currentPage: page,
            };
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }
);
