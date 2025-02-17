import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ProfileModal from "./ProfileModal";
import { useEffect, useState } from "react";

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
    cursor: pointer;
    margin-bottom: 20px;
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
    color: #333;
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

const ImageItem = styled.div`
    aspect-ratio: 1;
    background: #d9d9d9;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    position: relative; // 아이콘을 이미지 위에 올리기 위해

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 이미지 비율을 유지하며 크기에 맞게 자르기 */
    }

    &:hover {
        opacity: 0.8;
    }
`;
const ButtonGroup = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

const Button = styled.button`
    width: 100%/2;
    height: 64px;
    margin-top: 38px;
    /*  padding: 17px 0px 18px 0px; */
    font-size: 15px;
    border-radius: 5px;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
    color: ${(props) => (props.secondary ? "#9CA3AF" : "white")};
    background: ${(props) => (props.secondary ? "#3B3B3B" : "#757575")};
    border: 1px solid var(--black-black-b-100-disabled, #757575);
`;
const ProfileAdd = () => {
    const { user } = useSelector((state) => state.authR);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/mypage/profile");
    };

    // 선택된 이미지를 저장할 상태
    const [selectedImage, setSelectedImage] = useState("/images/default_profile.png");
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const handleProfileImageClick = () => {
        setIsImageModalOpen(true);
    };

    // 프로필 이미지를 변경할 때 호출되는 함수
    const handleProfileSelect = (image) => {
        setSelectedImage(image);
    };

    // 닉네임 상태 관리 및 로컬스토리지에서 불러오기
    const [secondUsername, setSecondUsername] = useState("");

    useEffect(() => {
        const savedUsername = localStorage.getItem("second_username");
        if (savedUsername) {
            setSecondUsername(savedUsername);
        }
    }, []);

    const handleSaveClick = () => {
        // 닉네임을 로컬스토리지에 저장
        if (secondUsername) {
            updateUserProfile(secondUsername, selectedImage);
            alert("프로필 추가 되었습니다.");
        }

        // 프로필 정보를 업데이트
    };

    const updateUserProfile = (newUsername, newProfileImage) => {
        // 로컬스토리지에서 사용자 정보 가져오기
        let userFromStorage = JSON.parse(localStorage.getItem("user_" + user.id_email));

        // 사용자 정보가 존재하면 업데이트
        if (userFromStorage) {
            userFromStorage.add_username = newUsername || userFromStorage.username;
            userFromStorage.add_profileImage = newProfileImage || userFromStorage.profileImage;

            // 변경된 사용자 정보를 다시 로컬스토리지에 저장
            localStorage.setItem("user__로그인정보", JSON.stringify(userFromStorage));
        }
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
                    <ImageItem>
                        <img src={selectedImage} alt="프로필 이미지" />
                    </ImageItem>

                    <SelectButton onClick={handleProfileImageClick}>프로필 선택</SelectButton>
                </ProfileInner>

                <InputSection>
                    <label>닉네임</label>
                    <Input
                        id="second_username"
                        value={secondUsername}
                        onChange={(e) => setSecondUsername(e.target.value)} // 입력값 상태 업데이트
                        placeholder="닉네임을 입력해주세요"
                    />
                </InputSection>
                <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>
                <ButtonGroup>
                    <Button onClick={handleSaveClick}>저장</Button>
                    <Button secondary>취소</Button>
                </ButtonGroup>
            </AddContainer>

            {/* 모달에서 선택된 이미지가 전달되면 상태가 변경되어 프로필 이미지가 바뀌도록 */}
            <ProfileModal
                isOpen={isImageModalOpen}
                onClose={() => setIsImageModalOpen(false)}
                onProfileSelect={handleProfileSelect}
            />
        </>
    );
};

export default ProfileAdd;
