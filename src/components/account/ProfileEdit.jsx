import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../ui/icon/ProfileImage';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { h1 } from 'framer-motion/client';
import ProfileModal from './ProfileModal';

const Container = styled.div`
    position: relative;
    max-width: 70.1875rem;
    border-bottom: 1px solid #4a4a4a;
    color: white;
    .edit {
        padding: 1.5rem;
        background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
        /* 프로필 수정 inner */
        box-shadow: 0px 7px 10.7px 0px rgba(0, 0, 0, 0.38) inset;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    justify-content: space-between;
    background: var(--black-black-b-600-input-hover-bg, #2e2e2e);
`;

const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const ProfileImageInner = styled.div`
    width: ${(props) => props.size || '2rem'};
    height: ${(props) => props.size || '2rem'};
    border-radius: 50%;
    overflow: hidden;
    background-color: #3b82f6;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const HeaderText = styled.span`
    font-size: 1.1875rem;
    color: var(--white);
    svg {
        margin-right: 15px;
    }
    p {
        margin-top: 7px;
        margin-left: 42px;
        font-size: 14px;
        color: #949494;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        color: var(--white);
        padding: 10px 20px;
    }
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-top: 3.125rem;
    margin-bottom: 20px;
`;

const EditSection = styled.div`
    display: flex;
    gap: 2rem;
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 20px;
    margin-bottom: 18px;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid #3f3f46;
    border-radius: 0.25rem;
    padding: 16px;
    color: white;
    font-size: 0.875rem;
    margin-top: 7px;
    background: #2e2e2e;
    &::placeholder {
        color: #949494;
    }
