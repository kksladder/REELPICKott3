import { ModalWrapper, ModalContent, SmallLogo, ModalTitle, ModalText, ButtonContainer, ModalButton } from './style';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, onSelectPoster }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleContentSelect = () => {
        onClose();
        onSelectPoster();
    };

    const handleSkip = () => {
        onClose();
        navigate('/main');
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <SmallLogo src='/public/images/smallLOGO.svg' alt='smalllogo' />
                <ModalTitle>릴픽과 함께 취향저격 컨텐츠를 담아보세요 </ModalTitle>
                <ModalText>
                    콘텐츠 5가지 이상 골라담아 보세요 <br /> 많이 담을수록 좋은 컨텐츠 추천 해드릴게요 !!
                </ModalText>
                <ButtonContainer>
                    <ModalButton onClick={handleContentSelect}>컨텐츠 담아보기</ModalButton>
                    <ModalButton onClick={handleSkip} isSkip>
                        건너뛰기
                    </ModalButton>
                </ButtonContainer>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
