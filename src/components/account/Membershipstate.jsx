import styled from "styled-components";
const MembershipstateContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1.5rem;

    border-radius: 17px;
    border: 0.25px solid rgba(255, 255, 255, 0.15);

    background: linear-gradient(
        132deg,
        rgba(209, 132, 0, 0.13) -36.04%,
        rgba(255, 166, 13, 0.33) 52.66%,
        rgba(255, 215, 146, 0.28) 139.54%
    );

    box-shadow: 0px 0px 3px 0px #ffc43b inset, 0px 0px 4px 0px rgba(255, 177, 59, 0.1);
    backdrop-filter: blur(1px);
`;
const Inner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const TextInner = styled.div`
    width: 100%;
    display: flex;

    justify-content: space-between;
    color: var(--white);
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-content: center;
        justify-content: flex-start;
    }
    .bg_gradient {
        width: 700px;
        height: 100px;
        border-radius: 8px;
        background-size: cover;
        background-position: center center;
        background-image: url(/membership_BG/membership_bg_DarkGradient3.png);
    }
`;
const Membershipstate = () => {
    // 1. localStorage에서 'selectedMembership' 값을 가져옵니다.
    const selectedMembershipString = localStorage.getItem("selectedMembership");

    // 2. JSON으로 파싱하여 객체로 변환합니다.
    const selectedMembership = selectedMembershipString ? JSON.parse(selectedMembershipString) : null;
    return (
        <>
            <MembershipstateContainer>
                <Inner>
                    <TextInner>
                        <div>
                            <div>{selectedMembership.type}</div>
                            <div>{selectedMembership.quality}</div>
                            <div>월요금 : {selectedMembership.price}원</div>
                        </div>
                        <div className="bg_gradient"></div>
                    </TextInner>
                </Inner>
            </MembershipstateContainer>
        </>
    );
};

export default Membershipstate;