`;

const HelpText = styled.p`
    font-size: 1.1875rem;
    color: var(--black-black-b-80-font-disable, #949494);
    margin-top: 0.75rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Button = styled.button`
    width: 100%/2;
    padding: 17px 0px 18px 0px;
    font-size: 24px;
    border-radius: 5px;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    color: ${(props) => (props.secondary ? '#9CA3AF' : 'white')};
    background: ${(props) => (props.secondary ? '#3B3B3B' : '#F59C04')};
    border: 1px solid var(--black-black-b-100-disabled, #757575);
`;
const Button2 = styled.button`
    width: 100%;
    padding: 17px 0px 18px 0px;
    font-size: 24px;
    border-radius: 5px;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    color: var(--main-orange-normal-default, #f59c04);
    background: ${(props) => (props.secondary ? '#3B3B3B' : '#757575')};
    border: 1px solid var(--black-black-b-100-disabled, #757575);
`;

const ActionButton = styled.div`
    background-color: #27272a;
    padding: 0.75rem;
    border-radius: 0.25rem;
    margin-bottom: ${(props) => (props.mb ? '1rem' : '0')};
    color: ${(props) => (props.secondary ? '#9CA3AF' : 'white')};
`;

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 30px;
`;
export const P = styled.p`
    margin-bottom: 22px;
`;
export const Stroke = styled.div`
    width: 100%;
    height: 1px;
    background: #4a4a4a;
    margin: 33px 0;
`;
const EditContainer = styled.div`
    height: ${(props) => (props.isOpen ? 'auto' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease-in-out;
`;

const RotateIcon = styled(MdKeyboardArrowDown)`
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease-in-out;
`;

const ProfileSection = styled.div`
    width: 138px;
    text-align: center;

    span {
        display: block;
        margin-top: 10px;
        color: #949494;
        font-size: 1rem;
    }
`;

const InputSection = styled.div`
    flex: 1;
    padding-top: 20px;
`;

const MainTitle = styled.p`
    margin-top: 60px;
    margin-bottom: 20px;
`;
const ProfileEdit = () => {
    const { user } = useSelector((state) => state.authR);
    /*   const [isOpen, setIsOpen] = useState(false); */
    const [isPWOpen, setIsPWOpen] = useState(false);
    /*     const [isPWOpen, setIsPWOpen] = useState(false); */
    const [isEmailOpen, setIsEmailOpen] = useState(false);
    const [isTelOpen, setIsTelOpen] = useState(false);

    const togglePW = () => {
        setIsPWOpen(!isPWOpen);
    };
    const toggleEmail = () => {
        setIsEmailOpen(!isEmailOpen);
    };
    const toggleTel = () => {
        setIsTelOpen(!isTelOpen);
    };

    return (
        <>
            <MainTitle>회원정보 수정</MainTitle>
            <Container>
                <Header>
                    <ProfileInfo>
                        <HeaderText>
                            <svg
                                width="24"
                                height="23"
                                viewBox="0 0 24 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M3.25 13C3.25 10.3766 5.37665 8.25 8 8.25H16C18.6234 8.25 20.75 10.3766 20.75 13V17C20.75 19.6234 18.6234 21.75 16 21.75H8C5.37665 21.75 3.25 19.6234 3.25 17V13ZM12.75 14C12.75 13.5858 12.4142 13.25 12 13.25C11.5858 13.25 11.25 13.5858 11.25 14V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V14Z"
                                    fill="white"
                                />
                                <path
                                    opacity="0.3"
                                    d="M16 9V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7L8 9"
                                    stroke="white"
                                    stroke-width="1.5"
                                />
                            </svg>
                            비밀번호
                        </HeaderText>
                    </ProfileInfo>
                    <HeaderRight>
                        <RotateIcon isOpen={isPWOpen} onClick={togglePW} />
                    </HeaderRight>
                </Header>

                <EditContainer isOpen={isPWOpen}>
                    <div className="edit">
                        <Title>비밀번호 변경</Title>
                        <EditSection>
                            <InputSection>
                                <Input placeholder="기존 비밀번호" /> <span>비밀번호 찾기</span>
                                <Input placeholder="새 비밀번호" />
                                <Input placeholder="비밀번호 확인" />
                            </InputSection>
                        </EditSection>

                        <ButtonGroup>
                            <Button>저장</Button>
                            <Button secondary>취소</Button>
                        </ButtonGroup>
                        <Stroke />
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button2 secondary>프로필삭제</Button2>
                        </div>
                    </div>
                </EditContainer>
            </Container>
            <Container>
                <Header>
                    <ProfileInfo>
                        <HeaderText>
                            <svg
                                width="24"
                                height="23"
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.25 9.62695C1.25 6.45132 3.82436 3.87695 7 3.87695H17C20.1756 3.87695 22.75 6.45132 22.75 9.62695V15.627C22.75 18.8026 20.1756 21.377 17 21.377H7C3.82436 21.377 1.25 18.8026 1.25 15.627V9.62695ZM6.44682 8.92568C6.11413 8.67891 5.6444 8.74855 5.39763 9.08123C5.15086 9.41392 5.2205 9.88366 5.55318 10.1304L10.3617 13.6972C11.3347 14.4189 12.6653 14.4189 13.6383 13.6972L18.4468 10.1304C18.7795 9.88366 18.8491 9.41392 18.6024 9.08123C18.3556 8.74855 17.8859 8.67891 17.5532 8.92568L12.7447 12.4924C12.3024 12.8205 11.6976 12.8205 11.2553 12.4924L6.44682 8.92568Z"
                                    fill="white"
                                />
                            </svg>
                            이메일
                            <p>{user && user.id_email}</p>
                        </HeaderText>
                    </ProfileInfo>
                    <HeaderRight>
                        <RotateIcon isOpen={isEmailOpen} onClick={toggleEmail} />
                    </HeaderRight>
                </Header>

                <EditContainer isOpen={isEmailOpen}>
                    <div className="edit">
                        <Title>비밀번호 변경</Title>
                        <EditSection>
                            <InputSection>
                                <Input placeholder={user && user.password} />

                                <Input placeholder="새 비밀번호" />
                                <Input placeholder="비밀번호 확인" />
                            </InputSection>
                        </EditSection>

                        <ButtonGroup>
                            <Button>저장</Button>
                            <Button secondary>취소</Button>
                        </ButtonGroup>
                        <Stroke />
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button2 secondary>프로필삭제</Button2>
                        </div>
                    </div>
                </EditContainer>
            </Container>
            <Container>
                <Header>
                    <ProfileInfo>
                        <HeaderText>
                            <svg
                                width="24"
                                height="21"
                                viewBox="0 0 24 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.9933 3.9014C14.5008 3.9014 14.9319 3.59325 15.1289 3.15968C15.2492 2.89473 15.493 2.65295 15.7742 2.72785C17.0558 3.06923 18 4.23785 18 5.62699V19.627C18 21.2838 16.6569 22.627 15 22.627H9C7.34315 22.627 6 21.2838 6 19.627V5.62699C6 4.24609 6.93299 3.0831 8.203 2.73401C8.4872 2.65589 8.73465 2.90331 8.85941 3.17036C9.05935 3.59837 9.49552 3.9014 9.99328 3.9014H13.9933Z"
                                    fill="white"
                                />
                            </svg>
                            휴대폰
                            <p>{user && user.tel}</p>
                        </HeaderText>
                    </ProfileInfo>
                    <HeaderRight>
                        <RotateIcon isOpen={isTelOpen} onClick={toggleTel} />
                    </HeaderRight>
                </Header>

                <EditContainer isOpen={isTelOpen}>
                    <div className="edit">
                        <Title>비밀번호 변경</Title>
                        <EditSection>
                            <InputSection>
                                <Input placeholder={user && user.password} />
                                <Input placeholder="새 비밀번호" />
                                <Input placeholder="비밀번호 확인" />
                            </InputSection>
                        </EditSection>

                        <ButtonGroup>
                            <Button>저장</Button>
                            <Button secondary>취소</Button>
                        </ButtonGroup>
                        <Stroke />
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button2 secondary>프로필삭제</Button2>
                        </div>
                    </div>
                </EditContainer>
            </Container>
        </>
    );
};

export default ProfileEdit;
