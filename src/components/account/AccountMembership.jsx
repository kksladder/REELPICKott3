import styled from "styled-components";
import { ChevronRight } from "lucide-react";

const Container = styled.div`
    min-height: 100vh;
    color: var(--secondary-00);
    padding: 24px;
`;

const MainTitle = styled.h1`
    font-size: var(--font-header-Xlarge);
    font-weight: var(--font-weight-Bold);
    margin-top: 54px;
    margin-bottom: 112px;
`;

const SubTitle = styled.p`
    color: var(--secondary-00);
    font-size: var(--font-header-Xsmall);
    margin-bottom: 20px;
`;

const MembershipCard = styled.div`
    background: var(--primary-50);
    border-radius: 8px;
    width: 1132px;
    height: 142px;
    padding: 16px;
    margin-bottom: 56px;
`;

const CardTitle = styled.h3`
    font-size: var(--font-content-XXsmall);
    font-weight: var(--font-weight-Bold);
    margin-bottom: 8px;
`;

const Resolution = styled.span`
    display: inline-block;
    font-size: var(--font-body-Xsmall);
    color: var(--secondary-00);
    margin: 9px 0px 0px 0px;
`;

const Price = styled.p`
    color: var(--secondary-00);
    font-size: var(--font-body-Xsmall);
    margin-top: 50px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1126px;
    height: 72px;
    gap: 12px;
`;

const Button = styled.button`
    width: 100%;
    background-color: var(--secondary-600);
    padding: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.2s;
    margin-bottom: 8px;
    color: var(--secondary-100);

    &:hover {
        color: var(--secondary-00);
    }
`;

const MembershipPage = () => {
    return (
        <Container id="membership_section">
            <MainTitle>멤버십 관리</MainTitle>

            <div>
                <SubTitle>현재 이용중인 멤버십</SubTitle>
                <MembershipCard>
                    <div>
                        <CardTitle>프리미엄</CardTitle>
                        <Resolution>4K + HDR</Resolution>
                        <Price>월 15,000원</Price>
                    </div>
                </MembershipCard>

                <ButtonContainer>
                    <Button>
                        <span>멤버십 등록 또는 변경</span>
                        <ChevronRight size={19} />
                    </Button>
                    <Button>
                        <span>멤버십 해지</span>
                        <ChevronRight size={19} />
                    </Button>
                </ButtonContainer>
            </div>
        </Container>
    );
};

export default MembershipPage;
