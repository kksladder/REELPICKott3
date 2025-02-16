import { useEffect, useState } from "react";
import { OverboardWindow, Overboard, ImagesPlacer, MoviePoster } from "./style";

const Gallery = () => {
    const [movies, setMovies] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // 3페이지의 데이터 가져오기 (총 60개 중 50개 사용)
                const pages = [1, 2, 3];
                const promises = pages.map((page) =>
                    fetch(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`, {
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjMzMTQwNDk2NDNhMzk0YmRlMzBiMWE4MGU4NWRiNSIsIm5iZiI6MTczODYzNzI5Ni4zMTcsInN1YiI6IjY3YTE3ZmYwMzgwYjg2YWNkOTAyZjA3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvsksNi9M6tlwD5o8UryHB0PG_tgrc-dgOsldcARXNY",
                            accept: "application/json",
                        },
                    }).then((res) => res.json())
                );

                const responses = await Promise.all(promises);
                const allMovies = responses.flatMap((data) => data.results);

                // 50개의 영화 선택
                const processedMovies = allMovies.slice(0, 50).map((movie, index) => ({
                    id: movie.id,
                    title: movie.title,
                    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    // 50개를 위한 area 할당 (aa부터 ax까지)
                    area: `${String.fromCharCode(97 + Math.floor(index / 26))}${String.fromCharCode(
                        97 + (index % 26)
                    )}`,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    vote_average: movie.vote_average,
                }));

                console.log("가져온 영화 수:", processedMovies.length);
                setMovies(processedMovies);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movies:", error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const offsetX = e.clientX - width / 2;
            const offsetY = e.clientY - height / 2;
            const xPercent = ((offsetX / width) * 100).toFixed(2);
            const yPercent = ((offsetY / height) * 100).toFixed(2);

            setMousePosition({ x: -xPercent, y: -yPercent });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (loading) {
        return <div>기다리거나 나가주세요</div>;
    }

    return (
        <OverboardWindow>
            <Overboard x={mousePosition.x} y={mousePosition.y}>
                <ImagesPlacer>
                    {movies.map((movie) => (
                        <MoviePoster key={movie.id} className={movie.area}>
                            <img src={movie.poster} alt={movie.title} />
                            <div className="movie-info"></div>
                        </MoviePoster>
                    ))}
                </ImagesPlacer>
            </Overboard>
        </OverboardWindow>
    );
};

export default Gallery;
