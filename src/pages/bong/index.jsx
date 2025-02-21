// pages/Director/index.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { getDirectorsByCountry } from "../../store/modules/getThunk3";
import { setSelectedCountry } from "../../store/modules/directorSlice";
import {
    DirectorPageContainer,
    DirectorGrid,
    DirectorCard,
    ProfileImage,
    PageHeader,
    PageTitle,
    LoadingSpinner,
    ScrollTopButton,
    CountrySelect,
} from "./style";

const DirectorPage2 = () => {
    const dispatch = useDispatch();
    const { filteredDirectors, loading, error, selectedCountry } = useSelector((state) => state.directorR);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEnd, setIsEnd] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleCountryChange = (e) => {
        dispatch(setSelectedCountry(e.target.value));
        setCurrentPage(1);
        setIsEnd(false);
    };

    // 초기 데이터 로드
    useEffect(() => {
        dispatch(getDirectorsByCountry({ page: 1 }));
    }, [dispatch, selectedCountry]);

    // 추가 데이터 로드
    useEffect(() => {
        if (currentPage > 1) {
            dispatch(getDirectorsByCountry({ page: currentPage }));
        }
    }, [currentPage, dispatch]);

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

        const lastDirectorElement = document.querySelector(`#director-${filteredDirectors.length - 1}`);
        if (lastDirectorElement) {
            observer.observe(lastDirectorElement);
        }

        return () => observer.disconnect();
    }, [filteredDirectors, loading, isEnd]);

    // 스크롤 버튼
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
        return <div>오류가 발생했습니다: {error}</div>;
    }

    return (
        <DirectorPageContainer>
            <PageHeader>
                <PageTitle>감독</PageTitle>
                <CountrySelect value={selectedCountry} onChange={handleCountryChange}>
                    <option value="all">전체</option>
                    <option value="KR">한국</option>
                    <option value="US">미국</option>
                    <option value="JP">일본</option>
                </CountrySelect>
            </PageHeader>

            <DirectorGrid>
                {filteredDirectors.map((director, index) => (
                    <DirectorCard key={`${director.id}-${index}`} id={`director-${index}`}>
                        <Link to={`/director/${director.id}`}>
                            <ProfileImage
                                src={
                                    director.profile_path
                                        ? `https://image.tmdb.org/t/p/w500${director.profile_path}`
                                        : "/image/profileNo.png"
                                }
                                loading="lazy"
                                alt={director.name}
                            />
                        </Link>
                    </DirectorCard>
                ))}
            </DirectorGrid>

            {loading && <LoadingSpinner />}

            {!loading && isEnd && filteredDirectors.length > 0 && (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    더 이상 표시할 감독이 없습니다.
                </div>
            )}

            <ScrollTopButton onClick={scrollToTop} visible={showScrollButton}>
                <FaArrowUp size={30} />
            </ScrollTopButton>
        </DirectorPageContainer>
    );
};

export default DirectorPage2;
