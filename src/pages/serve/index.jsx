import { Inner, MoveDetailWrap, MovieVideo, ProductDetail, SeasonVideo, SimilarCont } from "./style";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HeartToggle, PlySquareLg, RestartLg, SpeakerOffLg } from "../../ui/Button/Button";
import { SquareNextBtn, SquarePreveBtn } from "../../ui/Button/SlideButton";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../store/modules/getThunk";
import CastList from "../../components/sub/cast/CastList";
import { useLocation } from "react-router-dom";

const ServePage = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { currentMovie, movieData, loading, error } = useSelector((state) => state.movieR);
    const [expanded, setExpanded] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState(1);
    const location = useLocation();
    const mediaType = new URLSearchParams(location.search).get("type") || "movie";

    // 슬라이드 관련 상태
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        if (movieId && movieData) {
            const currentItem = movieData.find((item) => item.id.toString() === movieId);
            const type = currentItem?.media_type || mediaType;

            dispatch(
                getMovieDetails({
                    id: movieId,
                    mediaType: type,
                    season: selectedSeason,
                })
            );
        }
    }, [dispatch, movieId, mediaType, selectedSeason]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 2;
        e.currentTarget.scrollLeft = scrollLeft - walk;
    };

    if (loading) return <div>데이터를 불러오는 중입니다...</div>;
    if (error)
        return (
            <div className="error-container">
                <h2>오류가 발생했습니다</h2>
                <p>{error}</p>
            </div>
        );
    if (!movieData) return <div>데이터를 불러오는 중입니다...</div>;
    if (!currentMovie) return <div>영화 정보를 불러오는 중입니다...</div>;

    const cast = currentMovie?.credits?.cast || [];
    const director = currentMovie?.credits?.crew?.find((person) => person.job === "Director");
    const isMovie = currentMovie?.media_type === "movie";
    const isSeries = currentMovie?.media_type === "tv" || currentMovie?.media_type === "animation";
    const hasSeasons = currentMovie?.seasons?.length > 0;

    const renderSeasonContent = () => {
        if (isMovie && hasSeasons) {
            return {
                title: `${currentMovie.title} - 시즌 ${currentMovie.seasons.length}`,
                content: currentMovie.seasons.map((season) => ({
                    ...season,
                    title: `시즌 ${season.season_number}`,
                    still_path: season.poster_path,
                    runtime: currentMovie.episode_run_time?.[0] || "",
                })),
            };
        }

        if (isSeries && currentMovie.seasons) {
            const currentSeasonData =
                currentMovie.seasons.find((s) => s.season_number === selectedSeason) || currentMovie.seasons[0];

            return {
                title: `${currentMovie.title} - ${currentSeasonData?.name || `시즌 ${selectedSeason}`}`,
                content:
                    currentMovie.episodes?.map((episode) => ({
                        ...episode,
                        title: `${episode.episode_number}화 - ${episode.name}`,
                        still_path: episode.still_path || currentMovie.backdrop_path,
                        runtime: episode.runtime || currentMovie.episode_run_time?.[0] || "",
                    })) || [],
            };
        }

        return null;
    };

    const seasonContent = renderSeasonContent();

    return (
        <MoveDetailWrap>
            <MovieVideo $expanded={expanded}>
                <div className="video">
                    <div className="video-item">
                        <div className="item_left">
                            <div className="playGroup">
                                <PlySquareLg />
                                <HeartToggle />
                            </div>
                            <div className="tag">
                                <div className="tag_age">19</div>
                                <div className="tag_year">
                                    {isMovie
                                        ? currentMovie?.release_date?.substring(0, 4)
                                        : currentMovie?.first_air_date?.substring(0, 4) || ""}
                                </div>
                                <div className="tag_genre">
                                    {currentMovie?.genres?.map((genre) => genre.name).join(", ") || ""}
                                </div>
                                <div className="tag_time">
                                    {isMovie
                                        ? currentMovie?.runtime
                                            ? `${currentMovie.runtime}분`
                                            : ""
                                        : currentMovie?.episode_run_time?.[0]
                                        ? `${currentMovie.episode_run_time[0]}분`
                                        : ""}
                                </div>
                            </div>
                        </div>
                        <div className="desc">
                            <p className={`text ${expanded ? "full-text" : "collapsed"}`}>
                                {currentMovie?.overview || ""}
                            </p>
                            <div className="desc_add" onClick={() => setExpanded(!expanded)}>
                                {expanded ? "접기" : "더보기"}
                                <div className="add_icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d={
                                                expanded
                                                    ? "M4.21967 15.5303C4.51256 15.8232 4.98744 15.8232 5.28033 15.5303L12 8.81066L18.7197 15.5303C19.0126 15.8232 19.4874 15.8232 19.7803 15.5303C20.0732 15.2374 20.0732 14.7626 19.7803 14.4697L12.5303 7.21967C12.2374 6.92678 11.7626 6.92678 11.4697 7.21967L4.21967 14.4697C3.92678 14.7626 3.92678 15.2374 4.21967 15.5303Z"
                                                    : "M4.21967 8.46967C4.51256 8.17678 4.98744 8.17678 5.28033 8.46967L12 15.1893L18.7197 8.46967C19.0126 8.17678 19.4874 8.17678 19.7803 8.46967C20.0732 8.76256 20.0732 9.23744 19.7803 9.53033L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L4.21967 9.53033C3.92678 9.23744 3.92678 8.76256 4.21967 8.46967Z"
                                            }
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="playItem">
                            <RestartLg />
                            <SpeakerOffLg />
                        </div>
                    </div>
                </div>
            </MovieVideo>

            <ProductDetail>
                <div className="title">출연 및 제작진</div>
                <div className="pd_sec">
                    <div className="director">
                        {director && (
                            <Link to={`/director/${director.id}`}>
                                <div className="pd_img">
                                    <img
                                        src={
                                            director.profile_path
                                                ? `https://image.tmdb.org/t/p/w185${director.profile_path}`
                                                : "/images/profileNo.png"
                                        }
                                        alt={director.name}
                                        onError={(e) => {
                                            e.target.src = "/images/profileNo.png";
                                        }}
                                    />
                                </div>
                                <p className="pd_name">{director.name}</p>
                                <p className="pd_part">감독</p>
                            </Link>
                        )}
                    </div>
                    <div className="cast">
                        {cast.length > 0 ? <CastList cast={cast} /> : <div>출연진 정보가 없습니다.</div>}
                    </div>
                </div>
            </ProductDetail>

            {seasonContent && (
                <Inner>
                    <SeasonVideo>
                        {isSeries && currentMovie.seasons?.length > 1 && (
                            <div className="season-selector">
                                {currentMovie.seasons.map((season) => (
                                    <button
                                        key={season.season_number}
                                        onClick={() => setSelectedSeason(season.season_number)}
                                        className={selectedSeason === season.season_number ? "active" : ""}
                                    >
                                        시즌 {season.season_number}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div className="season-title">{seasonContent.title}</div>
                        <div
                            className="season-slide"
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            <div className="season_vid-wrap">
                                {seasonContent.content.map((item, index) => (
                                    <div key={item.id || index} className="season_vid">
                                        <div className="season_vid-item">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${item.still_path}`}
                                                alt={item.title}
                                                onError={(e) => {
                                                    e.target.src = "/images/profileNo.png";
                                                }}
                                            />
                                        </div>
                                        <div className="season-vid_tit">{item.title}</div>
                                        <div className="season-vid_info">
                                            <div className="season-vid_day">
                                                {item.air_date?.substring(0, 10) || "방영일 미정"}
                                            </div>
                                            <div className="season-vid_time">{item.runtime}분</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="season_slide-button">
                                <SquarePreveBtn />
                                <SquareNextBtn />
                            </div>
                        </div>
                        <div className="under-line"></div>
                    </SeasonVideo>

                    <SimilarCont>
                        <div className="con-title">비슷한 컨텐츠</div>
                        <div className="con-slide">
                            <div className="con-sec">
                                {[...Array(8)].map((_, index) => (
                                    <Link key={index} to="#">
                                        <div className="con-item"></div>
                                    </Link>
                                ))}
                            </div>
                            <div className="con_slide-button">
                                <SquarePreveBtn />
                                <SquareNextBtn />
                            </div>
                        </div>
                    </SimilarCont>
                </Inner>
            )}
        </MoveDetailWrap>
    );
};

export default ServePage;
