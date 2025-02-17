import { useSelector } from "react-redux";
import { EpisodeListWrap } from "../style";
import EpisodeItem from "./EpisodeItem";

const EpisodeList = () => {
    const { movieData } = useSelector((state) => state.movieR);

    if (!movieData) {
        return <div>loading...</div>;
    }
    if (movieData.length > 0)
        return (
            <EpisodeListWrap>
                {movieData.map((item) => (
                    <EpisodeItem key={item.id} item={item} />
                ))}
            </EpisodeListWrap>
        );
};

export default EpisodeList;
