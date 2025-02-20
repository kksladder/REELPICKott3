import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Membershipstate from "./Membershipstate";
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
const Container = styled.div`
    max-width: 70.1875rem;
    min-widith: 390px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
`;

const Membership = styled.div`
    width: 100%;
    display: flex;
    padding: 1.5rem;
    border-radius: 5px;
    background: var(--black-black-b-600-input-hover-bg, #2e2e2e);
    cursor: pointer;
`;

const Inner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Text = styled.span`
    font-size: 1.1875rem;
    color: var(--white);
`;

const MembershipManagement = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/mypage/membership");
    };
    const handleClick2 = () => {
        navigate("/mypage/cancelmembership");
    };

    return (
        <>
            <H1>멤버십 관리</H1>
            <P>현재 이용중인 멤버십</P>
            <Container>
                <Membershipstate />
                <Membership onClick={handleClick}>
                    <Inner>
                        <Text>멤버십 등록 또는 변경</Text>
                        <MdOutlineArrowForwardIos />
                    </Inner>
                </Membership>
                <Membership onClick={handleClick2}>
                    <Inner>
                        <Text>멤버십 해지</Text>
                        <MdOutlineArrowForwardIos />
                    </Inner>
                </Membership>
            </Container>
        </>
    );
};

export default MembershipManagement;
