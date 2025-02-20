// pages/Movie/style.js
import styled, { keyframes } from "styled-components";

// 애니메이션
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 페이지 컨테이너
export const MoviePageContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

// 헤더 영역
export const PageHeader = styled.div`
    margin-bottom: 24px;
`;

export const PageTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
`;

// 영화 그리드
export const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 16px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 12px;
    }
`;

// 영화 카드
export const MovieCard = styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;

// 포스터 이미지
export const PosterImage = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
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
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
