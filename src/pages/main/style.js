import styled from "styled-components";

// MainTitle 컴포넌트 스타일 정의

export const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const LandingBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 70%;
`;

export const MainTitle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
        color: var(--white);
        text-align: center;
        font-size: var(--font-body-XXXlarge);
        font-weight: var(--font-weight-ExtraBold);
        line-height: 135px;
        display: block;
        white-space: nowrap;
        margin-bottom: 20px;
        position: relative;

        @media (max-width: 768px) {
            font-size: 31px;
            line-height: 1.5;
        }
    }
`;

export const CenteredImageWrapper = styled.div`
    position: relative; // 자식 요소에 절대 위치를 적용하기 위해 부모 요소를 relative로 설정
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (max-width: 768px) {
        margin-top: 20px;
        height: 400px;
    }
    // 이미지 위에 검은색 반투명 오버레이를 추가
    &::before {
        content: ""; // 가상 요소의 내용은 빈 문자열
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(20, 20, 20, 0.4); // 검은색 반투명 필터
        z-index: 1; // 이미지보다 위에 오도록 설정
    }
    p {
        position: absolute;
        color: var(--white);
        font-size: var(--font-body-XXlarge);
        font-weight: var(--font-weight-SemiBold);
        z-index: 1;

        @media (max-width: 768px) {
            font-size: 22px;
        }
    }
    img {
        position: relative; // 이미지가 오버레이 위에 렌더링되도록 하기 위해
        z-index: -8; // 이미지가 오버레이 위에 오지 않도록 z-index를 2로 설정
    }
    .desktop_image {
        display: block;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .mobile_image {
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
`;
/* export const VideoFrame2 = styled.iframe`
    position: absolute;
    top: 114px;
    left: 1%;
    width: 38.3%;
    height: 51%;
    z-index: -3;
`;

export const VideoFrame3 = styled.iframe`
    position: absolute;
    top: 220px;
    left: -22px;
    width: 25.2%;
    height: 40%;
`;

export const VideoFrame1 = styled.iframe`
    top: 335px;
    left: 0.1%;
    width: 23%;
    height: 27.2%;
    pointer-events: none;
`; */

export const DeviceImageWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        height: 600px;
    }

    .iPhone_device {
        width: 600px;
        height: 398.272px;
        position: absolute;
        z-index: 10;
        bottom: 3%;
        left: 4%;
        @media (max-width: 768px) {
            width: 100%;
        }
        iframe {
            position: absolute;
            width: 74%;
            bottom: 116px;
            height: 60%;
            right: 91px;
            z-index: -1;
            @media (max-width: 768px) {
                bottom: 54%;
                width: 75%;
                height: auto;
                right: 14%;
            }
        }
        .iphone {
            width: 100%;
        }
    }
    .desktop_device {
        width: 850px;
        height: 600px;
        position: absolute;
        right: 33%;

        bottom: 3%;
        @media (max-width: 768px) {
            display: none;
        }
        .desktop {
            position: absolute;
            bottom: 1%;
        }
        iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            top: -19%;
            left: 16%;
        }
    }
    .iPadPro_device {
        width: 508.749px;
        height: 389.133px;
        position: absolute;
        bottom: 14%;
        right: 4%;
        @media (max-width: 768px) {
            display: none;
        }
        .ipad {
            width: 100%;
            height: 100%;
        }
        iframe {
            position: absolute;
            width: 94%;
            bottom: 15px;
            height: 95%;
            right: 17px;
            z-index: 1;
        }
    }
`;

export const BottomMainTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width: 768px) {
        width: 91.66%;
        margin-left: auto;
        margin-right: auto;
    }
    p {
        color: var(--white);
        font-size: var(--font-D-Medium);
        font-weight: var(--font-weight-Regular);
        margin-bottom: 88px;
        @media (max-width: 768px) {
            font-size: 17px;
            margin-bottom: 20px;
        }
    }
    ul {
        margin-bottom: 150px;

        li {
            color: var(--white);
            font-size: var(--font-header-Large);
            font-weight: var(--font-weight-Regular);
            line-height: 56px;
            @media (max-width: 768px) {
                font-size: 17px;
            }
        }
    }
    button {
        color: var(--white);
        font-family: "Pretendard-Regular";
        font-weight: var(--font-weight-Regular);
        font-size: var(--font-W-Header);
        width: 713px;
        height: 72px;
        align-items: center;
        padding: 17px 169px;
        border-radius: 5px;
        background: var(--primary-40);
        @media (max-width: 768px) {
            margin-bottom: 150px;
            width: 291px;
            height: 49px;
            padding: 0px;
            font-size: 16px;
        }
    }
`;
