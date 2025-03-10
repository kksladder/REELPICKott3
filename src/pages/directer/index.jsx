// pages/directer/index.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDirectorDetails, getActorDetails } from "../../store/modules/getThunk";
import DirecMovItem from "../../components/directer/DirecMovItem";
import MovList from "../../components/directer/MovList";
import { DirectorWrap, TopIcon } from "./style";
import { GlassTopBtn } from "../../ui/icon/GlassCircle";

const DirectorPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { directorInfo, actorInfo, loading, error } = useSelector((state) => state.directorR);
    const [showTopIcon, setShowTopIcon] = useState(false);

    useEffect(() => {
        // 둘 다 호출하고 응답에 따라 처리
        dispatch(getDirectorDetails(id));
        dispatch(getActorDetails(id));
    }, [dispatch, id]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setShowTopIcon(true);
            } else {
                setShowTopIcon(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    // 로딩과 에러 상태 처리
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // directorInfo나 actorInfo 중 존재하는 정보 사용
    const personInfo = directorInfo || actorInfo;
    const isDirector = Boolean(directorInfo);

    if (!personInfo) return null;

    return (
        <DirectorWrap>
            <DirecMovItem personInfo={personInfo} isDirector={isDirector} />
            <MovList works={personInfo.works} isDirector={isDirector} />
            <TopIcon>
                {showTopIcon && (
                    <div className="top-icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <GlassTopBtn />
                    </div>
                )}
            </TopIcon>
        </DirectorWrap>
    );
};

export default DirectorPage;
