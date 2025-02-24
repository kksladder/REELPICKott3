import styled from "styled-components";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
    max-width: 70.1875rem;
    padding: 2rem;
    height: 965px;
    background-color: var(--secondary-600);
    border-radius: 5px;
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 0;
    margin: 0 auto;

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
    /*     display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; */
`;

const Table = styled.div`
    margin: 0 auto;
`;

const TableHeader = styled.div`
    display: grid;
    height: 74px;
    grid-template-columns: 93px 690px 73px 17px auto;
    font-size: var(--font-header-Small);
    color: var(--secondary-50);
    border-bottom: 1px solid var(--secondary-400);
    align-items: center;

    span {
        text-align: center;
    }

    span:nth-child(2) {
        text-align: left;
    }
`;

const TableRow = styled.div`
    display: grid;
    height: 73px;
    width: 100%;
    grid-template-columns: 86px 681px 23px 45px auto;
    font-size: var(--font-header-Small);
    color: var(--secondary-50);
    border-bottom: 1px solid var(--secondary-400);
    cursor: pointer;
    align-items: center;

    span {
        text-align: center;
    }

    span:nth-child(1) {
        text-align: center;
        padding-left: 10px;
    }

    span:nth-child(2) {
        text-align: left;
        padding-left: 10px;
    }

    &:hover {
        background-color: var(--secondary-500);
    }
`;

const Notice = styled.span`
    color: var(--primary-40);
    font-weight: var(--font-weight-Bold);
    text-align: left;
    padding-left: 10px;
`;

const Date = styled.span`
    color: var(--secondary-50);
`;

const Views = styled.span`
    color: var(--secondary-50);
    margin-left: 27px;
`;

const CategoryMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid var(--secondary-400);
`;

const CategoryDivider = styled.div`
    width: 1px;
    height: 14px;
    background-color: var(--secondary-400);
`;

const CategoryButton = styled.button`
    font-size: var(--font-header-Small);
    color: ${(props) => (props.isActive ? "var(--white)" : "var(--secondary-50)")};
    padding: 20px 24px;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        color: var(--white);
    }
`;

const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;

const FAQList = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const FAQItem = styled.div`
    font-size: var(--font-header-Small);
    border-bottom: 1px solid var(--secondary-400);
`;

const FAQQuestion = styled.div`
    display: flex;
    min-height: 93px;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    color: var(--secondary-50);
    cursor: pointer;

    &:hover {
        color: var(--white);
    }
`;

const FAQType = styled.span`
    color: var(--secondary-50);
    margin-right: 24px;
`;

const FAQAnswer = styled.div`
    padding: 24px 137px;
    background-color: var(--secondary-500);
    color: var(--secondary-50);
    line-height: 1.5;
    font-size: 16px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 380px;
    gap: 8px;
`;

const PageButton = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    color: ${(props) => (props.isActive ? "var(--white)" : "var(--secondary-50)")};
    cursor: pointer;

    &:hover {
        color: var(--white);
    }
`;

const AccountCS = () => {
    const [activeTab, setActiveTab] = useState("notice");
    const [activeCategory, setActiveCategory] = useState("전체");
    const [activeFAQ, setActiveFAQ] = useState(null);

    const categories = ["전체", "회원/로그인", "이용권/결제", "재생/오류", "해제/환불"];

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
            title: "[공지] 릴픽 이용권 요구 사양",
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
    const handleClick = () => {
        navigate("/mypage/noticecontents");
    };
    return (
        <Container>
            <MainTitle>고객센터</MainTitle>

            <FAQSection>
                <SectionHeader>
                    <TabButton isActive={activeTab === "notice"} onClick={() => setActiveTab("notice")}>
                        공지사항
                    </TabButton>
                    <TabButton isActive={activeTab === "faq"} onClick={() => setActiveTab("faq")}>
                        자주 묻는 질문
                    </TabButton>
                </SectionHeader>

                {activeTab === "notice" && (
                    <TableContainer>
                        <Table>
                            <TableHeader>
                                <span>번호</span>
                                <span>제목</span>
                                <span>등록일</span>
                                <span></span>
                                <span>조회수</span>
                            </TableHeader>

                            {noticeItems.map((item) => (
                                <TableRow key={item.id} onClick={handleClick}>
                                    <span>{item.id}</span>
                                    {item.isNotice ? <Notice>{item.title}</Notice> : <span>{item.title}</span>}
                                    <Date>{item.date}</Date>
                                    <span></span>
                                    <Views>{item.views}</Views>
                                </TableRow>
                            ))}
                        </Table>
                        <Pagination>
                            <PageButton>1</PageButton>
                            {/*  <PageButton>2</PageButton>
                            <PageButton>3</PageButton>
                            <PageButton>4</PageButton>
                            <PageButton>5</PageButton>
                            <PageButton>6</PageButton> */}
                        </Pagination>
                    </TableContainer>
                )}

                {activeTab === "faq" && (
                    <FAQContainer>
                        <CategoryMenu>
                            {categories.map((category, index) => (
                                <>
                                    <CategoryButton
                                        key={category}
                                        isActive={activeCategory === category}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setActiveFAQ(null); // 카테고리 변경 시 열린 FAQ 닫기
                                        }}
                                    >
                                        {category}
                                    </CategoryButton>
                                    {index !== categories.length - 1 && <CategoryDivider />}
                                </>
                            ))}
                        </CategoryMenu>
                        <FAQList>
                            {filteredFAQs.map((item, index) => (
                                <FAQItem key={index}>
                                    <FAQQuestion onClick={() => toggleFAQ(index)}>
                                        <div>
                                            <FAQType>{item.type}</FAQType>
                                            <span>{item.question}</span>
                                        </div>
                                        {activeFAQ === index ? (
                                            <ChevronUp color="var(--secondary-50)" size={20} />
                                        ) : (
                                            <ChevronDown color="var(--secondary-50)" size={20} />
                                        )}
                                    </FAQQuestion>
                                    {activeFAQ === index && <FAQAnswer>{item.answer}</FAQAnswer>}
                                </FAQItem>
                            ))}
                        </FAQList>
                    </FAQContainer>
                )}
            </FAQSection>
        </Container>
    );
};

export default AccountCS;
