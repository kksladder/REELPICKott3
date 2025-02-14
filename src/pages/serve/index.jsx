import { div } from "three/tsl";
import { HeartButton, Inner, MoveDetailWrap, MovieVideo, ProductDetail, SeasonVideo, SimilarCont } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button, { HeartToggle, PlySquareLg, RestartLg, SpeakerOffLg } from "../../ui/Button/Button";
import { SquareNextBtn, SquarePreveBtn } from "../../ui/Button/SlideButton";
import { InputFillDe } from "../../ui/Button/InputButton";
const ServePage = () => {
    //  const { data } = useSelector((state) => state.movie);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const distance = e.pageX - startX;
        e.target.scrollLeft = scrollLeft - distance;
    };
    return (
        <MoveDetailWrap>
            {/* 영화 미리보기 영상 */}
            <MovieVideo>
                <div className="video">
                    <div className="video-item">
                        <div className="playGroup">
                            <PlySquareLg />
                            <HeartToggle />
                        </div>
                        <div className="desc">
                            <p>
                                유명 뉴욕 공직자의 실수를 무마해 달라는 요청을 받은 두 라이벌 해결사가(조지 클루니,
                                브래드 피트) 맞닥뜨린다. 일촉즉발의 긴장감이 감도는 하룻밤 동안 두 사람은 각자의 불만과
                                자존심을 내려놓고 함께 일을 마쳐야 한다. 유명 뉴욕 공직자의 실수를 무마해 달라는 요청을
                                받은 두 라이벌 해결사가(조지 클루니, 브래드 피트) 맞닥뜨린다.
                            </p>
                        </div>
                        <div className="playItem">
                            <RestartLg></RestartLg>
                            <SpeakerOffLg></SpeakerOffLg>
                        </div>
                    </div>
                </div>
            </MovieVideo>
            <div>
                {/* 출연 및  */}
                <ProductDetail>
                    <div className="title">출연 및 제작진 </div>
                    <div className="pd_sec">
                        <div className="pd">
                            <Link>
                                <div className="pd_img"></div>
                                <p className="pd_name">홍상수</p>
                                <p className="pd_part">역할</p>
                            </Link>
                        </div>

                        <div className="actor_sec" onMouseMove={handleMouseMove}>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                            <div className="actor">
                                <Link>
                                    <div className="actor_img">{/* <img src={actor.image} alt={actor.name} /> */}</div>
                                    <p className="actor_name">홍상수</p>
                                    <p className="actor_part">역할</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ProductDetail>
                <Inner>
                    <SeasonVideo>
                        <div className="season-title">시즌1</div>
                        <div className="season-slide">
                            <div className="season-sec" onMouseMove={handleMouseMove}>
                                <Link>
                                    <div className="season_vid"></div>
                                    <div className="season-vid_tit">1.모두를 놀라게 한 10기 영자의 선택</div>
                                    <div className="season-vid_info">
                                        <div className="season-vid_day">2025.01.09</div>
                                        <div className="season-vid_time">61분</div>
                                    </div>
                                </Link>
                                <Link>
                                    <div className="season_vid"></div>
                                    <div className="season-vid_tit">1.모두를 놀라게 한 10기 영자의 선택</div>
                                    <div className="season-vid_info">
                                        <div className="season-vid_day">2025.01.09</div>
                                        <div className="season-vid_time">61분</div>
                                    </div>
                                </Link>
                                <Link>
                                    <div className="season_vid"></div>
                                    <div className="season-vid_tit">1.모두를 놀라게 한 10기 영자의 선택</div>
                                    <div className="season-vid_info">
                                        <div className="season-vid_day">2025.01.09</div>
                                        <div className="season-vid_time">61분</div>
                                    </div>
                                </Link>
                                <Link>
                                    <div className="season_vid"></div>
                                    <div className="season-vid_tit">1.모두를 놀라게 한 10기 영자의 선택</div>
                                    <div className="season-vid_info">
                                        <div className="season-vid_day">2025.01.09</div>
                                        <div className="season-vid_time">61분</div>
                                    </div>
                                </Link>
                                <Link>
                                    <div className="season_vid"></div>
                                    <div className="season-vid_tit">1.모두를 놀라게 한 10기 영자의 선택</div>
                                    <div className="season-vid_info">
                                        <div className="season-vid_day">2025.01.09</div>
                                        <div className="season-vid_time">61분</div>
                                    </div>
                                </Link>
                                <Link>
                                    <div className="season_vid"></div>
                                    <div className="season-vid_tit">1.모두를 놀라게 한 10기 영자의 선택</div>
                                    <div className="season-vid_info">
                                        <div className="season-vid_day">2025.01.09</div>
                                        <div className="season-vid_time">61분</div>
                                    </div>
                                </Link>
                                {/* Repeat other <Link> components as needed */}
                            </div>
                            <div className="season_slide-button">
                                <SquarePreveBtn />
                                <SquareNextBtn />
                            </div>
                        </div>

                        <div className="under-line"></div>
                    </SeasonVideo>

                    <SimilarCont>
                        <div className="con-title">비슷한 컨텐츠</div>
                        <div className="con-slide">
                            <div className="con-sec">
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                                <Link>
                                    <div className="con-item"></div>
                                </Link>
                            </div>
                            <div className="con_slide-button">
                                <SquarePreveBtn />
                                <SquareNextBtn />
                            </div>
                        </div>
                    </SimilarCont>
                </Inner>
            </div>
        </MoveDetailWrap>
    );
};

export default ServePage;
