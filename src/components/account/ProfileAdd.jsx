import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const P = styled.div`
    color: #757575;
    font-size: 19px;
    font-weight: 400;
`;

export const AddContainer = styled.div`
    width: 1123px;
    height: 595px;
    background: #2e2e2e;
    padding: 60px 37px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 세로 정렬은 위쪽으로 */
    align-items: center; /* 가로 중앙 정렬 */
`;

const ProfileInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 이미지와 버튼을 가로로 가운데 정렬 */
    justify-content: center;
    margin-bottom: 30px; /* 아래쪽에 여백을 추가 */
`;

const InputSection = styled.div`
    width: 100%;
    display: flex;

    gap: 20px; /* 요소들 간의 간격을 조정 */
    align-items: center; /* 닉네임 입력 필드를 중앙에 배치 */
`;

const Input = styled.input`
    width: 93%;
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

const SelectButton = styled.button`
    background-color: #4a4a4a;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
`;

const ProfileAdd = () => {
    const { user } = useSelector((state) => state.authR);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/mypage/profile");
    };
    return (
        <>
            <H1>프로필 추가</H1>
            <P onClick={handleClick}>
                <IoIosArrowBack />
                뒤로가기
            </P>
            <AddContainer>
                <ProfileInner>
                    <img src="/images/default_profile.png" alt="이미지" />
                    <SelectButton>프로필 선택</SelectButton>
                </ProfileInner>

                <InputSection>
                    <label htmlFor="username">닉네임</label>
                    <Input id="username" placeholder={user && user.username} />
                </InputSection>
                <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>
            </AddContainer>
        </>
    );
};

export default ProfileAdd;
