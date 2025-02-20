import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    color: var(--white);
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 168px;
`;

export const SearchBarContainer = styled.div`
    position: relative;
    width: 1778px;
    padding: 20px 30px;
    border-bottom: 1px solid var(--secondary-500);
    display: flex;
    align-items: center;
    margin: 0 auto;

    svg {
        color: var(--secondary-90);
        margin-right: 10px;
    }
`;

export const SearchInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: none;
    color: var(--white);
    font-size: var(--font-W-Content-M);
    padding: 15px 0;
    outline: none;

    &::placeholder {
        color: var(--secondary-70);
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: var(--secondary-90);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
`;

export const NoResultsContainer = styled.div`
    position: absolute;
    top: 250px;
    width: 1836px;
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
    font-size: var(--font-W-Content-M);
    color: var(--secondary-60);
`;

// 릴픽 스타일 그리드 적용
export const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
`;

// 릴픽 스타일 무비카드 적용
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

export const ThumbnailsSection = styled.div`
    width: 90%;
    margin: 250px auto 30px auto;
`;

export const ThumbnailsHeader = styled.h2`
    font-size: var(--font-W-Header);
    color: var(--secondary-40);
    margin-bottom: 40px;
    padding-top: 40px;
    margin-left: 95px;
`;

export const ThumbnailsGrid = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    overflow: hidden;
`;

export const ThumbnailItem = styled.div`
    flex: 0 0 auto; /* 크기 고정 */
    width: 300px; /* 원하는 고정 너비 */
    margin: 0;
    padding: 0;

    &:hover {
        opacity: 0.8;
    }
`;

export const ThumbnailImage = styled.img`
    width: 250px;
    height: 400px;
    object-fit: cover;
    border-radius: 3px;
    margin-left: 100px;
`;

export const ThumbnailTitle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
`;

// 드롭다운 관련 스타일
export const DropdownContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 1780px;
    background-color: var(--secondary-700);
    border: 1px solid var(--secondary-500);
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

export const DropdownContent = styled.div`
    padding: 30px;
    height: 100%;
`;

export const DropdownColumns = styled.div`
    display: flex;
    height: auto;
`;

export const ColumnTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const ColumnTitle = styled.h3`
    font-size: var(--font-W-Header);
    margin-bottom: 15px;
    color: var(--white);
    font-weight: var(--font-weight-SemiBold);
`;

export const ClearAllButton = styled.button`
    background: none;
    border: none;
    color: var(--secondary-90);
    font-size: var(--font-W-Content-S);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
        color: var(--secondary-50);
    }
`;

export const Column = styled.div`
    flex: 1;
    height: 100%;
    padding: 0 20px;
`;

export const LeftColumn = styled(Column)``;
export const MiddleColumn = styled(Column)``;
export const RightColumn = styled(Column)`
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Divider = styled.div`
    width: 1px;
    height: 90%;
    background-color: var(--secondary-500);
    margin: auto 0;
`;

export const SearchItem = styled.div`
    position: relative;
    padding: 12px 10px;
`;

export const SearchItemText = styled.span`
    color: var(--secondary-70);
    font-size: var(--font-W-Content-S);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 30px);
`;

export const DeleteButton = styled.button`
    background: none;
    border: none;
    color: var(--secondary-200);
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    padding: 0;

    &:hover {
        color: var(--secondary-50);
    }
`;

export const SearchList = styled.ol`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SearchListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--secondary-500);

    &:hover {
        background-color: var(--secondary-600);
    }
`;

export const RankNumber = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border-radius: 50%;
    font-weight: var(--font-weight-SemiBold);

    /* data-top3 속성을 사용하도록 변경 */
    color: ${(props) => (props["data-top3"] ? "var(--white)" : "var(--secondary-500)")};
    background-color: ${(props) => (props["data-top3"] ? "var(--primary-40)" : "transparent")};
`;

export const UpdateTime = styled.div`
    color: var(--secondary-200);
    font-size: var(--font-footer);
    margin-top: 20px;
    text-align: right;
`;

// 검색 결과 관련 스타일
export const SearchResultsSection = styled.div`
    width: 90%;
    margin: 30px auto;
`;

export const SearchResultsHeader = styled.h2`
    font-size: var(--font-W-Header);
    color: var(--white);
    margin-bottom: 30px;
    padding-bottom: 15px;
`;

export const SearchResultsCount = styled.h3`
    font-size: 30px;
    font-weight: semi-bold;
    color: var(--white);
    margin-bottom: 30px;
`;

// 체크 아이콘 스타일 (릴픽추천 페이지에서 가져옴)
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

// 추천 영화 관련 스타일
export const RecommendationsSection = styled.div`
    width: 90%;
    margin: 70px auto 30px auto;

    padding-top: 40px;
    position: relative;
    z-index: 0;
`;

export const RecommendationsHeader = styled.h2`
    font-size: 30px;
    font-weight: semi-bold;
    color: var(--secondary-40);
    margin-bottom: 40px;
    position: relative;
    padding-top: 40px;
    border-top: 1px solid var(--secondary-500);
    margin-left: 30px;

    &:before {
        content: "";
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 24px;
        border-radius: 2px;
    }
`;
