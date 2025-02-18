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
} from "./style";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchContainerRef = useRef(null);

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

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setShowResults(value.length > 0);

        // 검색어 입력 시 드롭다운 닫기
        if (value.length > 0) {
            setIsDropdownOpen(false);
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

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    // 최근 검색어 데이터
    const recentSearches = [
        { id: 1, text: "워터멜론 코난" },
        { id: 2, text: "신시우기" },
    ];

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

    // Mock data for thumbnails (5 identical thumbnails as shown in the image)
    const thumbnails = Array(5).fill({
        id: 1,
        imageUrl: "/images/casino.jpg",
        title: "카지노",
    });

    return (
        <SearchContainer ref={searchContainerRef}>
            <SearchBarContainer>
                <IoIosSearch size={40} />
                <SearchInput
                    type="text"
                    placeholder="검색어 내용을 입력해 주세요."
                    value={searchQuery}
                    onChange={handleSearch}
                    onFocus={handleSearchBarFocus}
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
                                    <ColumnTitle>최근 검색어</ColumnTitle>
                                    {recentSearches.map((item) => (
                                        <SearchItem key={item.id}>
                                            <SearchItemText>{item.text}</SearchItemText>
                                            <DeleteButton>
                                                <IoClose size={20} />
                                            </DeleteButton>
                                        </SearchItem>
                                    ))}
                                </LeftColumn>
                                <Divider />
                                <Divider />
                                <RightColumn>
                                    <ColumnTitle>실시간 인기검색어</ColumnTitle>
                                    <SearchList>
                                        {popularSearches.map((item, index) => (
                                            <SearchListItem key={item.id}>
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
