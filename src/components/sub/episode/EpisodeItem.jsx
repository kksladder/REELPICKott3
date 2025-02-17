import { Link } from "react-router";
import { EpisodeItemWrap } from "../style";

const EpisodeItem = ({ item }) => {
    const { backdrop_path, title } = item;
    const bgurl = `https://image.tmdb.org/t/p/w500/`;
    return (
        <EpisodeItemWrap>
            <Link>
                <div className="season_vid">
                    <img src={`${bgurl}${backdrop_path}`} alt="" />
                </div>
                <div className="season-vid_tit">1.모두를 놀라게 한 10기 영자의 선택</div>
                <div className="season-vid_info">
                    <div className="season-vid_day">2025.01.09</div>
                    <div className="season-vid_time">61분</div>
                </div>
            </Link>
        </EpisodeItemWrap>
    );
};

export default EpisodeItem;
