// components/common/ContentGrid.style.js
import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

export const CardItem = styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const PosterImage = styled.img`
    width: 200px;
    height: 400px;
    aspect-ratio: 2/3;
    object-fit: cover;
`;

export const ContentInfo = styled.div`
    padding: 12px;
`;

export const Title = styled.h3`
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Rating = styled.div`
    font-size: 14px;
    color: #f5c518;
    margin-bottom: 4px;
`;

export const ReleaseYear = styled.div`
    font-size: 14px;
    color: #757575;
`;
