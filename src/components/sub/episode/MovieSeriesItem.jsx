import { Link } from "react-router-dom";
import { MovieSeriesWrap } from "../style";

const MovieSeriesItem = ({ movie }) => {
    const { poster_path, title, release_date, vote_average, id } = movie;
    const bgurl = `https://image.tmdb.org/t/p/w500/`;

    return (
        <MovieSeriesWrap>
            <div className="season_vid">
                <Link to={`/serve/movie_${id}?type=movie`}>
                    <img
                        src={poster_path ? `${bgurl}${poster_path}` : "/images/profileNo.png"}
                        alt={title}
                        onError={(e) => {
                            e.target.src = "/images/profileNo.png";
                        }}
                    />
                </Link>
            </div>
            <div className="season-vid_tit">{title}</div>
            <div className="season-vid_info">
                <div className="season-vid_day">{release_date ? release_date.substring(0, 4) : "출시일 미정"}</div>
                <div className="season-vid_time">평점 {vote_average ? vote_average.toFixed(1) : "정보 없음"}</div>
            </div>
        </MovieSeriesWrap>
    );
};
export default MovieSeriesItem
