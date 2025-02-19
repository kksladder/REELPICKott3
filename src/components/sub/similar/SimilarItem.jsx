import { Link } from "react-router-dom";

const SimilarItem = ({ item }) => {
    const { poster_path, title, id, media_type } = item;

    return (
        <Link to={`/serve/${id}?type=${media_type}`}>
            <div className="con-item">
                {poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <div
                        className="no-poster"
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#1a1a1a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                        }}
                    >
                        포스터 없음
                    </div>
                )}
            </div>
        </Link>
    );
};

export default SimilarItem;
