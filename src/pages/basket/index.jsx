import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { Button, ReelpickWrapper } from '../reelpick/style';
import { BasketGrid, MovieCard, MovieImage, EmptyMessage, BasketTitle, MovieContainer, ReelpickButton } from './style';

import { ScrollTopButton } from './style';
import { FaArrowUp } from 'react-icons/fa';

function Basket() {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedMovies = location.state?.selectedMovies || [];
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 300) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 300) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const handleEmptyClick = () => {
        navigate('/reelpick');
    };

    if (selectedMovies.length === 0) {
        return (
            <ReelpickWrapper>
                <BasketTitle>릴픽 컨텐츠</BasketTitle>
                <EmptyMessage onClick={handleEmptyClick}>선택된 영화가 없습니다.</EmptyMessage>
                <ReelpickButton onClick={() => navigate('/reelpick')}>릴픽 둘러보기</ReelpickButton>

                <ScrollTopButton visible={showScroll} onClick={scrollToTop}></ScrollTopButton>
            </ReelpickWrapper>
        );
    }

    return (
        <ReelpickWrapper>
            <BasketTitle>릴픽 컨텐츠</BasketTitle>
            <Button onClick={() => navigate('/reelpick')}>릴픽 다시 확인</Button>
            <BasketGrid>
                {selectedMovies.map((movie) => (
                    <MovieContainer key={movie.id}>
                        <MovieCard>
                            <MovieImage src={movie.poster} alt={movie.title} />
                        </MovieCard>
                    </MovieContainer>
                ))}
            </BasketGrid>
            <ScrollTopButton visible={showScroll} onClick={scrollToTop}>
                <FaArrowUp size={35} />
            </ScrollTopButton>
        </ReelpickWrapper>
    );
}

export default Basket;
