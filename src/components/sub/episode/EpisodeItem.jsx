import { EpisodeItemWrap } from "../style";

const EpisodeItem = ({ episode }) => {
    const { still_path, title, air_date, runtime } = episode;
    const bgurl = `https://image.tmdb.org/t/p/w500/`;

    return (
        <EpisodeItemWrap>
            <div className="season_vid">
                <img
                    src={still_path ? `${bgurl}${still_path}` : "/images/episodeNo.png"}
                    alt={title}
                    onError={(e) => {
                        e.target.src = "/images/episodeNo.png";
                    }}
                />
            </div>
            <div className="season-vid_tit">{title}</div>
            <div className="season-vid_info">
                <div className="season-vid_day">{air_date ? air_date.substring(0, 10) : "방영일 미정"}</div>
                <div className="season-vid_time">{runtime}분</div>
            </div>
        </EpisodeItemWrap>
    );
};

export default EpisodeItem;
