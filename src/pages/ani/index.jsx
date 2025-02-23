import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { tmdbApi } from "../../store/modules/tmdbApi";
import {
    MoviePageContainer,
    MovieGrid,
    MovieCard,
    PosterImage,
    PageHeader,
    PageTitle,
    LoadingSpinner,
    ScrollTopButton,
} from "./style";
import { useDispatch } from "react-redux";
import { addToHistory } from "../../store/modules/watchingHistorySlice";

const AniPage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEnd, setIsEnd] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAnimeClick = (anime, event) => {
        event.preventDefault();
        dispatch(
            addToHistory({
                ...anime,
                type: "animation", // 애니메이션 타입 명시
            })
        );

        // 상세 페이지로 이동 (ID와 함께 미디어 타입 전달)
        navigate(`/serve/${anime.id}?type=animation`);
    };

    // 최대 1000개의 포스터를 위해 최대 50페이지까지 로드
    const MAX_PAGES = 50;

    // 데이터 가져오기
    const fetchAnime = async (page) => {
        try {
            setLoading(true);
            const response = await tmdbApi.get("/discover/movie", {
                params: {
                    language: "ko-KR",
                    page: page,
                    with_genres: "16", // 애니메이션 장르
                    include_adult: true, // 성인 콘텐츠 포함
                    with_original_language: "ja", // 일본어 원작
                    "vote_count.gte": 5, // 최소 평점 수
                    sort_by: "popularity.desc",
                    "primary_release_date.gte": "1980-01-01",
                    "primary_release_date.lte": "2025-12-31",
                },
            });

            if (!response.data.results || response.data.results.length === 0 || page > MAX_PAGES) {
                setIsEnd(true);
            } else {
                const processedData = response.data.results.map((anime) => ({
                    id: anime.id,
                    title: anime.title,
                    poster: anime.poster_path ? `https://image.tmdb.org/t/p/w500${anime.poster_path}` : null,
                    releaseDate: anime.release_date,
                    rating: anime.vote_average,
                    adult: anime.adult,
                }));

                setAnimeList((prevList) => {
                    const uniqueAnime = Array.from(
                        new Map([...prevList, ...processedData].map((anime) => [anime.id, anime])).values()
                    );
                    return uniqueAnime;
                });
            }
        } catch (err) {
            console.error("Error fetching anime:", err);
            setError(err.message || "애니메이션을 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    // 초기 데이터 로드
    useEffect(() => {
        setAnimeList([]); // 목록 초기화
        setCurrentPage(1);
        setIsEnd(false);
        fetchAnime(1);

        return () => {
            setAnimeList([]);
            setCurrentPage(1);
        };
    }, []);

    // 추가 데이터 로드
    useEffect(() => {
        if (currentPage > 1) {
            fetchAnime(currentPage);
        }
    }, [currentPage]);

    // 무한 스크롤
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && !isEnd) {
                    setCurrentPage((prev) => prev + 1);
                }
            },
            {
                rootMargin: "200px",
            }
        );

        const lastAnimeElement = document.querySelector(`#anime-${animeList.length - 1}`);
        if (lastAnimeElement) {
            observer.observe(lastAnimeElement);
        }

        return () => observer.disconnect();
    }, [animeList, loading, isEnd]);

    // 스크롤 버튼 표시 관리
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.pageYOffset > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (error) {
        return <div className="text-center p-4 text-red-500">오류가 발생했습니다: {error}</div>;
    }

    return (
        <MoviePageContainer>
            <PageHeader>
                <PageTitle>일본 애니메이션 </PageTitle>
            </PageHeader>

            <MovieGrid>
                {animeList.map((anime, index) => (
                    <MovieCard key={`${anime.id}-${index}`} id={`anime-${index}`}>
                        <Link to={`/serve/${anime.id}?type=animation`} onClick={(e) => handleAnimeClick(anime, e)}>
                            <div className="relative">
                                <PosterImage src={anime.poster || "/images/no-poster.png"} loading="lazy" />
                            </div>
                        </Link>
                    </MovieCard>
                ))}
            </MovieGrid>

            {loading && <LoadingSpinner />}

            {!loading && isEnd && animeList.length > 0 && (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    더 이상 표시할 애니메이션이 없습니다. (총 {animeList.length}개)
                </div>
            )}

            <ScrollTopButton onClick={scrollToTop} visible={showScrollButton}>
                <FaArrowUp size={30} />
            </ScrollTopButton>
        </MoviePageContainer>
    );
};

export default AniPage;
