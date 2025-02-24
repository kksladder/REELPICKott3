import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SquareNextBtn, SquarePreveBtn } from "../../ui/Button/SlideButton";

const Heart = () => {
    const dispatch = useDispatch();

    // 리덕스에서 favoriteItems 가져오기
    const { favoriteItems } = useSelector((state) => state.favoritesR); // 스토어에서 favoriteItems 불러오기
    console.log(` ${favoriteItems.title}`);
    // 슬라이드 설정
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <SquarePreveBtn />, // 커스텀 prevArrow 설정
        nextArrow: <SquareNextBtn />, // 기본 next 버튼
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
                    slidesToShow: 1, // 1개 슬라이드 표시
                },
            },
        ],
    };

    return (
        <div>
            {favoriteItems.length === 0 ? (
                <div className="contents">찜한 콘텐츠가 없습니다.</div> // favoriteItems가 비어있을 때
            ) : (
                <>
                    <div>
                        <Slider {...settings}>
                            {favoriteItems.map((item) => (
                                <div key={`${item.id}`} className="slide-item">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${item?.poster || item?.poster_path}`}
                                        style={{ width: "150px", height: "200px" }}
                                        alt={item.title}
                                    />
                                    <div>
                                        <h3 style={{ marginTop: " 20px" }}>{item.title}</h3>
                                        <button
                                            style={{
                                                marginTop: "10px",
                                                background: "var(--primary-30)",
                                                borderRadius: "3px",
                                            }}
                                            onClick={() => {
                                                // 찜 목록에서 해당 아이템을 삭제하는 로직을 추가할 수 있습니다.
                                                dispatch(removeFromFavorites(item));
                                            }}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <button
                            style={{
                                marginLeft: "1061px",
                                marginTop: "27px",
                                background: "var(--primary-30)",
                                borderRadius: "3px",
                            }}
                            onClick={() => {
                                // 모든 찜 목록을 삭제하는 로직을 추가할 수 있습니다.
                                favoriteItems.forEach((item) => {
                                    dispatch(removeFromFavorites(item));
                                });
                            }}
                        >
                            모든 기록 삭제
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Heart;
