import { EpisodeListWrap } from "../style";
import EpisodeItem from "./EpisodeItem";
import MovieSeriesItem from "./MovieSeriesItem";

const EpisodeList = ({ episodes, seriesMovies }) => {
    // 영화 시리즈가 있는 경우
    if (seriesMovies && seriesMovies.length > 0) {
        return (
            <EpisodeListWrap>
                {seriesMovies.map((movie) => (
                    <MovieSeriesItem key={movie.id} movie={movie} />
                ))}
            </EpisodeListWrap>
        );
    }

    // TV 시리즈 에피소드
    if (!episodes || episodes.length === 0) {
        return <div className="ep-no">에피소드 정보가 없습니다.</div>;
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