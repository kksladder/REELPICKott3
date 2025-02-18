import { CastListWrap } from "../style";
import CastItem from "./CastItem";

// CastList.jsx
const CastList = ({ cast }) => {
    if (!cast || cast.length === 0) {
        return <div>출연진 정보가 없습니다.</div>;
    }

    // 중복을 방지하기 위해 index를 추가한 고유 key 생성
    return (
        <CastListWrap>
            {cast.map((actor, index) => (
                <CastItem key={`${actor.id}_${index}`} actor={actor} />
            ))}
        </CastListWrap>
    );
};

export default CastList;
