import { Inner } from "../../pages/serve/style";
import { MovListWrap } from "../../components/directer/style";
import { GlassUnderCircleBtn, GlassUnderOffCircleBtn } from "../../ui/icon/GlassCircle";
import { SquareNextBtn } from "../../ui/Button/SlideButton";
// import { GlassUnderCircleBtn } from "../../ui/icon/GlassCircle";

const MovList = ({ className }) => {
    return (
        <MovListWrap className={className}>
            <Inner>
                <div className="mov-wrap">
                    <SquareNextBtn/>
                    <div className="style-step">
                        <div className="step-icon">
                            <GlassUnderCircleBtn />
                            {/* <GlassUnderOffCircleBtn /> */}
                        </div>
                        <div className="step-line">

                        </div>
                    </div>
                    <div className="mov-age">
                        2019
                    </div>
                    <div className="list-wrap">
                        <div className="mov-poster">
                            <img src="/images/miki.jpg" alt="봉준호" />
                        </div>
                        <div className="mov-info-wrap">
                            <div className="info-title">
                                <div className="mov_title">미키17</div>
                                <div className="mov_tag">
                                    <div className="mov-age">19</div>
                                    <div className="mov-birt">2002</div>
                                    <div className="mov-cate">드라마</div>
                                    <div className="mov-time">115분</div>
                                </div>
                            </div>
                            <div className="info-desc">
                                위험한 일에 투입되는 소모품으로, 죽으면 다시 프린트되는 미키가 17번째 죽음의 위기를 겪던
                                중, 그가 죽은 줄 알고 미키 18이 프린트되면서 벌어지는 예측불허의 이야기를 그리는 영화
                            </div>
                        </div>
                    </div>
                </div>
            </Inner>
        </MovListWrap>
    );
};

export default MovList;
