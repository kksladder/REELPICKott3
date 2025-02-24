import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { FaArrowUp } from "react-icons/fa";
import { getDirectorsByCountry } from "../../store/modules/getThunk3";
import {
    DirectorPageContainer,
    DirectorGrid,
    DirectorCard,
    ProfileImage,
    PageHeader,
    PageTitle,
    LoadingSpinner,
    // ScrollTopButton,
    DirectorCardOverlay,
    DirectorName,
    KnownForTitle,
    TopIcon,
} from "./style";
import { GlassTopBtn } from "../../ui/icon/GlassCircle";

const DirectorPage2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { filteredDirectors, loading, error, selectedCountry, hasMore } = useSelector((state) => state.directorR);
    const [currentPage, setCurrentPage] = useState(1);
    const [showTopIcon, setShowTopIcon] = useState(false);

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
                if (entries[0].isIntersecting && !loading && hasMore) {
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
    }, [filteredDirectors, loading, hasMore]);

    // 스크롤 버튼
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

    const handleDramaClick = (director, event) => {
        event.preventDefault();
        console.log("Adding drama to history:", director);
        dispatch({
            ...director,
            type: "directer", // 컨텐츠 타입 구분
        });
        navigate(`/directer/${director.id}`);
    };

    if (error) {
        return <div>오류가 발생했습니다: {error}</div>;
    }

    return (
        <DirectorPageContainer>
            <PageHeader>
                <PageTitle>릴픽 추천 영화 감독들</PageTitle>
            </PageHeader>

            <DirectorGrid>
                {filteredDirectors.map((directer, index) => (
                    <DirectorCard
                        key={`${directer.id}-${index}`}
                        id={`director-${index}`}
                        hasCannesAward={directer.hasCannesAward}
                    >
                        <Link
                            to={`/directer/${directer.id}type=directer`}
                            onClick={(e) => handleDramaClick(directer, e)}
                        >
                            <ProfileImage
                                src={
                                    directer.profile_path
                                        ? `https://image.tmdb.org/t/p/w500${directer.profile_path}`
                                        : "/image/profileNo.png"
                                }
                                loading="lazy"
                                alt={directer.name}
                            />
                            <DirectorCardOverlay>
                                <DirectorName>{directer.name}</DirectorName>
                                {directer.known_for?.slice(0, 2).map((work) => (
                                    <KnownForTitle key={work.id}>{work.title}</KnownForTitle>
                                ))}
                            </DirectorCardOverlay>
                        </Link>
                    </DirectorCard>
                ))}
            </DirectorGrid>

            {loading && <LoadingSpinner />}

            {!loading && !hasMore && filteredDirectors.length > 0 && (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    더 이상 표시할 감독이 없습니다.
                </div>
            )}

            <TopIcon>
                {showTopIcon && (
                    <div className="top-icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <GlassTopBtn />
                    </div>
                )}
            </TopIcon>
        </DirectorPageContainer>
    );
};

export default DirectorPage2;
