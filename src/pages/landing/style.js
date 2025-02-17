import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`;

export const OverboardWindow = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #000;
`;

export const Overboard = styled.div`
    width: 200vw;
    height: 200vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(${(props) => props.x}px, ${(props) => props.y}px);
    transition: transform 0.1s ease-out;
`;

export const ImagesPlacer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
        ". . . . . . . ."
        ". . . . . . . ."
        ". . . . . . . ."
        ". . . . . . . ."
        ". . . . . . . ."
        ". . . . . . . .";
    gap: 30vh 30vw;
    transform: translate(-25%, -25%);
`;

export const MoviePoster = styled.div`
    width: 200px;
    height: 300px;
    position: relative;
    transform: scale(0.8);
    transition: all 0.3s ease;
    opacity: 0.7;

    &:hover {
        transform: scale(1);
        opacity: 1;
        z-index: 10;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }

    .movie-info {
        position: absolute;
        bottom: -40px;
        left: 0;
        right: 0;
        text-align: center;
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover .movie-info {
        opacity: 1;
    }

    &.${(props) => props.className} {
        animation: ${floatingAnimation} 3s ease-in-out infinite;
    }
`;
