// pages/Movie/style.js
import styled, { keyframes } from "styled-components";

// 애니메이션
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 페이지 컨테이너
export const MoviePageContainer = styled.div`
    max-width: 100%x;
    margin: 0 auto;
    padding: 64px;
    margin-top: 30px;
`;

// 헤더 영역
export const PageHeader = styled.div`
    margin-bottom: 100px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PageTitle = styled.h1`
position: absolute;
    font-size: 30px;
    font-weight: 700;
    /* width: fit-content; */
    padding: 15px 20px;
    border: 1px solid var(--primary-40);
    border-radius: 50px;
`;

// 그리드 레이아웃
export const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 16px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 12px;
    }
`;

// 영화 카드
export const MovieCard = styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: all 0.3s ease;
    height: 100%;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    }
`;

// 포스터 이미지
export const PosterImage = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
    border-radius: 8px 8px 0 0;
    transition: transform 0.3s ease;

    ${MovieCard}:hover & {
        transform: scale(1.05);
    }
`;

// 영화 정보 컨테이너
export const MovieInfo = styled.div`
    padding: 10px;
`;

// 영화 제목
export const MovieTitle = styled.h3`
    margin: 0 0 5px 0;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
`;

// 개봉년도
export const ReleaseYear = styled.div`
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;
`;

// 평점
export const MovieRating = styled.div`
    font-size: 13px;
    color: #f5c518;
    font-weight: 500;
`;

// 로딩 스피너
export const LoadingSpinner = styled.div`
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #f59c04;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

export const ScrollTopButton = styled.button`
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 82px;
    height: 82px;
    border-radius: 30.63px;
    background: linear-gradient(135deg, var(--primary-10) 0%, var(--primary-30) 33%, var(--primary-90) 100%);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-40);
    opacity: ${(props) => (props.visible ? "1" : "0")};
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
    }

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
        bottom: 20px;
        right: 20px;
    }
`;
export const TopIcon = styled.button`
.mov-item {
        width: 100%;
        height: auto;
    }
    .mov-list {
        margin-top: 80px;
    }
    .top-icon{
        position: fixed;
        right: 50px;
        bottom: 50px;
        z-index: 1;
        cursor: pointer;
    }
`
