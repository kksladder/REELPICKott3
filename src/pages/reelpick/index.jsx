import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getContentByCategory } from "../../store/modules/tmdbApi";
import Modal from "../../components/modal/Modal";
import { IoClose } from "react-icons/io5";
import {
    ReelpickWrapper,
    ReelpickTitle,
    ButtonGroup,
    Button,
    MoviesGrid,
    MovieCard,
    CheckIcon,
    ScrollTopButton,
    CartWrapper,
    CartContainer,
    CartHeader,
    CartContent,
    CartItemsContainer,
    CartItem,
    CartItemImage,
    RemoveButton,
    EmptySlot,
    LoadingWrapper,
} from "./style";
import { FaCheck } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Reelpick = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showScroll, setShowScroll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMoreMovies, setHasMoreMovies] = useState(true);

    const maxItems = 10;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);

                // 한국, 미국, 일본 영화 데이터를 동시에 가져오기
                const [krResponse, usResponse, jpResponse] = await Promise.all([
                    getContentByCategory("movieKR", currentPage),
                    getContentByCategory("movieUS", currentPage),
                    getContentByCategory("movieJP", currentPage),
                ]);

                // 모든 영화 데이터 합치기
                const allMovies = [...(krResponse.data || []), ...(usResponse.data || []), ...(jpResponse.data || [])];

                // 인기도순 정렬
                const sortedMovies = allMovies.sort((a, b) => b.popularity - a.popularity);

                // API 응답 데이터를 컴포넌트에서 사용하는 형태로 변환
                const formattedMovies = sortedMovies.map((movie) => ({
                    id: movie.id,
                    title: movie.title,
                    poster: movie.poster_path,
                    isKorean: movie.title.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/) !== null,
                }));

                setMovies(formattedMovies);
            } catch (err) {
                setError(err.message);
                console.error("Failed to fetch movies:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
        setIsModalOpen(true);
    }, []);

    // 추가 영화 로드 함수
    const loadMoreMovies = async () => {
        if (loadingMore || !hasMoreMovies) return;

        try {
            setLoadingMore(true);
            const nextPage = currentPage + 1;

            // 추가 데이터 가져오기
            const [krResponse, usResponse, jpResponse] = await Promise.all([
                getContentByCategory("movieKR", nextPage),
                getContentByCategory("movieUS", nextPage),
                getContentByCategory("movieJP", nextPage),
            ]);

            const moreMovies = [
                ...(krResponse.data || []),
                ...(usResponse.data || []),
                ...(jpResponse.data || []),
            ].sort((a, b) => b.popularity - a.popularity);

            const formattedMoreMovies = moreMovies.map((movie) => ({
                id: movie.id,
                title: movie.title,
                poster: movie.poster_path,
                isKorean: movie.title.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/) !== null,
            }));

            // 중복 영화 필터링
            const existingIds = new Set(movies.map((movie) => movie.id));
            const uniqueNewMovies = formattedMoreMovies.filter((movie) => !existingIds.has(movie.id));

            if (uniqueNewMovies.length === 0) {
                setHasMoreMovies(false);
            } else {
                setMovies((prev) => [...prev, ...uniqueNewMovies]);
                setCurrentPage(nextPage);
            }
        } catch (err) {
            console.error("Failed to load more movies:", err);
        } finally {
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 300) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 300) {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, [showScroll]);

    // 무한 스크롤 구현
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                    document.documentElement.scrollHeight - 500 &&
                !isLoading &&
                !loadingMore &&
                hasMoreMovies
            ) {
                loadMoreMovies();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoading, loadingMore, hasMoreMovies, currentPage]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handlePosterSelect = () => {
        setIsModalOpen(false);
    };

    const toggleMovieSelection = useCallback((movieId) => {
        setSelectedMovies((prev) => {
            if (prev.includes(movieId)) {
                const newSelection = prev.filter((id) => id !== movieId);
                if (newSelection.length === 0) {
                    setShowCart(false);
                }
                return newSelection;
            } else {
                if (prev.length >= maxItems) {
                    alert("최대 10개까지만 선택할 수 있습니다.");
                    return prev;
                }
                setShowCart(true);
                return [...prev, movieId];
            }
        });
    }, []);

    const handleCancelAll = () => {
        setSelectedMovies([]);
        setShowCart(false);
    };

    const goToBasket = () => {
        const selectedMoviesData = movies.filter((movie) => selectedMovies.includes(movie.id));
        navigate("/basket", {
            state: {
                selectedMovies: selectedMoviesData,
            },
        });
    };

    // 영화 필터링 함수
    const filterMovies = async (filterType) => {
        setIsLoading(true);

        try {
            // 각 국가별로 필터링된 데이터 가져오기
            const [krResponse, usResponse, jpResponse] = await Promise.all([
                getContentByCategory("movieKR", 1),
                getContentByCategory("movieUS", 1),
                getContentByCategory("movieJP", 1),
            ]);

            let allMovies = [...(krResponse.data || []), ...(usResponse.data || []), ...(jpResponse.data || [])];

            // 필터 타입에 따라 정렬
            if (filterType === "popularity") {
                allMovies.sort((a, b) => b.popularity - a.popularity);
            } else if (filterType === "rating") {
                allMovies.sort((a, b) => b.rating - a.rating);
            } else if (filterType === "releaseDate") {
                allMovies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            }

            const formattedMovies = allMovies.map((movie) => ({
                id: movie.id,
                title: movie.title,
                poster: movie.poster_path,
                isKorean: movie.title.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/) !== null,
            }));

            setMovies(formattedMovies);
            setCurrentPage(1);
            setHasMoreMovies(true);
        } catch (err) {
            console.error("영화 필터링 오류:", err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading && movies.length === 0) {
        return (
            <LoadingWrapper>
                <div></div>
            </LoadingWrapper>
        );
    }

    if (error && movies.length === 0) {
        return <div>Error: {error}</div>;
    }

    return (
        <ReelpickWrapper>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelectPoster={handlePosterSelect} />
            <ReelpickTitle>릴픽 추천</ReelpickTitle>
            <ButtonGroup>
                {selectedMovies.length > 0 && <Button onClick={handleCancelAll}>전체취소</Button>}
                <Button onClick={goToBasket}>릴픽확인</Button>
            </ButtonGroup>
            <MoviesGrid>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} onClick={() => toggleMovieSelection(movie.id)} $isKorean={movie.isKorean}>
                        <img src={movie.poster} alt={movie.title} loading="lazy" />
                        {selectedMovies.includes(movie.id) && (
                            <CheckIcon>
                                <FaCheck />
                            </CheckIcon>
                        )}
                    </MovieCard>
                ))}
            </MoviesGrid>

            {loadingMore && (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <LoadingWrapper style={{ height: "40px", margin: "0 auto" }}>
                        <div></div>
                    </LoadingWrapper>
                </div>
            )}

            {!loadingMore && !hasMoreMovies && movies.length > 0 && (
                <div style={{ textAlign: "center", padding: "20px 0", color: "#888" }}>모든 영화를 불러왔습니다.</div>
            )}

            {showCart && (
                <CartWrapper>
                    <CartContainer>
                        <CartHeader>
                            <span>
                                릴픽 장바구니({selectedMovies.length}/{maxItems})
                            </span>
                            <button onClick={() => setShowCart(false)}>
                                <IoClose size={30} />
                            </button>
                        </CartHeader>

                        <CartContent>
                            <CartItemsContainer>
                                {selectedMovies.map((movieId) => {
                                    const movie = movies.find((m) => m.id === movieId);
                                    return movie ? (
                                        <CartItem key={movieId}>
                                            <CartItemImage src={movie.poster} alt={movie.title} />
                                            <RemoveButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleMovieSelection(movieId);
                                                }}
                                            >
                                                <IoClose size={16} />
                                            </RemoveButton>
                                        </CartItem>
                                    ) : null;
                                })}

                                {Array.from({ length: maxItems - selectedMovies.length }).map((_, index) => (
                                    <EmptySlot key={`empty-${index}`} />
                                ))}
                            </CartItemsContainer>
                        </CartContent>
                    </CartContainer>
                </CartWrapper>
            )}

            <ScrollTopButton visible={showScroll} onClick={scrollToTop}>
                <FaArrowUp size={35} />
            </ScrollTopButton>
        </ReelpickWrapper>
    );
};

export default Reelpick;
