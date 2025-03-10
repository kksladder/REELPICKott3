// components/directer/MovList.jsx
import { Inner } from "../../pages/serve/style";
import { MovListWrap } from "./style";
import { GlassUnderCircleBtn, GlassUnderOffCircleBtn } from "../../ui/icon/GlassCircle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MovList = ({ works, isDirector, className }) => {
    if (!works || works.length === 0) return null;
    const [activeItems, setActiveItems] = useState({});
    const [passedItems, setPassedItems] = useState(new Set());

    const extractYear = (work) => {
        const date = work.release_date || work.first_air_date;
        if (!date) return 0;

        const year = new Date(date).getFullYear();
        return isNaN(year) ? 0 : year;
    };
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const items = document.querySelectorAll(".mov-wrap");
            const midpoint = window.innerHeight / 2;
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;

            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const workId = item.dataset.workId;
                const isAtMidpoint = rect.top <= midpoint && rect.bottom >= midpoint;

                setActiveItems((prev) => ({
                    ...prev,
                    [workId]: isAtMidpoint,
                }));

                // 스크롤 방향에 따른 처리
                if (isScrollingDown) {
                    // 아래로 스크롤할 때
                    if (rect.top < midpoint) {
                        setPassedItems((prev) => new Set([...prev, workId]));
                    }
                } else {
                    // 위로 스크롤할 때
                    if (rect.bottom > midpoint) {
                        setPassedItems((prev) => {
                            const newSet = new Set([...prev]);
                            newSet.delete(workId);
                            return newSet;
                        });
                    }
                }
            });

            lastScrollY = currentScrollY;
        };

        // 초기 상태 설정
        handleScroll();

        // 스크롤 이벤트 리스너 추가
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [works]);

    const renderWorksByType = (mediaType, title) => {
        // 감독/배우에 따른 작품 필터링 및 중복 제거, 정렬
        const filteredWorks = Array.from(
            new Map(
                works
                    .filter((work) => {
                        if (isDirector) {
                            // 감독인 경우 Director로 job이 지정된 작품만
                            return work.media_type === mediaType && work.job === "Director";
                        }
                        // 배우인 경우 모든 출연작
                        return work.media_type === mediaType;
                    })
                    .map((work) => [work.id, work])
            ).values()
        ).sort((a, b) => extractYear(b) - extractYear(a));

        if (filteredWorks.length === 0) return null;
        return (
            <div className="works-category" key={mediaType}>
                {/* <h3 className="category-title">{title}</h3> */}
                {filteredWorks.map((work) => (
                    <div key={work.id} className="mov-wrap" data-work-id={work.id}>
                        <div className="style-step">
                            {activeItems[work.id] || passedItems.has(work.id.toString()) ? (
                                <GlassUnderCircleBtn />
                            ) : (
                                <GlassUnderOffCircleBtn />
                            )}
                            <div
                                className={`step-line ${
                                    activeItems[work.id] || passedItems.has(work.id.toString()) ? "active" : ""
                                }`}
                            ></div>
                        </div>
                        <div className="mov-date">
                            {new Date(work.release_date || work.first_air_date || Date.now()).getFullYear()}
                        </div>
                        <div className="list-wrap">
                            <div className="mov-poster">
                                <Link to={`/serve/${work.id}?type=${work.media_type}`}>
                                    <img
                                        src={
                                            work.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${work.poster_path}`
                                                : "/images/profileNo.png"
                                        }
                                        alt={work.title || work.name}
                                    />
                                </Link>
                            </div>
                            <div className="mov-info-wrap">
                                <div className="info-title">
                                    <div className="mov_title">{work.title || work.name}</div>
                                    <div className="mov_tag">
                                        <div className="mov-age">{work.adult ? "19" : "All"}</div>
                                        <div className="mov-birt">
                                            {new Date(work.release_date || work.first_air_date).getFullYear()}
                                        </div>
                                        {work.genres && (
                                            <div className="mov-cate">
                                                {work.genres.map((genre) => genre.name).join(", ")}
                                            </div>
                                        )}
                                        {work.runtime && <div className="mov-time">{work.runtime}분</div>}
                                    </div>
                                </div>
                                <div className="info-desc">
                                    {work.overview || (isDirector ? "감독으로 참여" : `${work.character}역으로 출연`)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <MovListWrap className={className}>
            <Inner>
                {renderWorksByType("movie", "영화")}
                {renderWorksByType("tv", "드라마")}
                {renderWorksByType("animation", "애니메이션")}
            </Inner>
        </MovListWrap>
    );
};

export default MovList;
