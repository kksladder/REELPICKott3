import { useEffect, useState } from "react";
import { OverboardWindow, Overboard, ImagesPlacer, MoviePoster } from "./style";

const Gallery = () => {
    const movies = [
        { id: 1, title: "Movie 1", poster: "/images/22.jpg", area: "a" },
        { id: 2, title: "Movie 2", poster: "/images/23.jpg", area: "b" },
        { id: 3, title: "Movie 3", poster: "/images/24.jpg", area: "c" },
        { id: 4, title: "Movie 4", poster: "/images/AAA.jpg", area: "d" },
        { id: 5, title: "Movie 5", poster: "/images/pandabear.jpg", area: "e" },
        { id: 6, title: "Movie 6", poster: "/images/monster.jpg", area: "f" },
        { id: 7, title: "Movie 7", poster: "/images/parasite.jpg", area: "g" },
        { id: 8, title: "Movie 8", poster: "/images/mother.jpg", area: "h" },
        { id: 9, title: "Movie 9", poster: "/images/memorykilling.jpg", area: "i" },
        { id: 10, title: "Movie 10", poster: "/images/okja.jpg", area: "j" },
        { id: 11, title: "Movie 11", poster: "/images/janhwa.jpg", area: "k" },
        { id: 12, title: "Movie 12", poster: "/images/lifeishoney.jpg", area: "l" },
        { id: 13, title: "Movie 13", poster: "/images/smallLOGO.svg", area: "m" },
        { id: 14, title: "Movie 14", poster: "/images/ret.jpg", area: "n" },
        { id: 15, title: "Movie 15", poster: "/images/dog.jpg", area: "o" },
        { id: 16, title: "Movie 16", poster: "/images/snowpiecer.jpg", area: "p" },
    ];

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    return (
        <>
            <OverboardWindow>
                <Overboard x={mousePosition.x} y={mousePosition.y}>
                    <ImagesPlacer>
                        {movies.map((movie) => (
                            <MoviePoster key={movie.id} className={movie.area}>
                                <img src={movie.poster} alt={movie.title} />
                            </MoviePoster>
                        ))}
                    </ImagesPlacer>
                </Overboard>
            </OverboardWindow>
        </>
    );
};

export default Gallery;
