import { DirecMovItemWrap } from "./style";

const DirecMovItem = () => {
    return (
        <DirecMovItemWrap>
            <div className="movie-img">
                <img src="public/images/miki.jpg" alt="" />
            </div>
            <div className="movie-info">
                <div className="title-wrap">
                    <div className="info_title">미키17</div>
                    <div className="info_tag"></div>
                </div>
                <div className="info-desc">
                    위험한 일에 투입되는 소모품으로, 죽으면 다시 프린트되는 미키가 17번째 죽음의 위기를 겪던 중, 그가
                    죽은 줄 알고 미키 18이 프린트되면서 벌어지는 예측불허의 이야기를 그리는 영화
                </div>
            </div>
        </DirecMovItemWrap>
    );
};

export default DirecMovItem;
