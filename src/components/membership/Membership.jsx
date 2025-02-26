import { useState } from "react";
import styled from "styled-components";
import LogoWrapper from "../logo/LogoWrapper";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/modules/authSlice";

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (max-width: 768px) {
        align-items: normal;
        height: auto;
        margin-bottom: 10px;
    }
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
        @media (max-width: 768px) {
            width: 80%;
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

                input[type="checkbox"] {
                    display: none;
                }
            }
        }

        .bg_gradient1 {
            background-image: url(./membership_BG/membership_bg_DarkGradient_AD_standard.png);
        }

        .bg_gradient2 {
            background-image: url("./membership_BG/membership_bg_standard_DarkGradient02.png");
        }

        .bg_gradient3 {
            background-image: url("./membership_BG/membership_bg_DarkGradient3.png");
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

const Membership = () => {
    const navigate = useNavigate();
    const [selectedMembership, setSelectedMembership] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // 기존의 checked 상태를 한 번에 하나만 선택되게 설정
    const [checkedMemberships, setCheckedMemberships] = useState({
        AD_standard: false,
        standard: false,
        premium: false,
    });

    const handleMembershipChange = (e) => {
        const { value, checked } = e.target;

        // 선택된 멤버십만 체크하고, 나머지는 해제
        setCheckedMemberships({
            AD_standard: value === "AD_standard" ? checked : false,
            standard: value === "standard" ? checked : false,
            premium: value === "premium" ? checked : false,
        });

        if (checked) {
            setSelectedMembership(value); // 선택된 멤버십 설정
        } else {
            setSelectedMembership(""); // 선택 해제 시 초기화
        }

        setErrorMessage(""); // 선택 시 에러 메시지 초기화
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (!selectedMembership) {
            setErrorMessage("멤버십을 선택해주세요.");
        } else {
            setErrorMessage("");
            console.log("ReelPick 시작하기!");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        }
        const membershipInfo = {
            type: selectedMembership,
            price:
                selectedMembership === "AD_standard" ? "5,500" : selectedMembership === "standard" ? "9,500" : "13,900",
            quality: selectedMembership === "premium" ? "4K + HDR" : "1080p",
            devices: selectedMembership === "premium" ? "4" : "2",
            profiles: selectedMembership === "AD_standard" ? "2" : selectedMembership === "standard" ? "4" : "6",
            downloads: selectedMembership === "premium" ? "400" : "200",
            hasAds: selectedMembership === "AD_standard",
            date: new Date().toISOString(),
        };
        localStorage.setItem("selectedMembership", JSON.stringify(membershipInfo));
    };

    // inner 클릭 시 체크박스 상태 변경
    const handleInnerClick = (membershipType) => {
        setCheckedMemberships({
            AD_standard: membershipType === "AD_standard" ? !checkedMemberships.AD_standard : false,
            standard: membershipType === "standard" ? !checkedMemberships.standard : false,
            premium: membershipType === "premium" ? !checkedMemberships.premium : false,
        });

        setSelectedMembership(membershipType); // 클릭된 멤버십을 선택된 상태로 설정
        setErrorMessage(""); // 선택 시 에러 메시지 초기화
    };

    return (
        <Wrap>
            <LogoWrapper />
            <FormContainer>
                <h1>멤버십</h1>
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

                {errorMessage && (
                    <p className="error-message" style={{ color: "red" }}>
                        {errorMessage}
                    </p>
                )}

                <button onClick={handleButtonClick}>ReelPick 시작하기</button>
            </FormContainer>
        </Wrap>
    );
};

export default Membership;
