// components/sub/cast/CastItem.jsx
import { Link } from "react-router-dom";
import { CastItemWrap } from "../style";

// components/sub/cast/CastItem.jsx
const CastItem = ({ actor }) => {
    if (!actor) return null;

    const imageUrl = actor.profile_path
        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
        : "/images/profileNo.png";

    return (
        <CastItemWrap>
            <div className="actor">
                <Link to={`/directer/${actor.id}`}>  {/* 경로 수정 */}
                    <div className="actor_img">
                        <img src={imageUrl} alt={actor.name} />
                    </div>
                    <p className="actor_name">{actor.name}</p>
                    <p className="actor_part">{actor.character}</p>
                </Link>
            </div>
        </CastItemWrap>
    );
};

export default CastItem;
