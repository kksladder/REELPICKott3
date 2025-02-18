import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 1920px;
    height: 1977px;
    background-color: #111;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 168px;
`;

export const SearchBarContainer = styled.div`
    position: relative;
    width: 1778px;
    padding: 20px 30px;
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    margin: 0 auto;

    svg {
        color: #777;
        margin-right: 10px;
    }
`;

export const SearchInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    padding: 15px 0;
    outline: none;

    &::placeholder {
        color: var(--white);
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #777;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
`;

export const NoResultsContainer = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 20px;
    }
`;

export const NoResultsText = styled.p`
    font-size: 20px;
    color: var(--secondary-60);
`;

export const ThumbnailsSection = styled.div`
    position: absolute;
    top: 481px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 30px;
    width: 1850px;
`;

export const ThumbnailsHeader = styled.h2`
    font-size: 24px;
    color: var(--secondary-60);
    border-top: 1px solid #333;
    width: 1778px;
    margin-top: 156px;
    margin-bottom: 50px;
    padding-top: 50px;
`;

export const ThumbnailsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`;

export const ThumbnailItem = styled.div`
    width: 100%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    &:hover {
        opacity: 0.8;
    }
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
`;

export const ThumbnailTitle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
`;

// 드롭다운 관련 스타일
export const DropdownContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 1780px;
    height: 719px;
    background-color: #1c1c1c;
    border: 1px solid #333;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

export const DropdownContent = styled.div`
    padding: 30px;
    height: 100%;
`;

export const DropdownColumns = styled.div`
    display: flex;
    height: 100%;
`;

export const ColumnTitle = styled.h3`
    font-size: 26px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;
`;

export const Column = styled.div`
    flex: 1;
    height: 100%;
    padding: 0 20px;
    overflow-y: auto;
`;

export const LeftColumn = styled(Column)``;
export const MiddleColumn = styled(Column)``;
export const RightColumn = styled(Column)``;

export const Divider = styled.div`
    width: 1px;
    height: 90%;
    background-color: #333;
    margin: auto 0;
`;

export const SearchItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #333;

    &:hover {
        background-color: #252525;
    }
`;

export const SearchItemText = styled.span`
    color: #bbb;
    font-size: var(--font-W-Content-S);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

export const DeleteButton = styled.button`
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: #999;
    }
`;

export const SearchList = styled.ol`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const SearchListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #333;

    &:hover {
        background-color: #252525;
    }
`;

export const RankNumber = styled.span`
    color: ${({ isTop3 }) => (isTop3 ? "#ff5252" : "#666")};
    font-weight: ${({ isTop3 }) => (isTop3 ? "bold" : "normal")};
    margin-right: 15px;
    min-width: 20px;
    text-align: center;
`;

export const UpdateTime = styled.div`
    color: #666;
    font-size: 12px;
    margin-top: 20px;
    text-align: right;
`;
