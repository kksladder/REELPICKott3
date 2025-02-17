import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
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

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .title {
        margin-top: 8px;
        font-weight: 500;
    }
`;

const TestList = () => {
    const { movieData, loading } = useSelector((state) => state.movieR);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <ListContainer>
            {movieData &&
                movieData.map((movie) => (
                    <Link to={`/serve/${movie.id}`} key={movie.id}>
                        <MovieCard>
                            <div className="poster">
                                <img
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                    alt={movie.title}
                                    onError={(e) => {
                                        e.target.src = "/placeholder-poster.jpg"; // You can add a placeholder image
                                    }}
                                />
                            </div>
                            <div className="title">{movie.title}</div>
                        </MovieCard>
                    </Link>
                ))}
        </ListContainer>
    );
};

export default TestList;
