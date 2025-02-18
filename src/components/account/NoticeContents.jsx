import styled from "styled-components";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MdOutlineArrowBack, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router";

const Container = styled.div`
    color: var(--secondary-00);
    padding: 24px;
    white-space: pre-wrap;
`;

const MainTitle = styled.h1`
    font-size: var(--font-header-Xlarge);
    font-weight: var(--font-weight-Bold);
    margin-top: 54px;
    margin-bottom: 83px;
`;

const FAQSection = styled.div`
    width: 1132px;
    height: 965px;
    background-color: var(--secondary-600);
    border-radius: 5px;
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 0;
    margin: 0 auto;
    width: 1086px;
    border-bottom: 1px solid var(--secondary-400);
`;

const TabButton = styled.button`
    position: relative;
    font-size: var(--font-header-Small);
    color: ${(props) => (props.isActive ? "var(--primary-40)" : "var(--secondary-50)")};
    margin-right: 32px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 20px 0;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${(props) => (props.isActive ? "var(--primary-40)" : "transparent")};
    }

    &:hover {
        color: ${(props) => (props.isActive ? "var(--primary-40)" : "var(--white)")};
    }
`;

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Table = styled.div`
    span {
        display: inline-block;
        margin-top: 60px;
        cursor: pointer;
    }
`;

const TableRow = styled.div`
    color: var(--white);
    font-size: 24px;
`;

const Date = styled.span`
    color: var(--secondary-50);
    margin-left: 139px;
`;

const Views = styled.span`
    color: var(--secondary-50);
    margin-left: 27px;
`;

export const Service = styled.div`
    color: var(--black-black-b-100-disabled, #757575);

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
    margin-top: 30px;
    margin-bottom: 102px;
    ul {
        li {
            list-style: disc;
            margin-left: 18px;
        }
    }
`;
const NoticeContents = () => {
    const [activeTab, setActiveTab] = useState("notice");
    const [activeCategory, setActiveCategory] = useState("전체");
    const [activeFAQ, setActiveFAQ] = useState(null);

    const faqItems = [
        {
            type: "회원/로그인",
            question: "로그인이 안되요. 어떻게 해야하나요?",
            answer: "1. 아이디와 비밀번호를 정확히 입력했는지 확인해주세요.\n2. Caps Lock이 켜져있는지 확인해주세요.\n3. 비밀번호 재설정을 통해 새로운 비밀번호를 설정해보세요.",
        },
        {
            type: "회원/로그인",
            question: "회원가입은 어떻게 하나요?",
            answer: "메인 페이지 우측 상단의 '지금 가입하기' 버튼을 클릭하여 진행하실 수 있습니다. 이메일 인증 후 기본 정보를 입력하시면 됩니다.",
        },
        {
            type: "이용권/결제",
            question: "이용권 구매는 어떻게 하나요?",
            answer: "마이페이지 > 이용권 구매 메뉴에서 원하시는 이용권을 선택하여 구매하실 수 있습니다. 신용카드, 계좌이체 등 다양한 결제 수단을 지원합니다.",
        },
        {
            type: "이용권/결제",
            question: "결제가 실패했어요.",
            answer: "결제 실패의 주요 원인은 한도 초과, 잔액 부족 등입니다. 카드사나 은행에 확인 후 다시 시도해주세요.",
        },
        {
            type: "재생/오류",
            question: "동영상이 재생되지 않아요.",
            answer: "1. 인터넷 연결을 확인해주세요.\n2. 브라우저 캐시를 삭제해보세요.\n3. 다른 브라우저로 시도해보세요.",
        },
        {
            type: "해제/환불",
            question: "환불은 어떻게 신청하나요?",
            answer: "마이페이지 > 멤버십 결제내역에서 환불을 원하시는 이용권의 '환불신청' 버튼을 클릭하시면 됩니다. 단, 이용 시작 후에는 환불이 제한될 수 있습니다.",
        },
    ];

    const noticeItems = [
        {
            id: 1,
            title: "릴픽 이용권 요구 사양",
            date: "2025.01.27",
            views: "343,239",
            isNotice: true,
        },
    ];

    const filteredFAQs = activeCategory === "전체" ? faqItems : faqItems.filter((item) => item.type === activeCategory);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate("/mypage/cs");
    };

    return (
        <Container>
            <MainTitle>고객센터</MainTitle>

            <FAQSection>
                <SectionHeader>
                    <TabButton isActive={activeTab === "notice"} onClick={() => setActiveTab("notice")}>
                        공지사항
                    </TabButton>
                </SectionHeader>

                {activeTab === "notice" && (
                    <TableContainer>
                        <Table>
                            <span onClick={handleBackClick}>
                                <MdOutlineArrowBackIos />
                                뒤로가기
                            </span>

                            {noticeItems.map((item) => (
                                <TableRow key={item.id}>
                                    {item.title}
                                    <Date>등록일 : {item.date}</Date>
                                    <Views>조회수 : {item.views}</Views>
                                </TableRow>
                            ))}
                            <Service>
                                <h2>서비스 이용사양</h2>
                                <ul>
                                    <li>
                                        <strong>PC:</strong> Window 7 이상 / HTML5 지원 모든 브라우저
                                    </li>
                                    <li>
                                        <strong>스마트폰/태블릿:</strong> Android OS 8.0 이상 / iOS 15.0 이상 (Android
                                        8.0 / iOS 15.0 미만 버전 APP 이용 불가)
                                    </li>
                                    <li>
                                        <strong>애플TV:</strong> tvOS 15.0 이상의 Apple TV 기기
                                    </li>
                                    <li>
                                        <strong>스마트TV:</strong> 삼성 스마트TV 2016년형 이상 (타이젠 2.4 이상) / LG
                                        스마트TV 2016년형 이상 (Web OS 3.0 이상)
                                    </li>
                                    <li>
                                        <strong>안드로이드TV:</strong> Android OS 8.0 이상의 Android TV 기기 (1,400MB
                                        메모리 이상)
                                    </li>
                                    <li>스마트폰/태블릿/TV 기기에서의 시청은 티빙 공식 APP 설치 후 이용 가능합니다.</li>
                                    <li>
                                        4K 화질 이용은 이용권 종류, 네트워크 환경, 콘텐츠 계약 조건, 디바이스 종류 및
                                        사양에 따라 제한될 수 있습니다.
                                    </li>
                                    <li>
                                        DRM 콘텐츠는 기기 등록한 디바이스에서만 이용 가능합니다. 루팅된 단말 및 일부
                                        디바이스에서는 DRM 콘텐츠를 이용하실 수 없습니다.
                                    </li>
                                    <li>
                                        OS 버전 및 기기사양 (메모리), 제조사에 따라 일부 기기에서는 서비스가 정상
                                        동작하지 않을 수 있습니다.
                                    </li>
                                    <li>저작권자의 요청으로 기기에 따라 일부 콘텐츠는 시청이 제한될 수 있습니다.</li>
                                    <li>
                                        콘텐츠 다운로드는 모바일/태블릿 APP에서 이용 가능하며, Apple TV+ 및 일부
                                        콘텐츠는 저작권자의 요청 등으로 다운로드 시청이 제한될 수 있습니다.
                                    </li>
                                </ul>
                            </Service>
                        </Table>
                    </TableContainer>
                )}
            </FAQSection>
        </Container>
    );
};

export default NoticeContents;
