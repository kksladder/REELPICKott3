import { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #141414;
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    position: relative;
    padding: 30px;
`;

const ModalTitle = styled.h2`
    color: white;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 30px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-bottom: 20px;
`;

const ImageItem = styled.div`
    aspect-ratio: 1;
    background: #d9d9d9;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 12px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    &:first-child {
        background: #f59c04;
        color: white;
    }

    &:last-child {
        background: transparent;
        border: 1px solid #3f3f46;
        color: white;
    }
`;

const ProfileModal = ({ isOpen, onClose }) => {
    // 16개의 더미 이미지 배열 생성
    const images = Array(16).fill(null);

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <MdClose />
                </CloseButton>

                <ModalTitle>프로필 선택</ModalTitle>

                <ImageGrid>
                    {images.map((_, index) => (
                        <ImageItem key={index} />
                    ))}
                </ImageGrid>

                <ButtonGroup>
                    <Button>프로필등록</Button>
                    <Button onClick={onClose}>취소</Button>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ProfileModal;
