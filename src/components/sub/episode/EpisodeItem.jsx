import { Link } from "react-router";
import { EpisodeItemWrap } from "../cast/style";

const EpisodeItem = () => {
    return (
        <EpisodeItemWrap>
            <Link>
                <div className="season_vid"></div>
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
