import { useState } from "react";
import { MdCheckCircle, MdClose } from "react-icons/md";
import styled from "styled-components";

const images = [
    "/images/profile1.png",
    "/images/profile2.png",
    "/images/profile3.png",
    "/images/profile4.png",
    "/images/profile5.png",
    "/images/profile6.png",
    "/images/profile7.png",
    "/images/profile_rupee.png",
    "/images/profile_ruppee2.png",
];

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
    overflow: hidden;
    position: relative; // 아이콘을 이미지 위에 올리기 위해

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 이미지 비율을 유지하며 크기에 맞게 자르기 */
    }

    &:hover {
        opacity: 0.8;
    }

    /* 체크 아이콘 스타일 */
    .check-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(0, 0, 0, 0.2);
        font-size: 30px;
        opacity: 0; /* 기본적으로 숨기기 */
        transition: opacity 0.3s;
    }

    /* 호버 시 체크 아이콘 보이게 */
    &:hover .check-icon {
        opacity: 1;
    }

    /* 체크된 이미지에서 체크 아이콘 보이기 */
    &.checked .check-icon {
        opacity: 1;
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

const ProfileModal = ({ isOpen, onClose, onProfileSelect, onProfileSelect2 }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image); // 선택된 이미지 상태 설정
    };

    const handleProfileRegister = () => {
        if (selectedImage) {
            onProfileSelect(selectedImage); // 부모로 선택된 이미지 전달
            onProfileSelect2(selectedImage);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <MdClose />
                </CloseButton>

                <ModalTitle>프로필 선택</ModalTitle>

                <ImageGrid>
                    {images.map((image, index) => (
                        <ImageItem
                            key={index}
                            className={selectedImage === image ? "checked" : ""}
                            onClick={() => handleImageClick(image)}
                        >
                            <img src={image} alt={`Profile ${index + 1}`} />
                            <MdCheckCircle className="check-icon" />
                        </ImageItem>
                    ))}
                </ImageGrid>

                <ButtonGroup>
                    <Button onClick={handleProfileRegister}>프로필등록</Button>
                    <Button onClick={onClose}>취소</Button>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ProfileModal;
