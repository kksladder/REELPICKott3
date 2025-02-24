import { useDispatch, useSelector } from "react-redux";
import { InputFill, InputFillDe, InputLine } from "../../ui/Button/InputButton";
import { useEffect, useRef, useState } from "react";
import { getMovie } from "../../store/modules/getThunk";
import TestList from "../../components/test/TestList";

const TestPage = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const loadingRef = useRef(null);

    // Redux store에서 상태 가져오기
    const { loading, error, hasMore } = useSelector((state) => state.movieR);

    // 초기 데이터 로드
    useEffect(() => {
        dispatch(getMovie({ page: 1 }));
    }, []);

    // Intersection Observer 설정
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && hasMore) {
                    setPage((prevPage) => {
                        const nextPage = prevPage + 1;
                        dispatch(getMovie({ page: nextPage }));
                        return nextPage;
                    });
                }
            },
            { threshold: 0.5 }
        );

        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        return () => {
            if (loadingRef.current) {
                observer.unobserve(loadingRef.current);
            }
        };
    }, [loading, hasMore]);

    return (
        <div>
            <InputFill>ReelPick 시작하기</InputFill>
            <InputFillDe>test</InputFillDe>
            <InputLine customWidth="452px">로그인</InputLine>
            <TestList />

            {/* 로딩 상태 표시 및 Intersection Observer 타겟 */}
            <div ref={loadingRef} style={{ height: "20px", margin: "20px 0", textAlign: "center" }}>
                {loading && <div>로딩 중...</div>}
                {error && <div>에러가 발생했습니다: {error}</div>}
                {!hasMore && <div>모든 컨텐츠를 불러왔습니다.</div>}
            </div>
        </div>
    );
};

export default TestPage;
