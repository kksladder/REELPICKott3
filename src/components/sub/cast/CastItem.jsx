// components/sub/cast/CastItem.jsx
import { Link } from "react-router-dom";
import { CastItemWrap } from "../style";

const CastItem = ({ actor }) => {
    // Check if actor exists and has required properties
    if (!actor) return null;

    const imageUrl = actor.profile_path
        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
        : "/images/profileNo.png"; // You should add a placeholder image

    return (
        <CastItemWrap>
            <div className="actor">
                <Link to={`/person/${actor.id}`}>
                    <div className="actor_img">
                        <img src={imageUrl} />
                    </div>
                    <p className="actor_name">{actor.name}</p>
                    <p className="actor_part">{actor.character}</p>
                </Link>
            </div>
        </CastItemWrap>
    );
};

export default CastItem;
