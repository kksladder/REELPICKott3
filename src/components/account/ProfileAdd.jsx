import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ProfileModal from "./ProfileModal";

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
    justify-content: flex-start;
    align-items: center;
`;

const ProfileInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

const InputSection = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
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
    color: #949494;
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

const ProfileListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
`;

const ProfileCard = styled.div`
    width: 150px;
    height: 150px;
    background: #d9d9d9;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    cursor: pointer;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`;

const ButtonGroup = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

const Button = styled.button`
    width: 100%;
    height: 64px;
    margin-top: 38px;
    font-size: 15px;
    border-radius: 5px;
    transition: background-color 0.2s;
    color: ${(props) => (props.secondary ? "#9CA3AF" : "white")};
    background: ${(props) => (props.secondary ? "#3B3B3B" : "#757575")};
    border: 1px solid #757575;
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
    const [newUsername, setNewUsername] = useState("");
    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
        setProfileList(savedProfiles);
    }, []);

    const handleProfileImageClick = () => {
        setIsImageModalOpen(true);
    };

    const handleProfileSelect = (image) => {
        setSelectedImage(image);
    };

    const handleSaveClick = () => {
        if (newUsername && selectedImage) {
            const newProfile = { username: newUsername, image: selectedImage };
            const updatedProfileList = [...profileList, newProfile];
            setProfileList(updatedProfileList);
            localStorage.setItem("profiles", JSON.stringify(updatedProfileList));
            alert("프로필 추가 되었습니다.");
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
                    <img src={selectedImage} alt="프로필 이미지" />
                    <SelectButton onClick={handleProfileImageClick}>프로필 선택</SelectButton>
                </ProfileInner>

                <InputSection>
                    <label>닉네임</label>
                    <Input
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder="닉네임을 입력해주세요"
                    />
                </InputSection>
                <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>

                <ButtonGroup>
                    <Button onClick={handleSaveClick}>저장</Button>
                    <Button secondary>취소</Button>
                </ButtonGroup>
            </AddContainer>

            <ProfileListContainer>
                {profileList.map((profile, index) => (
                    <ProfileCard key={index}>
                        <ProfileImage src={profile.image} alt="프로필 이미지" />
                        <div>{profile.username}</div>
                    </ProfileCard>
                ))}
            </ProfileListContainer>

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
