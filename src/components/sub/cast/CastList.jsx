// components/sub/cast/CastList.jsx
import { CastListWrap } from "../style";
import CastItem from "./CastItem";

const CastList = ({ cast = [], onMouseMove }) => {
    // If no cast data, return empty component
    if (!cast || cast.length === 0) {
        return <CastListWrap onMouseMove={onMouseMove}></CastListWrap>;
    }

    return (
        <CastListWrap onMouseMove={onMouseMove}>
            {cast.map((actor) => (
                <CastItem key={actor.id} actor={actor} />
            ))}
        </CastListWrap>
    );
};

export default CastList;
