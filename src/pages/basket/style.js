import styled from 'styled-components';

export const BasketTitle = styled.h2`
    font-size: var(--font-T-MainHeader);
    font-weight: var(--font-weight-Bold);
    color: var(--primary-40);
    margin-bottom: 20px;
    text-align: center;
    margin-top: 75px;

    @media screen and (max-width: 768px) {
        font-size: var(--font-M-MainHeader);
        margin: 40px 0 15px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        gap: 15px;
    }
`;

export const ReelpickButton = styled.button`
    display: block;
    margin: 75px auto 70px;
    background-color: var(--primary-40);
    color: var(--secondary-00);
    width: 150px;
    height: 56px;
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 75px;
    margin-bottom: 70px;
    font-size: var(--font-body-Medium);
    min-width: 100px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--primary-50);
    }

    @media screen and (max-width: 768px) {
        width: 120px;
        height: 48px;
        margin: 40px 0;
        font-size: var(--font-M-Content-M);
    }
`;

export const BasketGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 288px);
    gap: 20px;
    padding: 0 75px;
    justify-content: center;
    margin: 0 auto;

    @media screen and (max-width: 1850px) {
        grid-template-columns: repeat(5, 288px);
    }

    @media screen and (max-width: 1600px) {
        grid-template-columns: repeat(4, 288px);
    }

    @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(3, 288px);
        padding: 0 50px;
    }

    @media screen and (max-width: 950px) {
        grid-template-columns: repeat(2, 288px);
        gap: 15px;
        padding: 0 30px;
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: repeat(1, 288px);
        gap: 10px;
        padding: 0 20px;
    }
`;

export const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 288px;
    height: 432px;
`;

export const MovieCard = styled.div`
    position: relative;
    width: 288px;
    height: 432px;
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.2s ease;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
        transform: scale(1.05);
    }
`;

export const MovieImage = styled.img`
    width: 288px;
    height: 432px;
    object-fit: cover;
    flex-shrink: 0;
`;

export const EmptyMessage = styled.div`
    text-align: center;
    padding: 40px;
    font-size: 18px;
    color: #666;
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
    opacity: ${(props) => (props.visible ? '1' : '0')};
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
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

export const ReelpickReturn = styled.button`
    background-color: var(--primary-40);
    color: var(--secondary-00);
    width: 150px;
    height: 56px;
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 75px;
    margin-bottom: 70px;
    font-size: var(--font-body-Medium);
    min-width: 100px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--primary-50);
    }

    @media screen and (max-width: 768px) {
        width: 120px;
        height: 48px;
        margin: 40px auto;
        font-size: var(--font-M-Content-M);
    }
`;
