import DirecMovList from "../../components/directer/DirecMovList";
import { Inner } from "../serve/style";
import { DirectorMovie, DirectorWrap } from "./style";

const DirectorPage = () => {
    return (
        <DirectorWrap>
            <div className="detail-sec">
                <Inner className="inner-wrap">
                    <div className="info-left">
                        <div className="left_detail">
                            <div className="left_name">오하늘</div>
                            <div className="left_birt">1999.09.00</div>
                            <div className="left_natinal">대한민국</div>
                        </div>
                        <div className="desc">
                            <div className="desc_tit">봉준호 감독의 특징</div>
                            <div className="desc_txt">
                                봉준호 감독 영화의 가장 큰 특징으로는 여러 장르가 섞여 있다는 것과 이른바 장르의
                                관습이나 클리셰를 박살내며, 다양한 장르들에 봉준호 본인의 스타일과 세계관이 자연스럽게
                                녹아들어있단 점을 들 수 있다. (한마디로 '전형'을 깨뜨리고 비꼬는) 봉준호
                                감독은 기생충, 마더, 살인의 추억 등 현실적인 배경과 설정의 영화 뿐만
                                아니라 옥자, 설국열차, 괴물 등 비현실적인 설정의 영화들 역시 성공적으로 흥행시키고
                                평단의 호평까지 받아내며 어떤 장르의 영화든 자신의 스타일을 잃지 않으며 능수능란하게
                                성공시킬 능력을 가지고 있단 사실을 입증해내었다. 즉 자신만의 개성과 세계를 펼쳐내고,
                                더불어 대중과의 교류와 접점까지 모두 잡아낸 거장이라고 볼 수 있다.
                            </div>
                            <div className="desc_add">더보기 </div>
                        </div>
                    </div>
                    <DirectorMovie className="dir-list">
                        <DirecMovList />
                    </DirectorMovie>
                </Inner>
                <div className="info-right">
                    <img src="/images/direc.png" alt="봉준호" />
                </div>
            </div>
        </DirectorWrap>
    );
};

export default DirectorPage;
