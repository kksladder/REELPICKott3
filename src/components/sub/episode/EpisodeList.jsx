import { EpisodeListWrap } from "../style";
import EpisodeItem from "./EpisodeItem";

const EpisodeList = ({ episodes }) => {
    if (!episodes || episodes.length === 0) {
        return <div>에피소드 정보가 없습니다.</div>;
    }

    return (
        <EpisodeListWrap>
            {episodes.map((episode) => (
                <EpisodeItem key={episode.id} episode={episode} />
            ))}
        </EpisodeListWrap>
    );
};

export default EpisodeList;
