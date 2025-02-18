import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import {
    SearchContainer,
    SearchBarContainer,
    SearchInput,
    CloseButton,
    NoResultsContainer,
    NoResultsText,
    ThumbnailsSection,
    ThumbnailsHeader,
    ThumbnailsGrid,
    ThumbnailItem,
    ThumbnailImage,
    ThumbnailTitle,

    // 드롭다운 관련 스타일
    DropdownContainer,
    DropdownContent,
    DropdownColumns,
    ColumnTitle,
    ColumnTitleContainer,
    LeftColumn,
    RightColumn,
    Divider,
    SearchItem,
    SearchItemText,
    DeleteButton,
    SearchList,
    SearchListItem,
    RankNumber,
    UpdateTime,
    ClearAllButton,
} from "./style";

// 로컬스토리지 키
const RECENT_SEARCHES_KEY = "recentSearches";
// 최대 저장 검색어 수
const MAX_RECENT_SEARCHES = 10;

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchContainerRef = useRef(null);
    const searchInputRef = useRef(null);

    // 최근 검색어 상태 관리 - 초기값은 빈 배열
    const [recentSearches, setRecentSearches] = useState([]);

    // 실시간 인기 검색어 데이터
    const popularSearches = [
        { id: 1, text: "워터멜론 코난 : 100만 달러의 백태경주 - 극장판 27기" },
        { id: 2, text: "창문은 못 닫았어" },
        { id: 3, text: "사냥꾼" },
        { id: 4, text: "골건은 무덤에" },
        { id: 5, text: "침입" },
        { id: 6, text: "언네임드 히어" },
        { id: 7, text: "착한말" },
        { id: 8, text: "원피스 골드 : 100만 달러의 필름 스트라이크 - 극장판 26기" },
        { id: 9, text: "원피스 골드 : 100만 달러의 필름 스트라이크 - 극장판 25기" },
        { id: 10, text: "원피스 골드 : 100만 달러의 필름 스트라이크 - 극장판 28기" },
    ];

    // 컴포넌트 마운트 시 로컬스토리지에서 최근 검색어 불러오기
    useEffect(() => {
        const savedSearches = localStorage.getItem(RECENT_SEARCHES_KEY);
        if (savedSearches) {
            try {
                const parsedSearches = JSON.parse(savedSearches);
                setRecentSearches(parsedSearches);
            } catch (error) {
                console.error("Failed to parse saved searches:", error);
                // 파싱 오류 시 로컬스토리지 초기화
                localStorage.removeItem(RECENT_SEARCHES_KEY);
            }
        }
    }, []);

    // 외부 클릭 감지 로직
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 검색어를 로컬스토리지에 저장하는 함수
    const saveRecentSearchesToLocalStorage = (searches) => {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches));
    };

    // 새 검색어 추가 함수
    const addRecentSearch = (searchText) => {
        if (!searchText.trim()) return;

        const newSearch = { id: Date.now(), text: searchText.trim() };

        // 중복 검색어 필터링
        const filteredSearches = recentSearches.filter(
            (item) => item.text.toLowerCase() !== searchText.trim().toLowerCase()
        );

        // 최대 개수 제한하여 새 검색어 추가 (최신 검색어가 맨 앞에 위치)
        const updatedSearches = [newSearch, ...filteredSearches].slice(0, MAX_RECENT_SEARCHES);

        setRecentSearches(updatedSearches);
        saveRecentSearchesToLocalStorage(updatedSearches);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setShowResults(value.length > 0);

        // 검색어 입력 시 드롭다운 닫기
        if (value.length > 0) {
            setIsDropdownOpen(false);
        }
    };

    // 검색 실행 함수 (Enter 키 누를 때 또는 검색 버튼 클릭 시)
    const executeSearch = () => {
        if (searchQuery.trim()) {
            // 검색어 로컬스토리지에 저장
            addRecentSearch(searchQuery);

            // 실제 검색 로직은 여기에 구현
            console.log("검색 실행:", searchQuery);

            // 필요하다면 검색 후 드롭다운 닫기
            setIsDropdownOpen(false);
        }
    };

    // Enter 키 감지
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            executeSearch();
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
        setShowResults(false);
        setIsDropdownOpen(false);
    };

    const handleSearchBarFocus = () => {
        // 검색어가 없을 때만 드롭다운 열기
        if (searchQuery.length === 0) {
            setIsDropdownOpen(true);
        }
    };

    // 최근 검색어 클릭 시 해당 검색어로 검색
    const handleSearchItemClick = (searchText) => {
        setSearchQuery(searchText);
        setShowResults(true);
        setIsDropdownOpen(false);
        // 검색어를 검색창에 설정하고 검색 실행
        setTimeout(() => {
            executeSearch();
        }, 0);
    };

    // 최근 검색어 삭제 함수
    const handleDeleteRecentSearch = (id, e) => {
        // 이벤트 버블링 방지
        e.stopPropagation();

        const updatedSearches = recentSearches.filter((item) => item.id !== id);
        setRecentSearches(updatedSearches);
        saveRecentSearchesToLocalStorage(updatedSearches);
    };

    // 모든 최근 검색어 삭제 함수
    const clearAllRecentSearches = () => {
        setRecentSearches([]);
        localStorage.removeItem(RECENT_SEARCHES_KEY);
    };

    // Mock data for thumbnails (5 identical thumbnails as shown in the image)
    const thumbnails = Array(5).fill({
        id: 1,
        imageUrl: "/images/casino.jpg",
        title: "카지노",
    });

    return (
        <SearchContainer ref={searchContainerRef}>
            <SearchBarContainer>
                <IoIosSearch size={40} onClick={executeSearch} style={{ cursor: "pointer" }} />
                <SearchInput
                    ref={searchInputRef}
                    type="text"
                    placeholder="검색어 내용을 입력해 주세요."
                    value={searchQuery}
                    onChange={handleSearch}
                    onFocus={handleSearchBarFocus}
                    onKeyPress={handleKeyPress}
                />
                {(searchQuery || isDropdownOpen) && (
                    <CloseButton onClick={clearSearch}>
                        <IoCloseOutline size={40} />
                    </CloseButton>
                )}

                {/* 드롭다운 통합 */}
                {isDropdownOpen && (
                    <DropdownContainer>
                        <DropdownContent>
                            <DropdownColumns>
                                <LeftColumn>
                                    <ColumnTitleContainer>
                                        <ColumnTitle>최근 검색어</ColumnTitle>
                                        {recentSearches.length > 0 && (
                                            <ClearAllButton onClick={clearAllRecentSearches}>
                                                <IoClose size={18} />
                                                모두 지우기
                                            </ClearAllButton>
                                        )}
                                    </ColumnTitleContainer>
                                    {recentSearches.length > 0 ? (
                                        recentSearches.map((item) => (
                                            <SearchItem
                                                key={item.id}
                                                onClick={() => handleSearchItemClick(item.text)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <SearchItemText>{item.text}</SearchItemText>
                                                <DeleteButton
                                                    onClick={(e) => handleDeleteRecentSearch(item.id, e)}
                                                    aria-label="삭제"
                                                >
                                                    <IoClose size={18} />
                                                </DeleteButton>
                                            </SearchItem>
                                        ))
                                    ) : (
                                        <SearchItem>
                                            <SearchItemText>최근 검색 내역이 없습니다</SearchItemText>
                                        </SearchItem>
                                    )}
                                </LeftColumn>
                                <Divider />
                                <Divider />
                                <RightColumn>
                                    <ColumnTitle>실시간 인기검색어</ColumnTitle>
                                    <SearchList>
                                        {popularSearches.map((item, index) => (
                                            <SearchListItem
                                                key={item.id}
                                                onClick={() => handleSearchItemClick(item.text)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <RankNumber isTop3={index < 3}>{index + 1}</RankNumber>
                                                <SearchItemText>{item.text}</SearchItemText>
                                            </SearchListItem>
                                        ))}
                                    </SearchList>
                                    <UpdateTime>2023.04.14 오후 09:00 기준</UpdateTime>
                                </RightColumn>
                            </DropdownColumns>
                        </DropdownContent>
                    </DropdownContainer>
                )}
            </SearchBarContainer>

            {!showResults && (
                <NoResultsContainer>
                    <img src="/icon/noserch.svg" alt="검색 결과 없음" width="80" height="80" />
                    <NoResultsText>검색 내용이 없습니다!</NoResultsText>
                </NoResultsContainer>
            )}

            <ThumbnailsSection>
                <ThumbnailsHeader>더 다양한 검색어가 필요하시다면!</ThumbnailsHeader>
                <ThumbnailsGrid>
                    {thumbnails.map((thumbnail, index) => (
                        <ThumbnailItem key={index}>
                            <ThumbnailImage src={thumbnail.imageUrl} alt={thumbnail.title} />
                            <ThumbnailTitle>{thumbnail.title}</ThumbnailTitle>
                        </ThumbnailItem>
                    ))}
                </ThumbnailsGrid>
            </ThumbnailsSection>
        </SearchContainer>
    );
};

export default SearchPage;
