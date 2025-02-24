import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    TopIcon,
} from "./style";
import { useDispatch } from "react-redux";
import { addToHistory } from "../../store/modules/watchingHistorySlice";
import { GlassTopBtn } from "../../ui/icon/GlassCircle";

const DramaPage = () => {
    const [dramas, setDramas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEnd, setIsEnd] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showTopIcon, setShowTopIcon] = useState(false);

    // 최대 1000개의 포스터를 위해 최대 50페이지까지 로드
    const MAX_PAGES = 50;
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

    const fetchDramas = async (page) => {
        try {
            setLoading(true);

            // 한국, 미국, 영국 드라마 데이터를 동시에 가져오기
            const [krResponse, usResponse, gbResponse] = await Promise.all([
                getContentByCategory("dramaKR", page),
                getContentByCategory("dramaUS", page),
                getContentByCategory("dramaGB", page),
            ]);

            // 각 국가의 데이터가 없거나 최대 페이지 도달 시 종료
            if (
                ((!krResponse.data || krResponse.data.length === 0) &&
                    (!usResponse.data || usResponse.data.length === 0) &&
                    (!gbResponse.data || gbResponse.data.length === 0)) ||
                page > MAX_PAGES
            ) {
                setIsEnd(true);
            } else {
                // 모든 드라마 데이터 합치기
                const allDramas = [...(krResponse.data || []), ...(usResponse.data || []), ...(gbResponse.data || [])];

                // 인기도 기준으로 정렬
                const sortedDramas = allDramas.sort((a, b) => b.popularity - a.popularity);

                setDramas((prevDramas) => {
                    const uniqueDramas = Array.from(
                        new Map([...prevDramas, ...sortedDramas].map((drama) => [drama.id, drama])).values()
                    );
                    return uniqueDramas;
                });
            }
        } catch (err) {
            console.error("Error fetching dramas:", err);
            setError(err.message || "드라마를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    // 초기 데이터 로드
    useEffect(() => {
        setDramas([]); // 목록 초기화
        setCurrentPage(1);
        setIsEnd(false);
        fetchDramas(1);

        return () => {
            setDramas([]);
            setCurrentPage(1);
        };
    }, []);

    // 추가 데이터 로드
    useEffect(() => {
        if (currentPage > 1) {
            fetchDramas(currentPage);
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

        const lastDramaElement = document.querySelector(`#drama-${dramas.length - 1}`);
        if (lastDramaElement) {
            observer.observe(lastDramaElement);
        }

        return () => observer.disconnect();
    }, [dramas, loading, isEnd]);

    // 스크롤 버튼
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.pageYOffset > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleDramaClick = (drama, event) => {
        event.preventDefault();
        console.log("Adding drama to history:", drama);
        dispatch(
            addToHistory({
                ...drama,
                type: "tv", // 컨텐츠 타입 구분
            })
        );
        navigate(`/serve/${drama.id}?type=tv`);
    };

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // };

    if (error) {
        return <div>오류가 발생했습니다: {error}</div>;
    }

    return (
        <MoviePageContainer>
            <PageHeader>
                <PageTitle>드라마 </PageTitle>
            </PageHeader>

            <MovieGrid>
                {dramas.map((drama, index) => (
                    <MovieCard key={`${drama.id}-${index}`} id={`drama-${index}`}>
                        <Link to={`/serve/${drama.id}?type=tv`} onClick={(e) => handleDramaClick(drama, e)}>
                            <PosterImage src={drama.poster || "/images/no-poster.png"} loading="lazy" />
                        </Link>
                    </MovieCard>
                ))}
            </MovieGrid>

            {loading && <LoadingSpinner />}

            {!loading && isEnd && dramas.length > 0 && (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    더 이상 표시할 드라마가 없습니다.
                </div>
            )}

            <TopIcon>
                {showTopIcon && (
                    <div className="top-icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <GlassTopBtn />
                    </div>
                )}
            </TopIcon>
        </MoviePageContainer>
    );
};

export default DramaPage;
