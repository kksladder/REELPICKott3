import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { getMovieRecommendations, searchMovies } from "../../store/modules/tmdbApi";

import {
    SearchContainer,
    SearchBarContainer,
    SearchInput,
    CloseButton,
    NoResultsContainer,
    NoResultsText,
    ThumbnailsSection,
    ThumbnailsHeader,

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

    // 검색 결과 관련 스타일
    SearchResultsSection,
    SearchResultsHeader,
    SearchResultsCount,

    // 릴픽 스타일 그리드로 변경
    MoviesGrid,
    MovieCard,

    // 추천 영화 관련 스타일
    RecommendationsSection,
    RecommendationsHeader,
} from "./style";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { addToHistory } from "../../store/modules/watchingHistorySlice";

// 로컬스토리지 키
const RECENT_SEARCHES_KEY = "recentSearches";

// 최대 저장 검색어 수
const MAX_RECENT_SEARCHES = 15;

// 유사 영화 추천 수
const SIMILAR_MOVIES_COUNT = 6;

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchContainerRef = useRef(null);
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //** 무비 담기
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //출력
    const [movieResult, setMovieResult] = useState([]);

    // 유사 영화 추천
    const [similarMovies, setSimilarMovies] = useState([]);

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

    //데이터 가져오기
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const movieData = await getMovieRecommendations();
                setMovies(movieData);
                console.log("가져온 영화 데이터 샘플:", movieData.length > 0 ? movieData[0] : "데이터 없음");
            } catch (err) {
                setError(err.message);
                console.error("Failed to fetch movies:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

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

    // 유사한 영화 찾기 함수
    const findSimilarMovies = (results) => {
        // 검색 결과가 없거나 매우 적은 경우
        if (!results || results.length === 0) {
            // 인기 영화 중에서 무작위로 5개 선택
            return getRandomMovies(movies, SIMILAR_MOVIES_COUNT);
        }

        // 첫 번째 검색 결과 기준으로 유사한 영화 찾기
        const firstResult = results[0];
        let similarMovies = [];

        // 간단한 유사도 계산: 제목의 일부가 일치하거나, 비슷한 발매 연도의 영화
        if (firstResult && firstResult.title) {
            // 1. 제목에서 주요 키워드 추출 (예: "원피스 골드" -> "원피스")
            const keywordMatch = firstResult.title.match(/^[가-힣a-zA-Z]+/);
            const keyword = keywordMatch ? keywordMatch[0] : "";

            if (keyword && keyword.length >= 2) {
                // 키워드로 유사한 영화 검색하되 원본 검색 결과는 제외
                similarMovies = movies.filter((movie) => movie.id !== firstResult.id && movie.title.includes(keyword));
            }

            // 2. 키워드로 찾은 영화가 충분하지 않으면 비슷한 연도의 영화도 추가
            if (similarMovies.length < SIMILAR_MOVIES_COUNT && firstResult.releaseDate) {
                const releaseYear = new Date(firstResult.releaseDate).getFullYear();
                const yearSimilarMovies = movies.filter((movie) => {
                    if (!movie.releaseDate) return false;
                    const movieYear = new Date(movie.releaseDate).getFullYear();
                    return (
                        movie.id !== firstResult.id &&
                        !similarMovies.some((m) => m.id === movie.id) &&
                        Math.abs(movieYear - releaseYear) <= 2
                    );
                });

                similarMovies = [...similarMovies, ...yearSimilarMovies];
            }
        }

        // 여전히 추천 영화가 부족하면 인기 영화로 채우기
        if (similarMovies.length < SIMILAR_MOVIES_COUNT) {
            const remainingCount = SIMILAR_MOVIES_COUNT - similarMovies.length;
            const popularMovies = getRandomMovies(
                movies.filter(
                    (m) => !similarMovies.some((sm) => sm.id === m.id) && !results.some((r) => r.id === m.id)
                ),
                remainingCount
            );
            similarMovies = [...similarMovies, ...popularMovies];
        }

        // 최대 5개까지만 반환
        return similarMovies.slice(0, SIMILAR_MOVIES_COUNT).map((movie) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            releaseDate: movie.releaseDate,
            rating: movie.rating,
        }));
    };

    // 무작위 영화 선택 함수
    const getRandomMovies = (movieList, count) => {
        if (!movieList || movieList.length <= count) return movieList || [];

        const shuffled = [...movieList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    // 새 검색어 추가 함수 (업데이트됨: 새로운 searchMovies 함수 활용)
    const addRecentSearch = async (searchText) => {
        if (!searchText.trim()) return;

        const newSearch = { id: Date.now(), text: searchText.trim() };

        // 중복 검색어 필터링
        const filteredSearches = recentSearches.filter(
            (item) => item.text.toLowerCase() !== searchText.trim().toLowerCase()
        );

        try {
            // 새로운 searchMovies 함수 사용 (한글 최적화 적용)
            const searchResult = await searchMovies(searchText.trim());
            const filteredData = searchResult.data || [];

            // 디버깅 로그 추가
            console.log("검색 텍스트:", searchText);
            console.log("검색 결과 수:", filteredData.length);

            // 유사 영화 추천 생성
            const recommendations = findSimilarMovies(filteredData);
            setSimilarMovies(recommendations);
            console.log("추천 영화 수:", recommendations.length);

            if (filteredData.length > 0) {
                console.log("첫 번째 검색 결과:", filteredData[0]);
                console.log("포스터 경로:", filteredData[0].poster_path);
            }

            setMovieResult(filteredData);

            // 최대 개수 제한하여 새 검색어 추가 (최신 검색어가 맨 앞에 위치)
            const updatedSearches = [newSearch, ...filteredSearches].slice(0, MAX_RECENT_SEARCHES);
            setRecentSearches(updatedSearches);
            saveRecentSearchesToLocalStorage(updatedSearches);
        } catch (error) {
            console.error("검색 실패:", error);
            setMovieResult([]);
            setSimilarMovies([]);

            // 에러가 있어도 검색어는 저장
            const updatedSearches = [newSearch, ...filteredSearches].slice(0, MAX_RECENT_SEARCHES);
            setRecentSearches(updatedSearches);
            saveRecentSearchesToLocalStorage(updatedSearches);
        }
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

    // 드라마 클릭 시 상세페이지로 연결
    const handleContentClick = (content, event) => {
        event.preventDefault();
        console.log("Adding drama to history:", content);
        dispatch(
            addToHistory({
                ...content,
                type: content.media_type || "movie",
            })
        );
        navigate(`/serve/${content.id}?type=${content.media_type}`);
    };

    // 검색 실행 함수 (Enter 키 누를 때 또는 검색 버튼 클릭 시)
    const executeSearch = () => {
        if (searchQuery.trim()) {
            // 검색어 로컬스토리지에 저장 및 검색 수행
            addRecentSearch(searchQuery);

            // 실제 검색 로직은 addRecentSearch 내에서 수행됨
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
        setMovieResult([]);
        setSimilarMovies([]);
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

    const handleThumbnailClick = (thumbnail, e) => {
        e.preventDefault();
        dispatch(
            addToHistory({
                id: thumbnail.id,
                title: thumbnail.title,
                type: thumbnail.mediaType,
            })
        );
        navigate(`/serve/${thumbnail.id}?type=${thumbnail.mediaType}`);
    };

    // 기본 이미지 경로 설정 (영화 포스터 이미지가 없을 경우 사용)
    const defaultImageUrl = "/images/profileNo.png";

    // 썸네일 데이터
    const thumbnails = [
        {
            id: 1,
            title: "Casino",
            imageUrl: "/images/casino.jpg",
            mediaType: "movie",
        },
        {
            id: 2,
            title: "Breaking Bad",
            imageUrl: "/images/breakinbad.jpg",
            mediaType: "tv",
        },
        {
            id: 3,
            title: "Ozark",
            imageUrl: "/images/ozak.jpg",
            mediaType: "tv",
        },
        {
            id: 4,
            title: "Crime City",
            imageUrl: "/images/crimecity.jpg",
            mediaType: "movie",
        },
        {
            id: 5,
            title: "Slow Horses",
            imageUrl: "/images/slowhorses.jpg",
            mediaType: "tv",
        },
        {
            id: 6,
            title: "Parasite",
            imageUrl: "/images/parasite.jpg",
            mediaType: "movie",
        },
    ];

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
                                                <RankNumber data-top3={index < 3}>{index + 1}</RankNumber>
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
            {showResults && movieResult.length > 0 ? (
                <>
                    <SearchResultsSection>
                        <SearchResultsHeader>
                            <SearchResultsCount>검색 결과: {movieResult.length}개</SearchResultsCount>
                        </SearchResultsHeader>
                        <MoviesGrid>
                            {movieResult.map((content) => (
                                <MovieCard
                                    key={content.id}
                                    $isKorean={content.title.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/) !== null}
                                >
                                    <Link
                                        to={`/serve/${content.id}?type=${content.media_type}`}
                                        onClick={(e) => handleContentClick(content, e)}
                                    >
                                        <img
                                            src={content.poster_path || defaultImageUrl}
                                            alt={content.title}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = defaultImageUrl;
                                            }}
                                        />
                                    </Link>
                                </MovieCard>
                            ))}
                        </MoviesGrid>
                    </SearchResultsSection>

                    {/* 유사 영화 추천 섹션 - 릴픽추천 스타일 적용 */}
                    {similarMovies.length > 0 && (
                        <RecommendationsSection>
                            <RecommendationsHeader>이런 영화는 어떠세요?</RecommendationsHeader>
                            <MoviesGrid>
                                {similarMovies.map((content) => (
                                    <MovieCard
                                        key={content.id}
                                        $isKorean={content.title.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/) !== null}
                                    >
                                        <Link
                                            to={`/serve/${content.id}?type=${content.media_type}`}
                                            onClick={(e) => handleContentClick(content, e)}
                                        >
                                            <img
                                                src={content.poster_path || defaultImageUrl}
                                                alt={content.title}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = defaultImageUrl;
                                                }}
                                            />
                                        </Link>
                                    </MovieCard>
                                ))}
                            </MoviesGrid>
                        </RecommendationsSection>
                    )}
                </>
            ) : showResults && movieResult.length === 0 ? (
                <>
                    <NoResultsContainer>
                        <img src="/icon/noserch.svg" alt="검색 결과 없음" width="80" height="80" />
                        <NoResultsText>검색 결과가 없습니다!</NoResultsText>
                    </NoResultsContainer>

                    {similarMovies.length > 0 && (
                        <div className="recommendations-wrapper" style={{ marginTop: "400px" }}>
                            <RecommendationsHeader>이런 영화는 어떠세요?</RecommendationsHeader>
                            <MoviesGrid>
                                {similarMovies.map((movie) => (
                                    <MovieCard
                                        key={movie.id}
                                        $isKorean={movie.title.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/) !== null}
                                    >
                                        <img
                                            src={movie.poster_path || defaultImageUrl}
                                            alt={movie.title}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = defaultImageUrl;
                                            }}
                                        />
                                    </MovieCard>
                                ))}
                            </MoviesGrid>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="empty-search-wrapper">
                        <NoResultsContainer>
                            <img src="/icon/noserch.svg" alt="검색 결과 없음" width="80" height="80" />
                            <NoResultsText>검색 내용이 없습니다!</NoResultsText>
                        </NoResultsContainer>

                        <div className="default-thumbnails" style={{ marginTop: "400px" }}>
                            <ThumbnailsHeader>더 다양한 검색어가 필요하시다면!</ThumbnailsHeader>
                            <MoviesGrid>
                                {thumbnails.map((thumbnail) => (
                                    <MovieCard key={thumbnail.id}>
                                        <Link
                                            to={`/serve/${thumbnail.id}?type=${thumbnail.mediaType}`}
                                            onClick={(e) => handleThumbnailClick(thumbnail, e)}
                                        >
                                            <img src={thumbnail.imageUrl} alt="" loading="lazy" />
                                        </Link>
                                    </MovieCard>
                                ))}
                            </MoviesGrid>
                        </div>
                    </div>
                </>
            )}
        </SearchContainer>
    );
};

export default SearchPage;
