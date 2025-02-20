import styled from "styled-components";

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
    background-color: var(--black);
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
    font-size: var(--font-W-Content-M);
    font-weight: var(--font-weight-SemiBold);
    color: var(--white);
    margin-bottom: 33px;
`;

export const ModalText = styled.p`
    font-size: var(--font-W-Content-S);
    font-weight: var(--font-weight-Light);
    color: var(--white);
    text-align: center;
    line-height: var(--line-height-base);
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
    font-size: var(--font-W-Content-S);
    font-weight: var(--font-weight-Regular);
    cursor: pointer;
    background-color: ${(props) => (props.isSkip ? "transparent" : "var(--primary-40)")};
    color: var(--white);
    border: ${(props) => (props.isSkip ? "1px solid var(--white)" : "none")};
    transition: all 0.2s ease;

    &:hover {
        background-color: ${(props) => (props.isSkip ? "rgba(255, 255, 255, 0.1)" : "var(--primary-50)")};
    }
`;
