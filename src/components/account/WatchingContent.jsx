import React from "react";
import { SquareNextBtn, SquarePreveBtn } from "../../ui/Button/SlideButton";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const WatchingContent = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const slides = [
        {
            id: 1,
            title: "신서유기 레전드 정주행",
            episode: "3화",
            imageUrl: "/api/placeholder/280/157",
        },
        {
            id: 2,
            title: "신서유기 레전드 정주행",
            episode: "3화",
            imageUrl: "/api/placeholder/280/157",
        },
        {
            id: 3,
            title: "신서유기 레전드 정주행",
            episode: "3화",
            imageUrl: "/api/placeholder/280/157",
        },
        {
            id: 4,
            title: "신서유기 레전드 정주행",
            episode: "3화",
            imageUrl: "/api/placeholder/280/157",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            <SquarePreveBtn />
            <SquareNextBtn />
            <div>
                <div c>
                    <div>
                        {slides.map((slide) => (
                            <div key={slide.id}>
                                <div>
                                    <img src={slide.imageUrl} alt={slide.title} />
                                    <div>
                                        <h3>{slide.title}</h3>
                                        <p c>{slide.episode}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={prevSlide}>
                    <BiChevronLeft />
                </button>

                <button onClick={nextSlide}>
                    <BiChevronRight />
                </button>

                <div>
                    {slides.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default WatchingContent;
