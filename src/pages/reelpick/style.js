import styled from "styled-components";

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    font-size: 1.5rem;
`;

export const ReelpickWrapper = styled.div`
    padding: 0 68px;
    background-color: var(--background-color);
    min-height: 100vh;
    margin-bottom: 75px;
    @media screen and (max-width: 1024px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const ReelpickTitle = styled.h2`
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

export const Button = styled.button`
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

export const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
`;

export const MovieCard = styled.div`
    position: relative;
    aspect-ratio: 2/3;
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CheckIcon = styled.div`
    position: absolute;
    top: 165px;
    left: 77px;
    width: 123px;
    height: 123px;
    background: linear-gradient(135deg, var(--primary-10) 0%, var(--primary-30) 33%, var(--primary-90) 100%);
    border-radius: 30.63px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-40);
    font-size: 70px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 1024px) {
        top: 140px;
        left: 65px;
        width: 100px;
        height: 100px;
        font-size: 50px;
    }

    @media screen and (max-width: 768px) {
        top: 120px;
        left: 55px;
        width: 80px;
        height: 80px;
        font-size: 40px;
    }
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

//카트섹션//
export const CartWrapper = styled.div`
    position: fixed;
    width: auto;
    height: auto;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

export const CartContainer = styled.div`
    max-width: 851px;
    margin: 0 auto;
    border: 1px solid var(--secondary-90);
    border-bottom: none;
    border-radius: 5px 5px 0 0;
`;

export const CartHeader = styled.div`
    width: 850px;
    background: var(--primary-40);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px 5px 0 0;
    font-weight: 500;

    span {
        display: flex;
        align-items: center;
        color: var(--secondary-00);
        gap: 8px;
        font-weight: var(--font-weight-medium);
        font-size: large;
    }

    button {
        background: none;
        border: none;
        color: var(--secondary-00);
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }
`;

export const CartContent = styled.div`
    width: 100%;
    height: 130px;
    padding: 16px 24px;
    background: var(--background-color);
    border-radius: 5px 5px 0 0;
    overflow: hidden;
`;

export const CartItemsContainer = styled.div`
    display: flex;
    gap: 20px;
    min-height: 120px;
    padding-bottom: 8px;
`;

export const CartItem = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 63px;
    color: var(--primary-40);
`;

export const CartItemImage = styled.img`
    width: 63px;
    height: 88px;
    object-fit: cover;
    border-radius: 2px;
`;

export const RemoveButton = styled.button`
    position: absolute;
    background: var(--secondary-900);
    color: var(--secondary-100);
    top: -10px;
    right: -8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border: 1px solid var(--secondary-100);
    /* border: none; */
    cursor: pointer;

    &:hover {
        color: var(--primary-40);
        opacity: 0.7;
    }
`;

export const EmptySlot = styled.div`
    width: 63px;
    height: 88px;
    border: 2px dashed var(--primary-20);
    border-radius: 4px;
    flex-shrink: 0;
`;
