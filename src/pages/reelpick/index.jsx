import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getMovieRecommendations } from "../../api/movieService";
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

    const maxItems = 10;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const movieData = await getMovieRecommendations();
                setMovies(movieData);
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

    if (isLoading) {
        return (
            <LoadingWrapper>
                <div></div>
            </LoadingWrapper>
        );
    }

    if (error) {
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
