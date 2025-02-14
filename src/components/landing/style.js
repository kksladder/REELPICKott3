import styled, { keyframes } from 'styled-components';

const floatingAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`;

export const OverboardWindow = styled.div`
    height: 100vh;
    width: 1920px;
    height: 800px;
    overflow: hidden;
`;

export const Overboard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: translate(calc(${(props) => props.x}%), calc(${(props) => props.y}%));
    transition: transform 0.1s linear;
`;
export const ImagesPlacer = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 0px;
    width: 100%;
    height: 100%;
    place-items: center;

    .a {
        grid-area: 3 / 4;
    } // 상단 중앙 좌측
    .b {
        grid-area: 4 / 2;
    } // 중단 왼쪽
    .c {
        grid-area: 6 / 3;
    } // 하단 좌측
    .d {
        grid-area: 3 / 6;
    } // 상단 우측
    .e {
        grid-area: 4 / 7;
    } // 중단 우측
    .f {
        grid-area: 7 / 6;
    } // 하단 우측
    .g {
        grid-area: 2 / 5;
    } // 최상단 중앙
    .h {
        grid-area: 12 / 7;
    } // 중하단 우측
    .i {
        grid-area: 7 / 4;
    } // 하단 중앙 좌측
    .j {
        grid-area: 9 / 5;
    } // 중단 중앙
    .k {
        grid-area: 6 / 7;
    } // 하단 우측
    .l {
        grid-area: 5 / 3;
    } // 중하단 좌측
    .m {
        grid-area: 4 / 5;
    } // 중앙 (고정)
    .n {
        grid-area: 3 / 8;
    } // 상단 맨우측
    .o {
        grid-area: 6 / 5;
    } // 하단 중앙
    .p {
        grid-area: 4 / 10;
    } // 중단 맨우측
`;

export const MoviePoster = styled.div`
    width: 200px;
    height: 300px;
    position: relative;
    transition: all 1.2s ease-in-out;
    z-index: 1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.1s linear;

        &:hover {
            transform: scale(1.5);
            z-index: 10;
        }
    }

    animation: ${floatingAnimation} 3s ease-in-out infinite;
`;
