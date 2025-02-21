import {
    BottomMainTitleWrapper,
    CenteredImageWrapper,
    DeviceImageWrapper,
    VideoFrame1,
    VideoFrame2,
    VideoFrame3,
    HeaderWrapper,
    MainTitle,
    LandingBackground,
} from "./style";
import AccordionComponent from "../../components/accordion/Accordion";
import { useNavigate } from "react-router-dom";
import Landing from "../../components/landing/Landing";
import FooterComponent from "../../common/footer";

const MainPage = () => {
    const videoId = "eblQHvJTHcc"; // 영상 ID
    const opts = [
        "autoplay=1",
        "mute=1",
        "showinfo=0",
        "modestbranding=1",
        "rel=0",
        "controls=0",
        "playlist=" + videoId,
        "loop=1",
        "disablekb=1",
        "iv_load_policy=3",
        "fs=0",
    ].join("&");
    const navigate = useNavigate(); // navigate 훅을 사용하여 라우팅

    const handleSignUpClick = () => {
        navigate("/signUp"); // '/login' 경로로 이동
    };
    return (
        <>
            <HeaderWrapper>
                <Landing />
                <LandingBackground></LandingBackground>
                <MainTitle>
                    <strong>
                        릴픽이 읽어낸 당신의 취향 <br />
                        오늘의 감독이 선사하는 명화
                    </strong>
                </MainTitle>
            </HeaderWrapper>

            <CenteredImageWrapper>
                <img src="./images/G12.png" alt="main-1" width={1120} />
                <p>릴픽과 함께 취향저격 컨텐츠를 담아보세요 </p>
            </CenteredImageWrapper>

            <DeviceImageWrapper>
                <img src="./images/iPhone_deviec.png" alt="iPhone_device" width={1120} className="iphone" />
                <VideoFrame1
                    src={`https://www.youtube.com/embed/${videoId}?${opts}`}
                    title="[검은 수녀들 DARK NUNS] 런칭 예고편"
                    frameBorder="0"
                    allow="autoplay; encrypted-media;"
                    allowFullScreen
                    style={{ pointerEvents: "none" }}
                />

                <img src="./images/desktop_device.png" alt="desktop_device" width={1120} className="desktop" />
                <VideoFrame2
                    src="https://www.youtube.com/embed/fYhSVx-ys-Q?autoplay=1&mute=1&showinfo=0&modestbranding=1&controls=0&rel=0&playlist=fYhSVx-ys-Q&loop=1"
                    title="[미키 17] 2차 예고편"
                    frameBorder="0"
                    allow="autoplay; encrypted-media;"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ pointerEvents: "none" }}
                />

                <img src="./images/iPadPro_device.png" alt="iPadPro_device" width={1120} className="ipad" />
                <VideoFrame3
                    src="https://www.youtube.com/embed/rmk6xIZanic?autoplay=1&mute=1&showinfo=0&controls=0&modestbranding=1&rel=0&playlist=rmk6xIZanic&loop=1"
                    title="[검은 수녀들 DARK NUNS] 런칭 예고편"
                    frameBorder="0"
                    allow="autoplay; encrypted-media;"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ pointerEvents: "none" }}
                />
            </DeviceImageWrapper>

            <BottomMainTitleWrapper>
                <p>영화, 시리즈 등을 무제한으로</p>
                <ul>
                    <li>5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</li>
                    <li>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</li>
                </ul>
                <button onClick={handleSignUpClick}>ReelPick 시작하기</button>
            </BottomMainTitleWrapper>
            <AccordionComponent />
            <FooterComponent />
        </>
    );
};

export default MainPage;
