import styled from "styled-components";

const Container = styled.div`
    color: var(--secondary-00);
    padding: 24px;
`;

const MainTitle = styled.h1`
    font-size: var(--font-header-Xlarge);
    font-weight: var(--font-weight-Bold);
    margin-top: 50px;
    margin-bottom: 83px;
`;

const FAQSection = styled.div`
    width: 1132px;
    height: 965px;
    background-color: var(--secondary-600);
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 16px;
    border-bottom: 1px solid var(--secondary-400);
`;

const SectionTitle = styled.h2`
    font-size: var(--font-body-Small);
    color: var(--white);
    margin-right: 16px;
    cursor: pointer;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--primary-40);

    &:hover {
        color: var(--primary-50);
    }
`;

const SectionLink = styled.span`
    font-size: var(--font-body-Small);
    color: var(--white);
    margin-right: 16px;
    cursor: pointer;
    padding-bottom: 20px;

    &:hover {
        color: var(--primary-50);
    }
`;

const Table = styled.div`
    width: 1132px;
`;

const TableHeader = styled.div`
    display: grid;
    width: 100%;
    height: 74px;
    grid-template-columns: 86px 667px 64px 27px auto;
    padding: 12px 24px;
    font-size: var(--font-body-Xsmall);
    color: var(--secondary-50);
    border-bottom: 1px solid var(--secondary-400);
    align-items: center;
`;

const TableRow = styled.div`
    display: grid;
    width: 100%;
    height: 74px;
    grid-template-columns: 86px 667px 64px 27px auto;
    padding: 12px 24px;
    font-size: var(--font-body-Xsmall);
    color: var(--secondary-50);
    border-bottom: 1px solid var(--secondary-400);
    cursor: pointer;
    align-items: center;

    &:hover {
        background-color: var(--secondary-500);
    }
`;

const Notice = styled.span`
    color: var(--primary-40);
    font-weight: var(--font-weight-Bold);
`;

const Date = styled.span`
    color: var(--secondary-50);
`;

const Views = styled.span`
    color: var(--secondary-50);
    margin-left: 27px;
`;

const AccountCS = () => {
    return (
        <Container>
            <MainTitle>고객센터</MainTitle>

            <FAQSection>
                <SectionHeader>
                    <SectionTitle>공지사항</SectionTitle>
                    <SectionLink>자주 묻는 질문</SectionLink>
                </SectionHeader>

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
                        <Views>343,23k</Views>
                    </TableRow>

                    <TableRow>
                        <span>2</span>
                        <Notice>[공지] 업데이트 안내</Notice>
                        <Date>2023.01.27</Date>
                        <span></span>
                        <Views>343,23k</Views>
                    </TableRow>

                    <TableRow>
                        <span>3</span>
                        <Notice>[공지] 서비스 점검 안내</Notice>
                        <Date>2023.01.27</Date>
                        <span></span>
                        <Views>343,23k</Views>
                    </TableRow>

                    <TableRow>
                        <span>4</span>
                        <span>12월 휴무 프로그램 안내</span>
                        <Date>2023.01.27</Date>
                        <span></span>
                        <Views>343,23k</Views>
                    </TableRow>
                </Table>
            </FAQSection>
        </Container>
    );
};

export default AccountCS;
