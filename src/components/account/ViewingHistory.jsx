import { forwardRef, useState } from "react";
import styled from "styled-components";
import { FaTrashAlt, FaCheck, FaTimes, FaChevronDown } from "react-icons/fa";

// Styled Components
const Container = styled.div`
    max-width: 70.1875rem;

    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 70px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 25px;
    border-radius: 5px 5px 0px 0px;
    justify-content: space-between;
    background: var(--black-black-b-600-input-hover-bg, #2e2e2e);
    cursor: pointer;
`;

const Title = styled.h2`
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
`;

const Content = styled.div`
    padding: 1rem;
    margin-bottom: 70px;
    background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
    box-shadow: 0px 7px 10.7px 0px rgba(0, 0, 0, 0.38) inset;
`;

const ControlBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const TotalCount = styled.div`
    color: #9ca3af;
    font-size: 0.875rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const SelectAllButton = styled.button`
    display: flex;
    align-items: center;
    color: white;
    background-color: #2563eb;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    &:hover {
        background-color: #1d4ed8;
    }
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
        color: #ef4444;
    }
    transition: color 0.2s;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;
    border-bottom: 1px solid #4a4a4a;
    &:hover {
        background-color: #404040;
    }
    background-color: ${(props) => (props.selected ? "#404040" : "transparent")};
`;

const ItemContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ItemDate = styled.span`
    color: #9ca3af;
    font-size: 0.875rem;
`;

const ItemText = styled.span`
    color: white;
`;

const EmptyMessage = styled.div`
    text-align: center;
    padding: 1.5rem 0;
    color: #9ca3af;
`;

const MainTitle = styled.p`
    margin-top: 60px;
    margin-bottom: 20px;
    color: white;
`;

// 팝업 관련 스타일 컴포넌트
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    width: 1022px;
    padding: 3rem;
    background-color: #1f1f1f;
    border-radius: 8px;
    overflow: hidden;
`;

const ModalHeader = styled.div`
    position: relative;
    padding: 16px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

const ModalTitle = styled.h3`
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    text-align: center;
`;

const ModalMessage = styled.p`
    color: #9ca3af;
    padding: 16px;
    margin: 0;
    text-align: center;
    line-height: 1.2;
`;

const ModalButtons = styled.div`
    display: flex;
    padding: 16px;
`;

const ConfirmButton = styled.button`
    flex: 1;
    padding: 10px;
    background-color: #f59e0b;
    color: white;
    border: none;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
    &:hover {
        background-color: #d97706;
    }
`;

const CancelButton = styled.button`
    flex: 1;
    padding: 10px;
    background-color: #374151;
    color: white;
    border: none;
    border-radius: 4px;
    margin-left: 8px;
    cursor: pointer;
    &:hover {
        background-color: #4b5563;
    }
`;
const FaChevronUp = styled(FaChevronDown)`
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease-in-out;
`;

const ViewingHistory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isMultiDelete, setIsMultiDelete] = useState(false);

    // 예시 데이터
    const [historyItems, setHistoryItems] = useState([
        { id: 1, date: "2025-01-12", text: "CH.신서유기 레전드 장면들" },
        { id: 2, date: "2025-01-12", text: "CH.신서유기 레전드 장면들" },
        { id: 3, date: "2025-01-12", text: "CH.신서유기 레전드 장면들" },
        { id: 4, date: "2025-01-12", text: "CH.신서유기 레전드 장면들" },
        { id: 5, date: "2025-01-12", text: "CH.신서유기 레전드 장면들" },
        { id: 6, date: "2025-01-12", text: "CH.신서유기 레전드 장면들" },
    ]);

    const toggleOpen = () => setIsOpen(!isOpen);

    const toggleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const showDeleteConfirmation = (id, e) => {
        if (e) e.stopPropagation();
        setItemToDelete(id);
        setIsMultiDelete(false);
        setShowDeletePopup(true);
    };

    const showMultiDeleteConfirmation = () => {
        setIsMultiDelete(true);
        setShowDeletePopup(true);
    };

    const handleDeleteConfirm = () => {
        if (isMultiDelete) {
            setHistoryItems(historyItems.filter((item) => !selectedItems.includes(item.id)));
            setSelectedItems([]);
        } else if (itemToDelete !== null) {
            setHistoryItems(historyItems.filter((item) => item.id !== itemToDelete));
        }
        setShowDeletePopup(false);
        setItemToDelete(null);
    };
    const H1 = styled.h1`
        font-size: 40px;
        font-weight: 700;
        margin-top: 50px;
        margin-bottom: 30px;
    `;
    const handleDeleteCancel = () => {
        setShowDeletePopup(false);
        setItemToDelete(null);
        setIsMultiDelete(false);
    };

    return (
        <Container id ="viewing-seciton">
            {/* <H1>계정</H1> */}
            <MainTitle>시청기록관리</MainTitle>
            <Header onClick={toggleOpen}>
                <Title>시청 기록</Title>
                <FaChevronUp isOpen={isOpen} />
            </Header>

            {isOpen && (
                <Content>
                    {historyItems.length > 0 && (
                        <ControlBar>
                            <TotalCount>전체 기록 {historyItems.length}개</TotalCount>
                            <ButtonGroup>
                                <SelectAllButton onClick={() => setSelectedItems(historyItems.map((item) => item.id))}>
                                    <FaCheck size={12} style={{ marginRight: "0.25rem" }} />
                                    전체선택
                                </SelectAllButton>
                                {selectedItems.length > 0 && (
                                    <DeleteButton onClick={showMultiDeleteConfirmation}>
                                        <FaTrashAlt size={16} />
                                    </DeleteButton>
                                )}
                            </ButtonGroup>
                        </ControlBar>
                    )}

                    <ItemList>
                        {historyItems.map((item) => (
                            <Item
                                key={item.id}
                                selected={selectedItems.includes(item.id)}
                                onClick={() => toggleSelectItem(item.id)}
                            >
                                <ItemContent>
                                    <ItemDate>{item.date}</ItemDate>
                                    <ItemText>{item.text}</ItemText>
                                </ItemContent>
                                <DeleteButton onClick={(e) => showDeleteConfirmation(item.id, e)}>
                                    <FaTrashAlt size={16} />
                                </DeleteButton>
                            </Item>
                        ))}
                    </ItemList>

                    {historyItems.length === 0 && <EmptyMessage>시청 기록이 없습니다</EmptyMessage>}
                </Content>
            )}

            {showDeletePopup && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>시청 기록을 삭제하시겠습니까?</ModalTitle>
                            <CloseButton onClick={handleDeleteCancel}>
                                <FaTimes />
                            </CloseButton>
                        </ModalHeader>
                        <ModalMessage>
                            시청 기록을 삭제하시는 경우, <br />  다시 시청하지 않는 이상 ReelPick 서비스에서 시청한
                            콘텐츠로 표시되지 않으며, 콘텐츠 추천에도 이용되지 않습니다.
                        </ModalMessage>
                        <ModalButtons>
                            <ConfirmButton onClick={handleDeleteConfirm}>삭제</ConfirmButton>
                            <CancelButton onClick={handleDeleteCancel}>취소</CancelButton>
                        </ModalButtons>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default ViewingHistory;
