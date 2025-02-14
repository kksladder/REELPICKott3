import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import { IoClose } from 'react-icons/io5';
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
} from './style';
import { FaCheck } from 'react-icons/fa6';
import { FaArrowUp } from 'react-icons/fa';

const Reelpick = () => {
    const navigate = useNavigate();
    const [showScroll, setShowScroll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [setIsPosterSelectActive] = useState(false);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const maxItems = 10;

    const movies = [
        { id: 1, title: 'Movie 1', poster: '/images/22.jpg' },
        { id: 2, title: 'Movie 2', poster: '/images/23.jpg' },
        { id: 3, title: 'Movie 3', poster: '/images/24.jpg' },
        { id: 4, title: 'Movie 4', poster: '/images/AAA.jpg' },
        { id: 6, title: 'Movie 5', poster: '/images/pandabear.jpg' },
        { id: 7, title: 'Movie 6', poster: '/images/monster.jpg' },
        { id: 8, title: 'Movie 7', poster: '/images/parasite.jpg' },
        { id: 9, title: 'Movie 8', poster: '/images/mother.jpg' },
        { id: 10, title: 'Movie 9', poster: '/images/memorykilling.jpg' },
        { id: 11, title: 'Movie 10', poster: '/images/okja.jpg' },
        { id: 12, title: 'Movie 11', poster: '/images/dog.jpg' },
        { id: 13, title: 'Movie 12', poster: '/images/ret.jpg' },
        { id: 14, title: 'Movie 13', poster: '/images/nomnomnom.jpg' },
        { id: 15, title: 'Movie 14', poster: '/images/lookeddevil.jpg' },
        { id: 16, title: 'Movie 15', poster: '/images/janhwa.jpg' },
    ];

    useEffect(() => {
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

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handlePosterSelect = () => {
        setIsModalOpen(false);
        setIsPosterSelectActive(true);
    };

    const toggleMovieSelection = (movieId) => {
        setSelectedMovies((prev) => {
            if (prev.includes(movieId)) {
                const newSelection = prev.filter((id) => id !== movieId);
                if (newSelection.length === 0) {
                    setShowCart(false);
                }
                return newSelection;
            } else {
                if (prev.length >= maxItems) {
                    alert('최대 10개까지만 선택할 수 있습니다.');
                    return prev;
                }
                setShowCart(true);
                return [...prev, movieId];
            }
        });
    };

    const handleCancelAll = () => {
        setSelectedMovies([]);
        setShowCart(false);
    };

    const goToBasket = () => {
        navigate('/basket');
        const selectedMoviesData = movies.filter((movie) => selectedMovies.includes(movie.id));
        navigate('/basket', {
            state: {
                selectedMovies: selectedMoviesData,
            },
        });
    };

    return (
        <ReelpickWrapper>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelectPoster={handlePosterSelect} />
            <ReelpickTitle>릴픽 추천</ReelpickTitle>
            <ButtonGroup>
                <Button onClick={handleCancelAll}>전체취소</Button>
                <Button onClick={goToBasket}>릴픽확인</Button>
            </ButtonGroup>
            <MoviesGrid>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} onClick={() => toggleMovieSelection(movie.id)}>
                        <img src={movie.poster} alt={movie.title} />
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
                                    return (
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
                                    );
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
