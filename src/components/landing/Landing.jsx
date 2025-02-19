import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { OverboardWindow, Overboard, ImagesPlacer, MoviePoster } from "./style";

const Gallery = () => {
    const containerRef = useRef(null);
    const posterRefs = useRef({});
    const [hovered, setHovered] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const movies = useMemo(
        () => [
            // 첫 번째 행 (11개)
            { id: 1, title: "Anora", poster: "/images/anora.jpg", area: "a1" },
            { id: 2, title: "Breaking Bad", poster: "/images/breakinbad.jpg", area: "a2" },
            { id: 3, title: "Break Night", poster: "/images/breaknight.jpg", area: "a3" },
            { id: 4, title: "Casino", poster: "/images/casino.jpg", area: "a4" },
            { id: 5, title: "Cinema", poster: "/images/cinema.jpg", area: "a5" },
            { id: 6, title: "Crime City", poster: "/images/crimecity.jpg", area: "a6" },
            { id: 7, title: "Demon", poster: "/images/demon.jpg", area: "a7" },
            { id: 8, title: "Dexter", poster: "/images/dexter.jpg", area: "a8" },
            { id: 9, title: "Diasour", poster: "/images/diasour.jpg", area: "a9" },
            { id: 10, title: "Django", poster: "/images/django.jpg", area: "a10" },
            { id: 11, title: "Endgame", poster: "/images/endgame.jpg", area: "a11" },

            // 두 번째 행 (중앙 로고 포함 11개)
            { id: 15, title: "Family", poster: "/images/familly.jpg", area: "b1" },
            { id: 16, title: "Godfather", poster: "/images/godfather.jpg", area: "b2" },
            { id: 17, title: "Hard Work", poster: "/images/hardwork.jpg", area: "b3" },
            { id: 18, title: "newworld", poster: "/images/newworld.jpg", area: "b4" },
            { id: 19, title: "withgod", poster: "/images/withgod.jpg", area: "b5" },
            { id: 21, title: "Logo", poster: "/images/smallLOGO.svg", area: "center" },
            { id: 22, title: "Leave", poster: "/images/leave.jpg", area: "b6" },
            { id: 23, title: "Thetrroerlive", poster: "/images/theterrorlive.jpg", area: "b7" },
            { id: 24, title: "Level Up", poster: "/images/levelup.jpg", area: "b8" },
            { id: 25, title: "Live Alone", poster: "/images/livealone.jpg", area: "b9" },
            { id: 26, title: "Inception", poster: "/images/inception.jpg", area: "b10" },

            // 세 번째 행 (11개)
            { id: 28, title: "Maksimus", poster: "/images/maksimus.jpg", area: "c1" },
            { id: 29, title: "Miki", poster: "/images/miki.jpg", area: "c2" },
            { id: 30, title: "Monster", poster: "/images/monster.jpg", area: "c3" },
            { id: 31, title: "My Old Man", poster: "/images/myoldman.jpg", area: "c4" },
            { id: 32, title: "NSIS", poster: "/images/ncis.jpg", area: "c5" },
            { id: 33, title: "Ozark", poster: "/images/ozak.jpg", area: "c6" },
            { id: 34, title: "Pulp Fiction", poster: "/images/pulpfiction.jpg", area: "c7" },
            { id: 35, title: "Sin", poster: "/images/sin.jpg", area: "c8" },
            { id: 36, title: "Slow Horses", poster: "/images/slowhorses.jpg", area: "c9" },
            { id: 37, title: "The Wolf", poster: "/images/thewolf.jpg", area: "c10" },
            { id: 38, title: "Tunnel", poster: "/images/tunnel.jpg", area: "c11" },
        ],
        []
    );

    const handleMouseMove = useCallback((e) => {
        requestAnimationFrame(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const offsetX = e.clientX - width / 2;
            const offsetY = e.clientY - height / 2;
            const xPercent = ((offsetX / width) * 10).toFixed(2);
            const yPercent = ((offsetY / height) * 10).toFixed(2);

            setMousePosition({
                x: -xPercent,
                y: -yPercent,
            });
        });
    }, []);

    useEffect(() => {
        let frameId;
        let throttleTimeout;

        const throttledMouseMove = (e) => {
            if (!throttleTimeout) {
                throttleTimeout = setTimeout(() => {
                    throttleTimeout = null;
                    handleMouseMove(e);
                }, 16);
            }
        };

        window.addEventListener("mousemove", throttledMouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", throttledMouseMove);
            cancelAnimationFrame(frameId);
            clearTimeout(throttleTimeout);
        };
    }, [handleMouseMove]);

    useEffect(() => {
        if (!containerRef.current) return;

        containerRef.current.style.setProperty("--mouseX", `${mousePosition.x}deg`);
        containerRef.current.style.setProperty("--mouseY", `${mousePosition.y}deg`);

        // Apply 3D effects to movie posters
        Object.entries(posterRefs.current).forEach(([id, element]) => {
            if (element) {
                const index = parseInt(id);
                const direction = index % 2 === 0 ? 1 : -1;
                const depth = (index % 10) * 5 + 10;
                const baseTransform = `translate(${direction * (mousePosition.x * 2)}px, ${
                    direction * (mousePosition.y * 2)
                }px)`;

                if (hovered === index) {
                    // Apply enhanced 3D effect on hover
                    element.style.transform = `
                        perspective(1000px) 
                        rotateY(var(--mouseX)) 
                        rotateX(var(--mouseY)) 
                        translateZ(${depth}px)
                        ${baseTransform}
                        scale(1.05)
                    `;
                    element.style.zIndex = 10;
                } else {
                    // Apply basic parallax effect
                    element.style.transform = baseTransform;
                    element.style.zIndex = 1;
                }

                // Apply dynamic shadow based on mouse position
                const shadowIntensity = hovered === index ? 0.7 : 0.4;
                const shadowX = mousePosition.x * -1;
                const shadowY = mousePosition.y * -1;
                element.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, ${shadowIntensity}))`;

                // Add transition for smoother effect
                element.style.transition =
                    hovered === index
                        ? "transform 0.2s ease, filter 0.2s ease"
                        : "transform 0.4s ease, filter 0.4s ease";
            }
        });
    }, [mousePosition, hovered]);

    return (
        <OverboardWindow ref={containerRef}>
            <Overboard x={mousePosition.x} y={mousePosition.y}>
                <ImagesPlacer x={mousePosition.x} y={mousePosition.y}>
                    {movies.map((movie) => (
                        <MoviePoster
                            key={movie.id}
                            className={`${movie.area} atvImg`}
                            x={mousePosition.x}
                            y={mousePosition.y}
                            ref={(el) => (posterRefs.current[movie.id] = el)}
                            onMouseEnter={() => setHovered(movie.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <img src={movie.poster} alt={movie.title} />
                        </MoviePoster>
                    ))}
                </ImagesPlacer>
            </Overboard>
        </OverboardWindow>
    );
};

export default Gallery;
