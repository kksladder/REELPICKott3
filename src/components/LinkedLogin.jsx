import styled from 'styled-components';
export const DividerContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 700px;
    margin: 36px auto;

    .divider-line {
        width: 236px;
        height: 1px;
        background: #333333;
    }

    .divider-text {
        color: #666666;
        padding: 0 10px;
        font-size: 17px;
        white-space: nowrap;
    }
`;
export const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 22px;
    margin-top: 20px;
    margin-bottom: 53px;
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

const LinkedLogin = () => {
    return (
        <>
            <DividerContainer>
                <div className='divider-line'></div>
                <div className='divider-text'>또는</div>
                <div className='divider-line'></div>
            </DividerContainer>

            <SocialLogin>
                <SocialIcon>
                    <img src='./images/icon/google.svg' />
                </SocialIcon>
                <SocialIcon>
                    <img src='./images/icon/youtube.svg' />
                </SocialIcon>
                <SocialIcon>
                    <img src='./images/icon/apple.svg' />
                </SocialIcon>
            </SocialLogin>
        </>
    );
};

export default LinkedLogin;
