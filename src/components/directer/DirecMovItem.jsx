// components/directer/DirecMovItem.jsx
import { Inner } from "../../pages/serve/style";
import { DirecMovItemWrap } from "./style";

const DirecMovItem = ({ personInfo, isDirector, className }) => {
    if (!personInfo) return null;

    const imageUrl = personInfo.profile_path
        ? `https://image.tmdb.org/t/p/w500${personInfo.profile_path}`
        : "/images/profileNo.png";

    return (
        <DirecMovItemWrap className={className}>
            <div className="detail-sec">
                <Inner className="inner-wrap">
                    <div className="info-left">
                        <div className="left_detail">
                            <div className="left_name">{personInfo.name}</div>
                            <div className="left_birt">{personInfo.birthday}</div>
                            <div className="left_natinal">{personInfo.place_of_birth}</div>
                            <div className="left_role">{isDirector ? "감독" : "배우"}</div>
                        </div>
                        <div className="desc">
                            <div className="desc_tit">{personInfo.name} 특징</div>
                            <div className="desc_txt">{personInfo.biography}</div>
                            <div className="desc_add">더보기</div>
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="info-img">
                            <img src={imageUrl} alt={personInfo.name} />
                        </div>
                    </div>
                </Inner>
            </div>
        </DirecMovItemWrap>
    );
};

export default DirecMovItem;
