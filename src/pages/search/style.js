import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 1920px;
    height: 1900px;
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
    top: 200px;
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

export const ThumbnailsSection = styled.div`
    position: absolute;
    top: 480px;
    right: 85px;
    margin: 0 auto;
    padding: 0 30px;
    width: 1837px;
`;

export const ThumbnailsHeader = styled.h2`
    font-size: var(--font-W-Header);
    color: var(--secondary-40);
    width: 1765px;
    margin-top: 156px;
    margin-bottom: 50px;
    padding-top: 50px;
    margin-left: 100px;
`;

export const ThumbnailsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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
    width: 100%;
    margin-top: 30px;
`;

export const SearchResultsHeader = styled.h2`
    font-size: var(--font-W-Header);
    color: var(--white);
    margin-bottom: 30px;
    padding-bottom: 15px;
`;

export const SearchResultsCount = styled.h3`
    font-size: var(--font-W-Header);
    font-weight: var(--font-weight-Medium);
    color: var(--white);
    margin-left: 100px;
`;

// 가로 스크롤을 위한 SearchResultsGrid 수정
export const SearchResultsGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 24px;
    width: 100%;
    padding-bottom: 16px;

    /* 스크롤바 스타일링 (선택사항) */
    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: var(--secondary-30);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--secondary-90);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-400);
    }
`;

export const SearchResultsContainer = styled.div`
    width: 1778px;
    margin: 40px auto;
    padding: 0 30px;
`;

export const SearchResultItem = styled.div`
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid var(--secondary-500);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

export const SearchResultImage = styled.img`
    width: 100px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 20px;
    flex-shrink: 0;
`;

export const SearchResultInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const SearchResultTitle = styled.h3`
    font-size: var(--font-W-Content-M);
    color: var(--white);
    margin-bottom: 10px;

    span {
        color: var(--secondary-50);
        font-weight: var(--font-weight-Regular);
    }
`;

export const SearchResultMeta = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

export const SearchResultReleaseDate = styled.span`
    font-size: var(--font-W-Content-S);
    color: var(--secondary-50);
    margin-right: 20px;
`;

export const SearchResultRating = styled.span`
    font-size: var(--font-W-Content-S);
    color: var(--primary-40);
    display: flex;
    align-items: center;

    &::before {
        content: "★";
        margin-right: 4px;
    }
`;

export const SearchResultOverview = styled.p`
    font-size: var(--font-W-Content-S);
    color: var(--secondary-40);
    line-height: 1.5;
    max-height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const SearchResultContent = styled.p`
    font-size: var(--font-W-Content-S);
    color: var(--secondary-50);
    line-height: 1.5;
`;

// 로딩 스피너
export const LoadingSpinner = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border-top-color: var(--white);
    margin: 50px auto;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

// 페이지네이션
export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    padding: 20px 0;
`;

export const PaginationButton = styled.button`
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover:not(:disabled) {
        background-color: rgba(255, 255, 255, 0.2);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

// 추천 영화 관련 스타일
export const RecommendationsSection = styled.div`
    margin-top: 30px;
    width: 100%;
    padding-right: 70px;
`;

export const RecommendationsHeader = styled.h2`
    font-size: var(--font-W-Header);
    font-weight: var(--font-weight-Medium);
    color: var(--secondary-40);
    margin-bottom: 40px;
    gap: 5px;
    position: relative;
    padding-left: 100px;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 24px;
        border-radius: 2px;
    }
`;

// 추천 영화 그리드도 가로 스크롤 적용
export const RecommendationsGrid = styled(SearchResultsGrid)`
    /* SearchResultsGrid와 동일한 스타일 상속 */
`;

// ThumbnailItem을 가로 스크롤에 맞게 수정
export const HorizontalThumbnailItem = styled(ThumbnailItem)`
    flex: 0 0 auto;
    width: 180px;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const PageInfo = styled.span`
    color: var(--secondary-50);
    font-size: var(--font-W-Content-S);
`;
