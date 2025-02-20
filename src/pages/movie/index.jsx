// pages/Movie/index.jsx
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../store/modules/getThunk2";
import { movieActions } from "../../store/modules/movieSlice2";
import {
    MoviePageContainer,
    MovieGrid,
    MovieCard,
    PosterImage,
    MovieInfo,
    MovieTitle,
    ReleaseYear,
    MovieRating,
    PageHeader,
    PageTitle,
    LoadingSpinner,
} from "./style";
import { Link } from "react-router-dom";

const MoviePage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");

    const {
        data = [],
        loading = false,
        error,
        currentPage = 1,
        totalPages = 999,
    } = useSelector((state) => state.movieR) || {};

    const observerRef = useRef(null);
    const lastMovieRef = useRef(null);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        // 초기 데이터 로드
        dispatch(movieActions.clearData());
        dispatch(getContent({ mediaType: "movie", page: 1 }));
        setIsEnd(false);
    }, [dispatch]);

    useEffect(() => {
        // 무한 스크롤 설정
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && !isEnd) {
                    // 다음 페이지 로드
                    dispatch(getContent({ mediaType: "movie", page: currentPage + 1 }))
                        .unwrap()
                        .then((result) => {
                            // 만약 결과 데이터가 없거나 비어있다면 더 이상 로드하지 않음
                            if (!result || !result.data || result.data.length === 0) {
                                setIsEnd(true);
                            }
                        });
                }
            },
            {
                rootMargin: "200px", // 화면 아래 200px 지점에서 미리 로딩 시작
            }
        );

        if (lastMovieRef.current) {
            observerRef.current.observe(lastMovieRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [data, loading, currentPage, isEnd, dispatch]);

    if (error) {
        return <div>오류가 발생했습니다: {error}</div>;
    }

    return (
        <MoviePageContainer>
            <PageHeader>
                <PageTitle>영화</PageTitle>
            </PageHeader>

            <MovieGrid>
                {data.map((movie, index) => (
                    <MovieCard key={`${movie.id}-${index}`} ref={index === data.length - 1 ? lastMovieRef : null}>
                        <Link to={`/movie/${movie.id}`}>
                            <PosterImage
                                src={movie.poster || "/images/no-poster.png"}
                                alt={movie.title}
                                loading="lazy" // 이미지 지연 로딩 추가
                            />
                            <MovieInfo>
                                <MovieTitle>{movie.title}</MovieTitle>
                                {movie.releaseDate && (
                                    <ReleaseYear>{new Date(movie.releaseDate).getFullYear()}</ReleaseYear>
                                )}
                                <MovieRating>★ {movie.rating ? movie.rating.toFixed(1) : "N/A"}</MovieRating>
                            </MovieInfo>
                        </Link>
                    </MovieCard>
                ))}
            </MovieGrid>

            {loading && <LoadingSpinner />}

            {!loading && isEnd && (
                <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                    더 이상 표시할 영화가 없습니다.
                </div>
            )}
        </MoviePageContainer>
    );
};

export default MoviePage;
