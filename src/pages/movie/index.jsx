import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { getContentByCategory } from "../../store/modules/tmdbApi";
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

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEnd, setIsEnd] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    // 최대 1000개의 포스터를 위해 최대 50페이지까지 로드 (각 페이지당 20개 기준)
    const MAX_PAGES = 50;

    useEffect(() => {
        const fetchKoreanMovies = async () => {
            try {
                setLoading(true);
                const response = await getContentByCategory("movie", currentPage);

                if (!response.data || response.data.length === 0 || currentPage > MAX_PAGES) {
                    setIsEnd(true);
                } else {
                    // 중복 제거를 위해 Set 사용
                    const uniqueMovies = Array.from(
                        new Map([...movies, ...response.data].map((movie) => [movie.id, movie])).values()
                    );

                    setMovies(uniqueMovies);
                }
            } catch (err) {
                console.error("Error fetching Korean movies:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (!isEnd) {
            fetchKoreanMovies();
        }
    }, [currentPage, isEnd]);

    useEffect(() => {
        // 무한 스크롤 설정
        const observerRef = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && !isEnd) {
                    // 다음 페이지 로드
                    setCurrentPage((prevPage) => prevPage + 1);
                }
            },
            {
                rootMargin: "200px", // 화면 아래 200px 지점에서 미리 로딩 시작
            }
        );

        const lastMovieElement = document.querySelector(`#movie-${movies.length - 1}`);
        if (lastMovieElement) {
            observerRef.observe(lastMovieElement);
        }

        return () => {
            observerRef.disconnect();
        };
    }, [movies, loading, isEnd]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (error) {
        return <div>오류가 발생했습니다: {error.message}</div>;
    }

    return (
        <MoviePageContainer>
            <PageHeader>
                <PageTitle>영화</PageTitle>
            </PageHeader>

            <MovieGrid>
                {movies.map((movie, index) => (
                    <MovieCard key={`${movie.id}-${index}`} id={`movie-${index}`}>
                        <Link to={`/movie/${movie.id}`}>
                            <PosterImage
                                src={movie.poster || "/images/no-poster.png"}
                                alt={movie.title}
                                loading="lazy"
                            />
                        </Link>
                    </MovieCard>
                ))}
            </MovieGrid>

            {loading && <LoadingSpinner />}

            {!loading && isEnd && (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    더 이상 표시할 한국 영화가 없습니다.
                </div>
            )}

            <ScrollTopButton onClick={scrollToTop} visible={showScrollButton}>
                <FaArrowUp size={30} />
            </ScrollTopButton>
        </MoviePageContainer>
    );
};

export default MoviePage;
