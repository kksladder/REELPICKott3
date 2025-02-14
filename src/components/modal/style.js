import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    width: 640px;
    height: 500px;
    background-color: black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    margin-bottom: 80px;
`;

export const SmallLogo = styled.img`
    width: 65px;
    height: 65px;
    margin-top: 26px;
    margin-bottom: 48px;
`;

export const ModalTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: 33px;
`;

export const ModalText = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: white;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 26px;
`;

export const ModalButton = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    background-color: ${(props) => (props.isSkip ? 'transparent' : '#F59C04')};
    color: white;
    border: ${(props) => (props.isSkip ? '1px solid white' : 'none')};
    transition: all 0.2s ease;

    &:hover {
        background-color: ${(props) => (props.isSkip ? 'rgba(255, 255, 255, 0.1)' : '#d88a00')};
    }
`;
