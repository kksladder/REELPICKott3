import { forwardRef, useEffect, useRef } from "react";
import { SlArrowRight } from "react-icons/sl";
import styled from "styled-components";
import Null from "./Null";
import HeartNull from "./HeartNull";
import MembershipNull from "./MembershipNull";

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
    // 1. localStorage에서 'selectedMembership' 값을 가져옵니다.
    const selectedMembershipString = localStorage.getItem("selectedMembership");

    // 2. JSON으로 파싱하여 객체로 변환합니다.
    const selectedMembership = selectedMembershipString ? JSON.parse(selectedMembershipString) : null;

    // 3. 객체의 내용을 확인합니다.
    console.log(selectedMembership);

    // 예시로 특정 값에 접근할 때:
    if (selectedMembership) {
        console.log(selectedMembership.type); // 'AD_standard'
        console.log(selectedMembership.price); // '5,500'
        console.log(selectedMembership.date); // '2025-02-12T01:37:39.259Z'
    }

    return (
        <>
            <H1>MY</H1>
            <Content>
                <h3>최근 시청중인 컨텐츠</h3>
                <Null />
            </Content>
            <Content id="membership-section2">
                <h3>찜한 컨텐츠</h3>
                <HeartNull />
            </Content>
            <Content id="membership-section">
                <h3>현재 이용중인 멤버십</h3>

                {selectedMembership && <MembershipNull />}
            </Content>
        </>
    );
};

export default AccountContents;
