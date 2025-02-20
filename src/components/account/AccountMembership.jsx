import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 76px;
`;

export const FormContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 92px;
    align-items: center;

    h1 {
        font-size: 32px;
    }

    button {
        width: 527px;
        height: 48px;
        border-radius: 5px;
        background: var(--primary-30, #fce0b1);
        &:hover {
            background: var(--primary-50, #dd8c04);
            color: white;
        }
    }

    div {
        display: flex;
        gap: 48px;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    .bb {
        background: linear-gradient(
            132deg,
            rgba(217, 203, 179, 0) -36.04%,
            rgba(255, 247, 233, 0.05) 52.66%,
            rgba(255, 255, 255, 0.12) 139.54%
        );
    }
    .aa {
        background: linear-gradient(
            132deg,
            rgba(209, 132, 0, 0.13) -36.04%,
            rgba(255, 166, 13, 0.33) 52.66%,
            rgba(255, 215, 146, 0.28) 139.54%
        );
        box-shadow: 0px 0px 3px 0px #ffc43b inset, 0px 0px 4px 0px rgba(255, 177, 59, 0.1);
        backdrop-filter: blur(1px);
    }

    .inner {
        width: 349px;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 17px;
        padding: 22px 16px;
        box-shadow: 0px 0px 3px 0px rgba(255, 255, 255, 0.32) inset;

        .bg_gradient1,
        .bg_gradient2,
        .bg_gradient3 {
            font-size: 17px;
            font-weight: 500;
            width: 321px;
            height: 100px;
            background-size: cover;
            background-position: center center;
            display: flex;
            flex-direction: column;
            padding: 14px 13px;
            border-radius: 8px;
            gap: 9px;
            form {
                display: flex;
                justify-content: flex-end;
            }
        }

        .bg_gradient1 {
            background-image: url(/membership_BG/membership_bg_DarkGradient_AD_standard.png);
        }

        .bg_gradient2 {
            background-image: url("/membership_BG/membership_bg_standard_DarkGradient02.png");
        }

        .bg_gradient3 {
            background-image: url("/membership_BG/membership_bg_DarkGradient3.png");
        }

        ul {
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
            li {
                margin-top: 31px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
`;

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 103px;
`;
export const P = styled.p`
    color: var(--Black-Black-B0, #fff);
    /* Header/Small */
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
`;
export const P2 = styled.p`
    color: var(--black-black-b-100-disabled, #757575);
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 102px;
`;
export const Service = styled.div`
    color: var(--black-black-b-100-disabled, #757575);
    font-family: "Noto Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
    margin-bottom: 102px;
    li {
        list-style-type: disc;
    }
`;
const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

const Button = styled.button`
    width: 100%/2;
    height: 64px;
    margin-bottom: 102px;
    /*  padding: 17px 0px 18px 0px; */
    font-size: 15px;
    border-radius: 5px;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    color: ${(props) => (props.secondary ? "#757575" : "white")};
    background: ${(props) => (props.secondary ? "#141414" : "#F59C04")};
    border: 1px solid var(--black-black-b-100-disabled, #757575);
`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        color: var(--white);
        border-radius: 33px;
        padding: 10px 20px;
        border: 1px solid var(--main-orange-normal-default, #f59c04);
    }
`;
const AccountMembership = () => {
    const [selectedMembership, setSelectedMembership] = useState("");
    const [checkedMemberships, setCheckedMemberships] = useState({
        AD_standard: false,
        standard: false,
        premium: false,
    });
    const [originmembership, setOriginMembership] = useState(""); // originmembership 상태 추가

    useEffect(() => {
        // 컴포넌트가 로드될 때 로컬 스토리지에서 멤버십 정보를 불러옵니다.
        const storedMembership = localStorage.getItem("selectedMembership");
        if (storedMembership) {
            const membership = JSON.parse(storedMembership);
            setOriginMembership(membership.type); // originmembership 상태 업데이트
            setSelectedMembership(membership.type);
            setCheckedMemberships({
                AD_standard: membership.type === "AD_standard",
                standard: membership.type === "standard",
                premium: membership.type === "premium",
            });
        }
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    useEffect(() => {
        // originmembership이 변경되었을 때 실행되는 코드
        console.log(`originmembership이 변경되었습니다: ${originmembership}`);
    }, [selectedMembership]); // originmembership이 변경될 때마다 실행

    const handleMembershipChange = (e) => {
        const { value, checked } = e.target;

        // 다른 멤버십을 모두 해제하고 선택한 멤버십만 체크합니다.
        setCheckedMemberships({
            AD_standard: value === "AD_standard" && checked,
            standard: value === "standard" && checked,
            premium: value === "premium" && checked,
        });
    };

    const handleInnerClick = (membershipType) => {
        // 멤버십을 클릭하면 해당 멤버십만 선택하도록 설정
        setCheckedMemberships({
            AD_standard: membershipType === "AD_standard",
            standard: membershipType === "standard",
            premium: membershipType === "premium",
        });

        setSelectedMembership(membershipType); // 상태 업데이트
    };

    const handleSave = () => {
        if (selectedMembership) {
            // selectedMembership을 사용
            const membershipInfo = {
                type: selectedMembership,
                price:
                    selectedMembership === "AD_standard"
                        ? "5,500"
                        : selectedMembership === "standard"
                        ? "9,500"
                        : "13,900",
                quality: selectedMembership === "premium" ? "4K + HDR" : "1080p",
                devices: selectedMembership === "premium" ? "4" : "2",
                profiles: selectedMembership === "AD_standard" ? "2" : selectedMembership === "standard" ? "4" : "6",
                downloads: selectedMembership === "premium" ? "400" : "200",
                hasAds: selectedMembership === "AD_standard",
                date: new Date().toISOString(),
            };

            // 선택된 멤버십 정보를 localStorage에 저장
            localStorage.setItem("selectedMembership", JSON.stringify(membershipInfo));
            alert(`선택한 멤버십: ${selectedMembership}으로 변경되었습니다.`);
        } else {
            alert("먼저 멤버십을 선택하세요.");
        }
    };

    return (
        <Wrapper>
            <H1>멤버십 관리</H1>
            <P>멤버십 등록 또는 변경</P>
            <P2>
                새 멤버십을 이용해 보세요. 마음에 안 들면 언제든지 다시 전환하실 수 있습니다.
                <br />
                모든 멤버십에서 다양한 콘텐츠, 게임, 라이브 이벤트를 즐길 수 있습니다.
            </P2>
            <Wrap>
                <FormContainer>
                    <HeaderRight>
                        <span style={{ cursor: "pointer" }}>
                            현재 멤버십:
                            {
                                originmembership === "AD_standard"
                                    ? "광고형스탠다드" // originmembership이 "AD_standard"일 경우 반환
                                    : originmembership === "standard"
                                    ? "스탠다드" // originmembership이 "standard"일 경우 반환
                                    : originmembership === "premium"
                                    ? "프리미엄" // originmembership이 "premium"일 경우 반환
                                    : null // 그 외의 경우 null 반환 (옵션)
                            }{" "}
                        </span>
                    </HeaderRight>
                    <div>
                        <div
                            className={`inner ${checkedMemberships.AD_standard ? "aa" : "bb"}`}
                            onClick={() => handleInnerClick("AD_standard")}
                        >
                            <div className="bg_gradient1">
                                <h3>광고형스탠다드</h3>
                                <p>1080p</p>
                                <form>
                                    <input
                                        type="checkbox"
                                        name="membership"
                                        value="AD_standard"
                                        checked={checkedMemberships.AD_standard}
                                        onChange={handleMembershipChange}
                                    />
                                </form>
                            </div>
                            <ul>
                                <li>
                                    월요금<span>5,500원</span>
                                </li>
                                <li>
                                    동시시청<span>2대</span>
                                </li>
                                <li>
                                    프로필<span>2개</span>
                                </li>
                                <li>
                                    화질<span>좋음</span>
                                </li>
                                <li>
                                    콘텐츠 다운로드<span>200회</span>
                                </li>
                                <li>
                                    광고
                                    <span>
                                        <FaCheck />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={`inner ${checkedMemberships.standard ? "aa" : "bb"}`}
                            onClick={() => handleInnerClick("standard")}
                        >
                            <div className="bg_gradient2">
                                <h3>스탠다드</h3>
                                <p>1080p</p>
                                <form>
                                    <input
                                        type="checkbox"
                                        name="membership"
                                        value="standard"
                                        checked={checkedMemberships.standard}
                                        onChange={handleMembershipChange}
                                    />
                                </form>
                            </div>
                            <ul>
                                <li>
                                    월요금<span>9,500원</span>
                                </li>
                                <li>
                                    동시시청<span>2대</span>
                                </li>
                                <li>
                                    프로필<span>4개</span>
                                </li>
                                <li>
                                    화질<span>가장좋음</span>
                                </li>
                                <li>
                                    콘텐츠 다운로드<span>200회</span>
                                </li>
                                <li>
                                    광고
                                    <span>
                                        <FaXmark />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={`inner ${checkedMemberships.premium ? "aa" : "bb"}`}
                            onClick={() => handleInnerClick("premium")}
                        >
                            <div className="bg_gradient3">
                                <h3>프리미엄</h3>
                                <p>4K + HDR</p>
                                <form>
                                    <input
                                        type="checkbox"
                                        name="membership"
                                        value="premium"
                                        checked={checkedMemberships.premium}
                                        onChange={handleMembershipChange}
                                    />
                                </form>
                            </div>
                            <ul>
                                <li>
                                    월요금<span>13,900원</span>
                                </li>
                                <li>
                                    동시시청<span>4대</span>
                                </li>
                                <li>
                                    프로필<span>6개</span>
                                </li>
                                <li>
                                    화질<span>가장 좋음</span>
                                </li>
                                <li>
                                    콘텐츠 다운로드<span>400회</span>
                                </li>
                                <li>
                                    광고
                                    <span>
                                        <FaXmark />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FormContainer>
            </Wrap>
            <Service>
                <h2>서비스 이용사양</h2>
                <ul>
                    <li>
                        <strong>PC:</strong> Window 7 이상 / HTML5 지원 모든 브라우저
                    </li>
                    <li>
                        <strong>스마트폰/태블릿:</strong> Android OS 8.0 이상 / iOS 15.0 이상 (Android 8.0 / iOS 15.0
                        미만 버전 APP 이용 불가)
                    </li>
                    <li>
                        <strong>애플TV:</strong> tvOS 15.0 이상의 Apple TV 기기
                    </li>
                    <li>
                        <strong>스마트TV:</strong> 삼성 스마트TV 2016년형 이상 (타이젠 2.4 이상) / LG 스마트TV 2016년형
                        이상 (Web OS 3.0 이상)
                    </li>
                    <li>
                        <strong>안드로이드TV:</strong> Android OS 8.0 이상의 Android TV 기기 (1,400MB 메모리 이상)
                    </li>
                    <li>스마트폰/태블릿/TV 기기에서의 시청은 티빙 공식 APP 설치 후 이용 가능합니다.</li>
                    <li>
                        4K 화질 이용은 이용권 종류, 네트워크 환경, 콘텐츠 계약 조건, 디바이스 종류 및 사양에 따라 제한될
                        수 있습니다.
                    </li>
                    <li>
                        DRM 콘텐츠는 기기 등록한 디바이스에서만 이용 가능합니다. 루팅된 단말 및 일부 디바이스에서는 DRM
                        콘텐츠를 이용하실 수 없습니다.
                    </li>
                    <li>
                        OS 버전 및 기기사양 (메모리), 제조사에 따라 일부 기기에서는 서비스가 정상 동작하지 않을 수
                        있습니다.
                    </li>
                    <li>저작권자의 요청으로 기기에 따라 일부 콘텐츠는 시청이 제한될 수 있습니다.</li>
                    <li>
                        콘텐츠 다운로드는 모바일/태블릿 APP에서 이용 가능하며, Apple TV+ 및 일부 콘텐츠는 저작권자의
                        요청 등으로 다운로드 시청이 제한될 수 있습니다.
                    </li>
                </ul>
            </Service>
            <ButtonGroup>
                <Button onClick={handleSave}>저장</Button>
                <Button secondary>취소</Button>
            </ButtonGroup>
        </Wrapper>
    );
};

export default AccountMembership;
