import { Link } from "react-router";
import { CastItemWrap } from "./style";

const CastItem = () => {
    return (
        <CastItemWrap>
            <div className="actor">
                <Link>
                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                    <p className="actor_name">홍상수</p>
                    <p className="actor_part">역할</p>
                </Link>
            </div>
        </CastItemWrap>
    );
};

export default CastItem;
