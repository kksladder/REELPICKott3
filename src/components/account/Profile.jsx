import { useState } from "react";
import styled from "styled-components";
import ProfileImage from "../../ui/icon/ProfileImage";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { h1 } from "framer-motion/client";
import ProfileModal from "./ProfileModal";
import ProfileEdit from "./ProfileEdit";
import { useNavigate } from "react-router";
import ViewingHistory from "./ViewingHistory";

const Container = styled.div`
    position: relative;
    max-width: 70.1875rem;

    color: white;
    .edit {
        padding: 3rem;
        background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
        /* 프로필 수정 inner */
        box-shadow: 0px 7px 10.7px 0px rgba(0, 0, 0, 0.38) inset;
        border-radius: 0px 0px 5px 5px;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    justify-content: space-between;
    border-radius: 5px 5px 0px 0px;
    background: var(--black-black-b-600-input-hover-bg, #2e2e2e);
`;

const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const ProfileImageInner = styled.div`
    width: ${(props) => props.size || "2rem"};
    height: ${(props) => props.size || "2rem"};
    border-radius: 50%;
    overflow: hidden;
    background-color: #3b82f6;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const ProfileImageInner2 = styled.div`
    width: 138px;
    height: 138px;

    margin-bottom: 5px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const HeaderText = styled.span`
    font-size: 1.1875rem;
    color: var(--white);
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
        border-radius: 33px;
        padding: 10px 20px;
        border: 1px solid var(--main-orange-normal-default, #f59c04);
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
    gap: 3rem;
    align-items: center;

    padding: 0 20px;
    margin-bottom: 101px;
`;

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    .profileinner {
        flex: 1;
        position: relative;
        .profileinnerWrap {
            position: absolute;
            top: -157px;
            left: 169px;
        }
    }
    .profileinput {
        flex: 2;
        position: relative;
        .profileinputWrap {
            position: absolute;
            top: -105px;
        }
    }
`;

const Input = styled.input`
    width: 98%;
    border: 1px solid #3f3f46;
    border-radius: 0.25rem;
    padding: 16px;
    color: white;
    font-size: 0.875rem;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

const Button = styled.button`
    width: 100%/2;
    height: 64px;
    /*  padding: 17px 0px 18px 0px; */
    font-size: 15px;
    border-radius: 5px;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    color: ${(props) => (props.secondary ? "#9CA3AF" : "white")};
    background: ${(props) => (props.secondary ? "#3B3B3B" : "#757575")};
    border: 1px solid var(--black-black-b-100-disabled, #757575);
`;
const Button2 = styled.button`
    width: 100%;
    height: 64px;
    font-size: 15px;
    border-radius: 5px;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    color: var(--main-orange-normal-default, #f59c04);
    background: ${(props) => (props.secondary ? "#3B3B3B" : "#757575")};
    border: 1px solid var(--black-black-b-100-disabled, #757575);

    &:hover {
        background: var(--primary-40);
        color: var(--white);
        font-weight: bold;
    }
`;
const Button3 = styled.button`
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
`;

const ActionButton = styled.div`
    background-color: #27272a;
    padding: 0.75rem;
    border-radius: 0.25rem;
    margin-bottom: ${(props) => (props.mb ? "1rem" : "0")};
    color: ${(props) => (props.secondary ? "#9CA3AF" : "white")};
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
    height: ${(props) => (props.isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease-in-out;
`;

const RotateIcon = styled(MdKeyboardArrowDown)`
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease-in-out;
`;

const ProfileSection = styled.div`
    width: 138px;
    text-align: center;

    span {
        display: block;
        margin-top: 10px;
        color: var(--white);
        font-size: 19px;
        font-weight: 400;
    }
`;

const InputSection = styled.div`
    flex: 1;
    display: flex;
    gap: 22px;

    padding-top: 20px;
    width: 100%;
    align-items: center;
    label {
        font-weight: 400;
        margin-bottom: 24px;
        font-size: 19px;
    }
    .inputWrap {
        width: 88%;
        display: flex;
        flex-direction: column;
    }
`;
const Profile = () => {
    const { user } = useSelector((state) => state.authR);
    const [isOpen, setIsOpen] = useState(false);

    const toggleProfile = () => {
        setIsOpen(!isOpen);
    };

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const handleProfileImageClick = () => {
        setIsImageModalOpen(true);
    };
    const navigate = useNavigate();

    const handleProfileAddClick = () => {
        navigate("/mypage/profileadd");
    };

    return (
        <>
            <H1>계정</H1>
            <P>프로필 및 설정 관리</P>
            <Container>
                <Header>
                    <ProfileInfo>
                        <ProfileImageInner>
                            <img src="/images/default_profile.png" alt="이미지" />
                        </ProfileImageInner>
                        <HeaderText>{user && user.username}</HeaderText>
                    </ProfileInfo>
                    <HeaderRight>
                        <span onClick={toggleProfile} style={{ cursor: "pointer" }}>
                            내 프로필
                            <RotateIcon isOpen={isOpen} />
                        </span>
                    </HeaderRight>
                </Header>

                <EditContainer isOpen={isOpen}>
                    <div className="edit">
                        <Title>프로필 수정</Title>
                        <EditSection>
                            <ProfileSection>
                                <ProfileImageInner2>
                                    <img src="/images/default_profile.png" alt="이미지" />
                                </ProfileImageInner2>
                                <span onClick={handleProfileImageClick} style={{ cursor: "pointer" }}>
                                    프로필 수정
                                </span>
                            </ProfileSection>

                            <InputSection>
                                <label>닉네임</label>
                                <div className="inputWrap">
                                    <Input placeholder={user && user.username} />
                                    <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>
                                </div>
                            </InputSection>
                        </EditSection>

                        <ButtonGroup>
                            <Button>저장</Button>
                            <Button secondary>취소</Button>
                        </ButtonGroup>
                        <Stroke />
                        <div style={{ marginTop: "1.5rem" }}>
                            <Button2 secondary>프로필 삭제</Button2>
                        </div>
                    </div>
                </EditContainer>
                <Button3 secondary onClick={handleProfileAddClick}>
                    프로필 추가
                </Button3>
            </Container>

            <ProfileEdit />
            <ViewingHistory />
            <ProfileModal isOpen={isImageModalOpen} onClose={() => setIsImageModalOpen(false)} />
        </>
    );
};

export default Profile;
