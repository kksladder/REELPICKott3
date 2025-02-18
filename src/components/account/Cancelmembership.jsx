import { useDispatch } from "react-redux";
import styled from "styled-components";

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
    max-width: 1132px;
    border-radius: 5px;
    padding: 186px 84px;
    display: flex;
    flex-direction: column;
    background: var(--black-black-b-600-input-hover-bg, #2e2e2e);
    text-align: center;
    gap: 30px;
    justify-content: center; /* 세로 정렬 */
    align-items: center; /* 가로 정렬 */

    h1 {
        color: #fff;
        font-size: 40px;
        font-weight: 700;
    }
    p {
        color: #fff;
        font-size: 19px;
        font-weight: 400;
    }
    button {
        width: 100%;
        height: 64px;
        font-size: 15px;
        border-radius: 5px;
        border-radius: 0.25rem;
        margin-top: 35px;
        transition: background-color 0.2s;
        color: var(--main-orange-normal-default, #f59c04);
        background: #141414;
        border: 1px solid var(--black-black-b-100-disabled, #757575);
        &:hover {
            background: var(--primary-40);
            color: var(--white);
            font-weight: bold;
        }
    }
`;
const Cancelmembership = () => {
    const dispatch = useDispatch();

    const handleCancel = () => {
        localStorage.removeItem("selectedMembership");
        dispatch(setSelectedMembership(null));
    };
    return (
        <>
            <H1>멤버십 관리</H1>
            <P>멤버십 해지</P>
            <Container>
                <h1>언제든 원할 때, 클릭 한 번으로 멤버십을 해지하세요.</h1>
                <p>
                    멤버십을 해지하면 맞춤형 추천작을 시청할 수 없게 됩니다. 그 대신 언제든지 다시 돌아와 멤버십을
                    재시작할 수 있습니다.
                </p>
                <button onClick={handleCancel}>해지하기</button>
            </Container>
        </>
    );
};

export default Cancelmembership;
