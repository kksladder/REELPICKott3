import { Link } from "react-router-dom";
import { SimilarItemWrap } from "../style";

const SimilarItem = ({ item }) => {
    const { poster_path, title, id, media_type } = item;

    return (
        <SimilarItemWrap>
            <Link to={`/serve/${id}?type=${media_type}`}>
                <div className="con-item">
                    {poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                    ) : (
                        <div className="no-poster">포스터 없음</div>
                    )}
                </div>
                <div className="con-title">{title}</div>
            </Link>
        </SimilarItemWrap>
    );
};

export default SimilarItem;
