import { useEffect, useState, useCallback } from "react";
import { OverboardWindow, Overboard, ImagesPlacer, MoviePoster } from "./style";

const API_KEY = "723314049643a394bde30b1a80e85db5";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Gallery = () => {
    const [movies, setMovies] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`);

                if (!response.ok) throw new Error("API 호출 실패");
                const data = await response.json();

                const processedMovies = data.results.map((movie, index) => ({
                    id: movie.id,
                    title: movie.title,
                    poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
                    offsetX: Math.random() * 100 - 50,
                    offsetY: Math.random() * 100 - 50,
                    area: String.fromCharCode(97 + (index % 20)),
                }));

                setMovies(processedMovies);
            } catch (error) {
                console.error("영화 데이터 로딩 중 오류 발생:", error);
            }
        };

        fetchMovies();
    }, []);

    const handleMouseMove = useCallback((e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        requestAnimationFrame(() => {
            setMousePosition({
                x: (width / 2 - mouseX) * 0.1,
                y: (height / 2 - mouseY) * 0.1,
            });
        });
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    const StyledMoviePoster = useCallback(
        ({ movie }) => (
            <MoviePoster
                key={movie.id}
                className={movie.area}
                style={{
                    transform: `translate(${movie.offsetX}px, ${movie.offsetY}px)`,
                }}
            >
                <img src={movie.poster} alt={movie.title} loading="lazy" />
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                </div>
            </MoviePoster>
        ),
        []
    );

    return (
        <OverboardWindow>
            <Overboard x={mousePosition.x} y={mousePosition.y}>
                <ImagesPlacer>
                    {movies.map((movie) => (
                        <StyledMoviePoster key={movie.id} movie={movie} />
                    ))}
                </ImagesPlacer>
            </Overboard>
        </OverboardWindow>
    );
};

export default Gallery;
