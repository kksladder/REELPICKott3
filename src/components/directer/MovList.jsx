// components/directer/MovList.jsx
import { Inner } from "../../pages/serve/style";
import { MovListWrap } from "./style";
import { GlassUnderCircleBtn } from "../../ui/icon/GlassCircle";
import { Link } from "react-router-dom";

const MovList = ({ works, isDirector, className }) => {
    if (!works || works.length === 0) return null;

    const renderWorksByType = (mediaType, title) => {
        // 감독/배우에 따른 작품 필터링
        const filteredWorks = works.filter((work) => {
            if (isDirector) {
                // 감독인 경우 Director로 job이 지정된 작품만
                return work.media_type === mediaType && work.job === "Director";
            }
            // 배우인 경우 모든 출연작
            return work.media_type === mediaType;
        });

        if (filteredWorks.length === 0) return null;

        return (
            <div className="works-category" key={mediaType}>
                <h3 className="category-title">{title}</h3>
                {filteredWorks.map((work) => (
                    <div key={work.id} className="mov-wrap">
                        <div className="style-step">
                            <div className="step-icon">
                                <GlassUnderCircleBtn />
                            </div>
                            <div className="step-line"></div>
                        </div>
                        <div className="mov-date">
                            {new Date(work.release_date || work.first_air_date).getFullYear()}
                        </div>
                        <div className="list-wrap">
                            <div className="mov-poster">
                                <Link to={`/serve/${work.id}?type=${work.media_type}`}>
                                    <img
                                        src={
                                            work.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${work.poster_path}`
                                                : "/images/posterNo.png"
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
