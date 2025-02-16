import styled from "styled-components";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Container = styled.div`
    color: var(--secondary-00);
    padding: 24px;
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
    width: 1086px;
    margin: 0 auto;
`;

const TableHeader = styled.div`
    display: grid;
    height: 74px;
    width: 1083px;
    grid-template-columns: 86px 667px 64px 27px auto;
    padding: 12px 24px;
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
    width: 1083px;
    grid-template-columns: 86px 667px 64px 27px auto;
    padding: 12px 24px;
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
    width: 1083px;
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
    width: 1083px;
    margin: 0 auto;
`;

const FAQItem = styled.div`
    font-size: var(--font-header-Small);
    border-bottom: 1px solid var(--secondary-400);
`;

const FAQQuestion = styled.div`
    display: flex;
    height: 93px;
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

const AccountCS = () => {
    const [activeTab, setActiveTab] = useState("notice");
    const [activeCategory, setActiveCategory] = useState("전체");

    const categories = ["전체", "회원/로그인", "이용권/결제", "재생/오류", "해제/환불"];

    const faqItems = [
        { type: "회원/로그인", question: "이용권이 있는 계정이 무엇인지 찾고싶어요." },
        { type: "회원/로그인", question: "이용권이 있는 계정이 무엇인지 찾고싶어요." },
        { type: "회원/로그인", question: "이용권이 있는 계정이 무엇인지 찾고싶어요." },
        { type: "회원/로그인", question: "이용권이 있는 계정이 무엇인지 찾고싶어요." },
        { type: "회원/로그인", question: "이용권이 있는 계정이 무엇인지 찾고싶어요." },
        { type: "회원/로그인", question: "이용권이 있는 계정이 무엇인지 찾고싶어요." },
        { type: "회원/로그인", question: "이용권이 있는 계정이 무엇인지 찾고싶어요." },
    ];

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

                            <TableRow>
                                <span>1</span>
                                <Notice>[공지] 멤버십 가이드</Notice>
                                <Date>2023.01.27</Date>
                                <span></span>
                                <Views>343,239</Views>
                            </TableRow>

                            <TableRow>
                                <span>2</span>
                                <Notice>[공지] 업데이트 안내</Notice>
                                <Date>2023.01.27</Date>
                                <span></span>
                                <Views>343,231</Views>
                            </TableRow>

                            <TableRow>
                                <span>3</span>
                                <Notice>[공지] 서비스 점검 안내</Notice>
                                <Date>2023.01.27</Date>
                                <span></span>
                                <Views>343,230</Views>
                            </TableRow>

                            <TableRow>
                                <span>4</span>
                                <span>12월 휴무 프로그램 안내</span>
                                <Date>2023.01.27</Date>
                                <span></span>
                                <Views>343,230</Views>
                            </TableRow>
                        </Table>
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
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {category}
                                    </CategoryButton>
                                    {index !== categories.length - 1 && <CategoryDivider />}
                                </>
                            ))}
                        </CategoryMenu>
                        <FAQList>
                            {faqItems.map((item, index) => (
                                <FAQItem key={index}>
                                    <FAQQuestion>
                                        <div>
                                            <FAQType>{item.type}</FAQType>
                                            <span>{item.question}</span>
                                        </div>
                                        <ChevronDown color="var(--secondary-50)" size={20} />
                                    </FAQQuestion>
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
