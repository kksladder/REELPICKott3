import { forwardRef, useEffect, useRef } from "react";
import { SlArrowRight } from "react-icons/sl";
import styled from "styled-components";
import Null from "./Null";
import HeartNull from "./HeartNull";
import MembershipNull from "./MembershipNull";
import { useSelector } from "react-redux";
import Membershipstate from "./Membershipstate";
import WatchingContent from "./WatchingContent";

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const Content = styled.div`
    height: 500px;
    border-bottom: 1px solid #4a4a4a;
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    &:last-child {
        border-bottom: none;
    }
    .contents {
        text-align: center;
        color: var(--black-black-b-100-disabled, #757575);
        font-size: 19px;
        p {
            text-align: center;
            margin-top: 3px;
        }
    }
    div {
        margin-top: auto;
        margin-bottom: auto;
    }
`;

const AccountContents = () => {
    const { goTg } = useSelector((state) => state.authR);
    const aRef = useRef(null);
    const bRef = useRef(null);
    const cRef = useRef(null);

    useEffect(() => {
        if (goTg === "a" && aRef.current) {
            window.scrollTo({ top: aRef.current.offsetTop, behavior: "smooth" });
        } else if (goTg === "b" && bRef.current) {
            window.scrollTo({ top: bRef.current.offsetTop, behavior: "smooth" });
        } else if (goTg === "c" && cRef.current) {
            window.scrollTo({ top: cRef.current.offsetTop, behavior: "smooth" });
        }
    }, [goTg]);
    const { authed } = useSelector((state) => state.authR); // 로그인 여부 상태 가져오기
    return (
        <>
            <H1>MY</H1>
            <Content ref={aRef}>
                <h3>최근 시청중인 컨텐츠</h3>
                <WatchingContent />
            </Content>
            <Content ref={bRef}>
                <h3>찜한 컨텐츠</h3>
                <HeartNull />
            </Content>
            <Content ref={cRef}>
                <h3>현재 이용중인 멤버십</h3>

                {authed ? <Membershipstate /> : <MembershipNull />}
            </Content>
        </>
    );
};

export default AccountContents;
