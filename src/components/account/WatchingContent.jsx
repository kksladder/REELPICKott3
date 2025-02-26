import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { loadHistory, removeFromHistory, clearHistory } from "../../store/modules/watchingHistorySlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SquareNextBtn, SquarePreveBtn } from "../../ui/Button/SlideButton";
import styled from "styled-components";

const Wrap = styled.div``;

const WatchingContent = () => {
    const dispatch = useDispatch();
    const watchingHistory = useSelector((state) => state.watchingHistoryR);
    const history = watchingHistory?.history || [];

    useEffect(() => {
        dispatch(loadHistory());
    }, [dispatch]);

    const handleRemove = (id) => {
        dispatch(removeFromHistory(id));
    };

    const handleClearAll = () => {
        dispatch(clearHistory());
    };

    // 슬라이드 설정
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        /*       prevArrow: <SquarePreveBtn />, */ // 커스텀 prevArrow 설정
        /*   nextArrow: <SquareNextBtn />, */ // 기본 next 버튼
        responsive: [
            {
                breakpoint: 1024, // 화면이 1024px 이하일 때
                settings: {
                    slidesToShow: 3, // 3개 슬라이드 표시
                },
            },
            {
                breakpoint: 768, // 화면이 768px 이하일 때
                settings: {
                    slidesToShow: 2, // 2개 슬라이드 표시
                },
            },
            {
                breakpoint: 480, // 화면이 480px 이하일 때
                settings: {
                    slidesToShow: 2, // 1개 슬라이드 표시
                },
            },
        ],
    };

    return (
        <Wrap>
            {history.length === 0 ? (
                <div className="contents">시청중인 컨텐츠가 없습니다.</div>
            ) : (
                <>
                    <div>
                        <Slider {...settings}>
                            {history.map((item) => (
                                <div key={`${item.id}-${item.watchedAt}`} className="slide-item">
                                    <img
                                        src={item.poster || "/image/profileNo.png"}
                                        alt={item.title}
                                        style={{ width: "150px", height: "200px" }} // inline 스타일로 설정
                                    />
                                    <div>
                                        <h3 style={{ marginTop: " 20px" }}>{item.title}</h3>

                                        <button
                                            style={{
                                                marginTop: " 10px",
                                                background: "var(--primary-30)",
                                                borderRadius: "3px",
                                            }}
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <button
                            style={{
                                marginLeft: " 1061px",
                                marginTop: "27px",
                                background: "var(--primary-30)",
                                borderRadius: "3px",
                            }}
                            onClick={handleClearAll}
                        >
                            모든 기록 삭제
                        </button>
                    </div>
                </>
            )}
        </Wrap>
    );
};

export default WatchingContent;
