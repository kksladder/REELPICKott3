// pages/Director/style.js
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const DirectorPageContainer = styled.div`
    max-width: 100%x;
    margin: 0 auto;
    padding: 64px;
    margin-top: 200px;
`;

export const PageHeader = styled.div`
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PageTitle = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin: 0;
`;

export const DirectorGrid = styled.div`
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

export const DirectorCard = styled.div`
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

export const ProfileImage = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
    border-radius: 8px 8px 0 0;
    transition: transform 0.3s ease;

    ${DirectorCard}:hover & {
        transform: scale(1.05);
    }
`;

export const LoadingSpinner = styled.div`
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
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

export const CountrySelect = styled.select`
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
    background-color: white;
    cursor: pointer;

    &:hover {
        border-color: #aaa;
    }

    &:focus {
        outline: none;
        border-color: var(--primary-40);
    }
`;
