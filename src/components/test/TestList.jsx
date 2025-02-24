import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    min-height: 100vh;
`;

const MovieCard = styled.div`
    width: 200px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    .poster {
        width: 100%;
        height: 300px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #1a1a1a;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.3s ease;

            &.loading {
                opacity: 0;
            }
        }
    }

    .title {
        margin-top: 8px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const MemoizedMovieCard = memo(({ movie }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (
        <Link to={`/serve/${movie.id}?type=${movie.media_type}`}>
            <MovieCard>
                <div className="poster">
                    <img
                        className={!imageLoaded ? "loading" : ""}
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title}
                        onLoad={() => setImageLoaded(true)}
                        onError={(e) => {
                            e.target.src = "/images/noImage.png";
                            setImageLoaded(true);
                        }}
                    />
                </div>
                <div className="title">{movie.title}</div>
            </MovieCard>
        </Link>
    );
});

MemoizedMovieCard.displayName = "MemoizedMovieCard";

const TestList = () => {
    const { movieData} = useSelector((state) => state.movieR);

    // 로딩 상태일 때도 기존 데이터를 계속 표시
    return (
        <ListContainer>
            {movieData?.map((movie) => (
                <MemoizedMovieCard key={movie.id} movie={movie} />
            ))}
        </ListContainer>
    );
};

export default TestList;
