import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const DirectorPageContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 64px;
    margin-top: 30px;
`;
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

export const DirectorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 16px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 12px;
    }
`;

export const DirectorCard = styled.div`
    position: relative;
    aspect-ratio: 2/3;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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
export const DirectorName = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: white;
`;

export const KnownForTitle = styled.p`
    font-size: 14px;
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:not(:last-child) {
        margin-bottom: 4px;
    }
`;
export const DirectorCardOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
    color: white;
    opacity: 1;
    transition: opacity 0.3s ease;

    ${DirectorCard}:hover & {
        opacity: 1;
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