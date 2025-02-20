// import { useParams } from "react-router";
import { DirecMovItemWrap } from "./style";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

const DirecMovItem = () => {
    // const { movieId } = useParams();
    // const dispatch = useDispatch();
    // const (currentMovie, movieData) = useSelector((state) => state.movieR)
    
    // useEffect(() => {
    //      if (movieId && movieData) {
    //                 const currentItem = movieData.find((item) => item.id.toString() === movieId);
    //                 const type = currentItem?.media_type || mediaType;
        
    //                 dispatch(
    //                     getMovieDetails({
    //                         id: movieId,
    //                         mediaType: type,
    //                         season: selectedSeason,
    //                     })
    //                 );
    //             }
    // },[dispatch,movieId])
    return (
        <DirecMovItemWrap>
            <div className="movie-img">
                <img src="public/images/miki.jpg" alt="" />
            </div>
            <div className="movie-info">
                <div className="title-wrap">
                    <div className="info_title">미키17</div>
                    <div className="info_tag">
                        {/* <div className="tag">
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
                        </div> */}
                    </div>
                </div>
                <div className="info-desc">
                    위험한 일에 투입되는 소모품으로, 죽으면 다시 프린트되는 미키가 17번째 죽음의 위기를 겪던 중, 그가
                    죽은 줄 알고 미키 18이 프린트되면서 벌어지는 예측불허의 이야기를 그리는 영화
                </div>
            </div>
        </DirecMovItemWrap>
    );
};

export default DirecMovItem;
