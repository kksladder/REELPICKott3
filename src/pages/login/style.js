import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (max-width: 768px) {
        justify-content: normal;
        align-items: normal;
    }
`;

export const FormContainer = styled.div`
    flex: 1;
    @media (max-width: 768px) {
        flex: none;
    }
    .formInner {
        width: 808px;
        height: 837px;
        border-radius: 15px;
        background: #000;
        box-shadow: 0px 4px 30.4px 0px rgba(255, 255, 255, 0.24);
        padding: 206px 118px 160px 163px;
        @media (max-width: 768px) {
            width: 81%;
            margin: 20px 16px;
            padding: 0;
            height: auto;
            background: none;
            box-shadow: none;
        }
    }
    form {
        .mobile_loginBtn {
            @media (max-width: 768px) {
                border: 1px solid red;
            }
        }
    }
`;

export const WelcomeText = styled.div`
    color: #fff;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 33px;
    @media (max-width: 768px) {
        font-size: 26px;
    }
`;

export const InputField = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: none;
    border-bottom: 1px solid #7c7c7c;
    border-radius: 4px;
    background: transparent;
    color: white;
`;

export const DividerContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 700px;
    margin: 36px auto;
    .divider-line {
        flex-grow: 1;
        height: 1px;
        background-color: #333333;
    }

    .divider-text {
        color: #666666;
        padding: 0 10px;
        font-size: 17px;
    }
`;

/* export const InputFillDeWrapper = styled.section`
    width: '527px';
`; */
export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 14px;

    div {
        display: flex;
        gap: 5px;
        .link {
            color: #7c7c7c;
            font-size: 17px;
        }
    }
    .link {
        color: #7c7c7c;
        font-size: 17px;
        color: var(--primary-color);
        &:hover {
            font-weight: bold; /* hover 상태에서 글씨를 굵게 */
        }
    }
`;

export const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 22px;
    margin-top: 20px;
`;

export const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;

    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;
