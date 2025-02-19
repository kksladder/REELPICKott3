<<<<<<< HEAD
=======

>>>>>>> ec4ea5dee80279e04ca170ec6a862dd96da1ab30
import { useDispatch, useSelector } from "react-redux";
import { SquareNextBtn, SquarePreveBtn } from "../../../ui/Button/SlideButton"; // 경로 수정
import { useEffect, useRef, useState } from "react";
import { clearSimilarContent, getSimilarContent } from "../../../store/modules/similarSlice"; // 경로 수정
import SimilarItem from "./SimilarItem";

const SimilarList = ({ movieId, mediaType }) => {
    const dispatch = useDispatch();
    const slideRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // similarR로 변경된 state 접근
    const { similarContent, loading } = useSelector((state) => state.similarR);

    useEffect(() => {
        if (movieId && mediaType) {
            dispatch(getSimilarContent({ id: movieId, mediaType }));
        }
        // 컴포넌트 언마운트 시 처리
        return () => {
            dispatch(clearSimilarContent());
        };
    }, [dispatch, movieId, mediaType]);

    const checkScroll = () => {
        if (slideRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = slideRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        const slideElement = slideRef.current;
        if (slideElement) {
            slideElement.addEventListener("scroll", checkScroll);
            checkScroll();
            return () => slideElement.removeEventListener("scroll", checkScroll);
        }
    }, [similarContent]);

    const handleScroll = (direction) => {
        if (slideRef.current) {
            const scrollAmount = 303; // width + gap
            const newScrollLeft = slideRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
            slideRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (!similarContent || similarContent.length === 0) {
        return null;
    }

    return (
        <div className="con-slide">
            <div className="con-sec" ref={slideRef}>
                {similarContent.map((item) => (
                    <SimilarItem key={item.id} item={item} />
                ))}
            </div>
            <div className="con_slide-button">
                {canScrollLeft && (
                    <div onClick={() => handleScroll("left")}>
                        <SquarePreveBtn />
                    </div>
                )}
                {canScrollRight && (
                    <div onClick={() => handleScroll("right")}>
                        <SquareNextBtn />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimilarList;
