import { div } from "three/tsl";
import { HeartButton, Inner, MoveDetailWrap, MovieVideo, ProductDetail, SeasonVideo, SimilarCont } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button, { HeartToggle, PlySquareLg, RestartLg, SpeakerOffLg } from "../../ui/Button/Button";
import { SquareNextBtn, SquarePreveBtn } from "../../ui/Button/SlideButton";
import { InputFillDe } from "../../ui/Button/InputButton";
import { useDispatch } from "react-redux";
import { getMovie } from "../../store/modules/getThunk";
const ServePage = () => {
    //  const { data } = useSelector((state) => state.movie);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const distance = e.pageX - startX;
        e.target.scrollLeft = scrollLeft - distance;
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie());
    }, []);
    return (
        <MoveDetailWrap>
            {/* 영화 미리보기 영상 */}
            <MovieVideo setExpanded={setExpanded}>
                <div className="video">
                    <div className="video-item">
                        <div className="item_left">
                            <div className="playGroup">
                                <PlySquareLg />
                                <HeartToggle />
                            </div>
                            <div className="tag">
                                <div className="tag_age">19</div>
                                <div className="tag_year">2002</div>
                                <div className="tag_genre">드라마</div>
                                <div className="tag_time">115분</div>
                            </div>
                        </div>
                        <div className="desc">
                            <p className={ `text ${expanded ? "full-text" : "collapsed"}`}>
                                유명 뉴욕 공직자의 실수를 무마해 달라는 요청을 받은 두 라이벌 해결사가(조지 클루니,
                                브래드 피트) 맞닥뜨린다. 일촉즉발의 긴장감이 감도는 하룻밤 동안 두 사람은 각자의 불만과
                                자존심을 내려놓고 함께 일을 마쳐야 한다. 유명 뉴욕 공직자의 실수를 무마해 달라는 요청을
                                받은 두 라이벌 해결사가(조지 클루니, 브래드 피트) 맞닥뜨린다.
                            </p>
                            <div
                                className="desc_add"
                                onClick={() => {
                                    setExpanded(!expanded);
                                }}
                            >
                                {expanded ? "접기" : "더보기"}
                                <div className="add_icon">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d={
                                                expanded
                                                    ? "M4.21967 15.5303C4.51256 15.8232 4.98744 15.8232 5.28033 15.5303L12 8.81066L18.7197 15.5303C19.0126 15.8232 19.4874 15.8232 19.7803 15.5303C20.0732 15.2374 20.0732 14.7626 19.7803 14.4697L12.5303 7.21967C12.2374 6.92678 11.7626 6.92678 11.4697 7.21967L4.21967 14.4697C3.92678 14.7626 3.92678 15.2374 4.21967 15.5303Z"
                                                    : "M4.21967 8.46967C4.51256 8.17678 4.98744 8.17678 5.28033 8.46967L12 15.1893L18.7197 8.46967C19.0126 8.17678 19.4874 8.17678 19.7803 8.46967C20.0732 8.76256 20.0732 9.23744 19.7803 9.53033L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L4.21967 9.53033C3.92678 9.23744 3.92678 8.76256 4.21967 8.46967Z"
                                            }
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
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
