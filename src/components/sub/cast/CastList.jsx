import styled from "styled-components";
import CastItem from "./CastItem";
import { CastListWrap } from "../style";


// CastList.jsx
const CastList = ({ cast }) => {

    return (
        <CastListWrap>
            {cast.map((actor, index) => (
                <CastItem key={`${actor.id}_${index}`} actor={actor} />
            ))}
        </CastListWrap>
    );
};

export default CastList;
