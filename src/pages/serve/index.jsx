import { Inner, MoveDetailWrap, MovieVideo, ProductDetail, SeasonVideo, SimilarCont, StyledEpisodeList } from "./style";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HeartToggle, PlySquareLg, RestartLg, SpeakerOffLg, SpeakerOnLg, StopSquareLg } from "../../ui/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../store/modules/getThunk";
import CastList from "../../components/sub/cast/CastList";
import { useLocation } from "react-router-dom";
import EpisodeList from "../../components/sub/episode/EpisodeList";
import SimilarList from "../../components/sub/similar/SimilarList";

const ServePage = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { currentMovie, movieData } = useSelector((state) => state.movieR);
    const [expanded, setExpanded] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState(1);
    const location = useLocation();
    const mediaType = new URLSearchParams(location.search).get("type") || "movie";
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const playerRef = useRef(null);

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

    // YouTube API 초기화와 컨트롤 관련 코드
    useEffect(() => {
        // YouTube IFrame API 로드
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // API 준비되면 플레이어 초기화
        window.onYouTubeIframeAPIReady = () => {
            if (currentMovie?.trailer?.key) {
                const player = new window.YT.Player("youtube-player", {
                    events: {
                        onReady: (event) => {
                            playerRef.current = event.target;
                            if (isMuted) {
                                event.target.mute();
                            }
                        },
                        onStateChange: (event) => {
                            // 동영상 상태 변경 시 재생/정지 상태 업데이트
                            if (event.data === window.YT.PlayerState.PLAYING) {
                                setIsPlaying(true);
                            } else if (event.data === window.YT.PlayerState.PAUSED) {
                                setIsPlaying(false);
                            }
                        },
                    },
                });
            }
        };

        // 컴포넌트 언마운트 시 정리
        return () => {
            window.onYouTubeIframeAPIReady = null;
            if (playerRef.current) {
                playerRef.current = null;
            }
        };
    }, [currentMovie?.trailer?.key]);

    // 비디오 URL 생성 함수 수정
    const getVideoUrl = () => {
        if (!currentMovie?.trailer?.key) return null;
        return `https://www.youtube.com/embed/${currentMovie.trailer.key}?enablejsapi=1&autoplay=1&mute=${
            isMuted ? 1 : 0
        }&controls=0&showinfo=0&rel=0&loop=1&playlist=${currentMovie.trailer.key}&origin=${window.location.origin}`;
    };

    // 재생/정지 핸들러 수정
    const handlePlayPause = () => {
        if (playerRef.current) {
            try {
                if (isPlaying) {
                    playerRef.current.pauseVideo();
                } else {
                    playerRef.current.playVideo();
                }
                setIsPlaying(!isPlaying);
            } catch (error) {
                console.error("Failed to control video:", error);
            }
        }
    };
    const handleReStart = () => {
        if (playerRef.current) {
            try {
                // 현재 URL 가져오기
                const currentUrl = getVideoUrl();
                // iframe의 src 속성을 새로운 URL로 업데이트
                const iframe = document.getElementById("youtube-player");
                if (iframe) {
                    const timestamp = new Date().getTime();
                    iframe.src = `${currentUrl}&timestamp=${timestamp}`;
                }
                // 플레이어 상태 초기화
                setIsPlaying(true);
            } catch (error) {
                console.error("Failed to restart video:", error);
            }
        }
    };

    // 음소거 핸들러 수정
    const handleMuteToggle = () => {
        if (playerRef.current) {
            try {
                if (isMuted) {
                    playerRef.current.unMute();
                } else {
                    playerRef.current.mute();
                }
                setIsMuted(!isMuted);
            } catch (error) {
                console.error("Failed to toggle mute:", error);
            }
        }
    };

    const cast = currentMovie?.credits?.cast || [];
    const director = currentMovie?.credits?.crew?.find((person) => person.job === "Director");
    const isMovie = currentMovie?.media_type === "movie";
    const isSeries = currentMovie?.media_type === "tv" || currentMovie?.media_type === "animation";

    const renderSeasonContent = () => {
        if (isMovie && currentMovie.belongs_to_collection) {
            // 영화 시리즈인 경우
            return {
                title: `${currentMovie.title} - 시리즈`,
                content: [
                    {
                        id: currentMovie.id,
                        title: currentMovie.title,
                        overview: currentMovie.overview,
                        still_path: currentMovie.backdrop_path,
                        runtime: currentMovie.runtime,
                        release_date: currentMovie.release_date,
                        vote_average: currentMovie.vote_average,
                    },
                    // 시리즈의 다른 영화들도 여기에 추가됨
                ],
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
                    {currentMovie?.trailer?.key ? (
                        <iframe
                            id="youtube-player"
                            src={getVideoUrl()}
                            title={currentMovie.title}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: "none",
                            }}
                        />
                    ) : (
                        <img
                            src={`https://image.tmdb.org/t/p/original${
                                currentMovie?.backdrop_path || currentMovie?.poster_path
                            }`}
                            alt={currentMovie?.title}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/images/test.jpg"; // 기본 대체 이미지
                            }}
                        />
                    )}
                    <div className="video-item">
                        <div className="item_left">
                            <div className="playGroup">
                                <div onClick={handlePlayPause}>{isPlaying ? <StopSquareLg /> : <PlySquareLg />}</div>
                                <HeartToggle />
                            </div>
                            <div className="tag">
                                <div className="tag_age">19</div>
                                <div className="tag_year">
                                    {currentMovie?.release_date?.substring(0, 4) ||
                                        currentMovie?.first_air_date?.substring(0, 4) ||
                                        ""}
                                </div>
                                <div className="tag_genre">
                                    {currentMovie?.genres?.map((genre) => genre.name).join(", ") || ""}
                                </div>
                                <div className="tag_time">
                                    {currentMovie?.runtime
                                        ? `${currentMovie.runtime}분`
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
                            <div onClick={handleReStart}>
                                <RestartLg />
                            </div>
                            <div onClick={handleMuteToggle} style={{ cursor: "pointer" }}>
                                {isMuted ? <SpeakerOffLg /> : <SpeakerOnLg />}
                            </div>
                        </div>
                    </div>
                </div>
            </MovieVideo>
            <ProductDetail>
                <div className="title">출연 및 제작진</div>
                <div className="pd_sec">
                    <div className="director">
                        {director && (
                            // <Link to={`/director/${director.id}`}>
                            <Link to={"/director"}>
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
                        {cast.length > 0 ? (
                            <CastList cast={cast} />
                        ) : (
                            <div className="cast-no">출연진 정보가 없습니다.</div>
                        )}
                    </div>
                </div>
            </ProductDetail>
            <Inner>
                {(seasonContent || currentMovie?.seriesMovies?.length > 0) && (
                    <SeasonVideo>
                        <div className="season-title-wrapper">
                            <div className="season-title">
                                {currentMovie?.seriesMovies?.length > 0
                                    ? `${currentMovie.title} 시리즈`
                                    : seasonContent?.title}
                            </div>

                            {/* <img
                                src={isSeries ? "/icon/Iconex/Glass/Right.png" : "/icon/Iconex/Glass/Off.png"}
                                alt=""
                                className="glass-icon"
                            /> */}
                        </div>

                        <StyledEpisodeList>
                            <EpisodeList
                                episodes={seasonContent?.content || []}
                                seriesMovies={currentMovie?.seriesMovies || []}
                            />
                        </StyledEpisodeList>

                        <div className="under-line"></div>
                    </SeasonVideo>
                )}

                <SimilarCont>
                    <div className="con-title">비슷한 컨텐츠</div>
                    <SimilarList movieId={movieId} mediaType={currentMovie?.media_type} />
                </SimilarCont>
            </Inner>
        </MoveDetailWrap>
    );
};

export default ServePage;
