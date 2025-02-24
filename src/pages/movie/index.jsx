import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { getContentByCategory } from "../../store/modules/tmdbApi";
import { addToHistory } from "../../store/modules/watchingHistorySlice";
import {
    MoviePageContainer,
    MovieGrid,
    MovieCard,
    PosterImage,
    PageHeader,
    PageTitle,
    LoadingSpinner,
    ScrollTopButton,
    TopIcon,
} from "./style";
import { useDispatch } from "react-redux";
import { GlassTopBtn } from "../../ui/icon/GlassCircle";

const MoviePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEnd, setIsEnd] = useState(false);
    // const [showScrollButton, setShowScrollButton] = useState(false);

    const [showTopIcon, setShowTopIcon] = useState(false);
    // 최대 1000개의 포스터를 위해 최대 50페이지까지 로드
    const MAX_PAGES = 50;

    const fetchMovies = async (page) => {
        try {
            setLoading(true);

            // 한국, 미국, 일본 영화 데이터를 동시에 가져오기
            const [krResponse, usResponse, jpResponse] = await Promise.all([
                getContentByCategory("movieKR", page),
                getContentByCategory("movieUS", page),
                getContentByCategory("movieJP", page),
            ]);

            // 각 국가의 데이터가 없거나 최대 페이지 도달 시 종료
            if (
                ((!krResponse.data || krResponse.data.length === 0) &&
                    (!usResponse.data || usResponse.data.length === 0) &&
                    (!jpResponse.data || jpResponse.data.length === 0)) ||
                page > MAX_PAGES
            ) {
                setIsEnd(true);
            } else {
                // 모든 영화 데이터 합치기
                const allMovies = [...(krResponse.data || []), ...(usResponse.data || []), ...(jpResponse.data || [])];

                // 인기도 기준으로 정렬
                const sortedMovies = allMovies.sort((a, b) => b.popularity - a.popularity);

                setMovies((prevMovies) => {
                    const uniqueMovies = Array.from(
                        new Map([...prevMovies, ...sortedMovies].map((movie) => [movie.id, movie])).values()
                    );
                    return uniqueMovies;
                });
            }
        } catch (err) {
            console.error("Error fetching movies:", err);
            setError(err.message || "영화를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    // 초기 데이터 로드
    useEffect(() => {
        setMovies([]); // 목록 초기화
        setCurrentPage(1);
        setIsEnd(false);
        fetchMovies(1);

        return () => {
            setMovies([]);
            setCurrentPage(1);
        };
    }, []);

    // 추가 데이터 로드
    useEffect(() => {
        if (currentPage > 1) {
            fetchMovies(currentPage);
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
            { rootMargin: "200px" }
        );

        const lastMovieElement = document.querySelector(`#movie-${movies.length - 1}`);
        if (lastMovieElement) {
            observer.observe(lastMovieElement);
        }

        return () => observer.disconnect();
    }, [movies, loading, isEnd]);

    // 스크롤 버튼
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.pageYOffset > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setShowTopIcon(true);
            } else {
                setShowTopIcon(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    if (error) {
        return <div>오류가 발생했습니다: {error}</div>;
    }

    const handleMovieClick = (movie, event) => {
        event.preventDefault();
        console.log("Adding movie to history:", movie);
        dispatch(
            addToHistory({
                ...movie,
                type: movie.media_type || "movie", // 컨텐츠 타입 구분
            })
        );
        navigate(`/serve/${movie.id}?type=${movie.media_type || "movie"} `);
    };
    return (
        <MoviePageContainer>
            <PageHeader>
                <PageTitle>영화</PageTitle>
            </PageHeader>

            <MovieGrid>
                {movies.map((movie, index) => (
                    <MovieCard key={`${movie.id}-${index}`} id={`movie-${index}`}>
                        <Link
                            to={`/serve/${movie.id}?type=${movie.media_type}`}
                            onClick={(e) => handleMovieClick(movie, e)}
                        >
                            <PosterImage src={movie.poster || "/image/profileNo.png"} loading="lazy" />
                        </Link>
                    </MovieCard>
                ))}
            </MovieGrid>

            {loading && <LoadingSpinner />}

            {!loading && isEnd && movies.length > 0 && (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    더 이상 표시할 영화가 없습니다.
                </div>
            )}

            <TopIcon>
                {showTopIcon && (
                    <div className="top-icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <GlassTopBtn />
                    </div>
                )}
            </TopIcon>
            {/* <ScrollTopButton onClick={scrollToTop} visible={showScrollButton}>
                <FaArrowUp size={30} />
                <GlassTopBtn/>
            </ScrollTopButton> */}
        </MoviePageContainer>
    );
};

export default MoviePage;
