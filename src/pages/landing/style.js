import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`;

export const OverboardWindow = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform;
`;

export const Overboard = styled.div`
    position: relative;
    width: 2500px;
    height: fit-content;
    left: 50%;
    transform: translate(calc(-50% + (${(props) => props.x}% * 5)), calc(${(props) => props.y}% * 5));
    transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
    will-change: transform;
`;

export const ImagesPlacer = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: calc(75px + ${(props) => Math.abs(props.x) * 0.2}px);
    width: 100%;
    height: fit-content;
    place-items: center;
    padding: 20px;
    grid-template-areas:
        "a1  a2  a3  a4  a5  a6  a7  a8  a9  a10 a11"
        "b1  b2  b3  b4  b5  center center b6  b7  b8  b9"
        "c1  c2  c3  c4  c5  c6  c7  c8  c9  c10 c11";

    .center {
        grid-area: center;
        img {
            width: 200px;
            height: 300px;
            transform-origin: center;
        }
    }

    ${[...Array(11)]
        .map(
            (_, i) => `
        .a${i + 1} { grid-area: a${i + 1}; }
        .b${i + 1} { grid-area: b${i + 1}; }
        .c${i + 1} { grid-area: c${i + 1}; }
    `
        )
        .join("\n")}
`;

export const MoviePoster = styled.div`
    width: 200px;
    height: 300px;
    position: relative;
    z-index: 1;
    transition: all 0.2s ease-out;
    will-change: transform;

    &:hover {
        z-index: 100;
    }

    &:nth-child(3n) {
        transform: translate(${(props) => props.x * 0.08}px, ${(props) => props.y * 0.08}px);
    }

    &:nth-child(3n + 1) {
        transform: translate(${(props) => props.x * 0.06}px, ${(props) => props.y * 0.06}px);
    }

    &:nth-child(3n + 2) {
        transform: translate(${(props) => props.x * 0.05}px, ${(props) => props.y * 0.05}px);
    }

    img {
        width: 200px;
        height: 300px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-out;
        will-change: transform;

        &:hover {
            transform: scale(1.5);
        }
    }

    &.center {
        transform: translate(${(props) => props.x * 0.03}px, ${(props) => props.y * 0.03}px);
    }

    animation: ${floatingAnimation} 3s ease-in-out infinite;
`;
