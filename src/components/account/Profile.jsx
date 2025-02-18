import { useState } from "react";
import {
    H1,
    P,
    Container,
    Header,
    ProfileInfo,
    ProfileImageInner,
    Title,
    EditContainer,
    RotateIcon,
    InputSection,
    Input,
    ButtonGroup,
    Button,
    Button2,
    HelpText,
    ProfileImageInner2,
    ProfileSection,
    ImageItem,
    Stroke,
    ADD,
    MainTitle,
    EditSection,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
import { authActions } from "../../store/modules/authSlice";
import ProfileEdit from "./ProfileEdit";
import ViewingHistory from "./ViewingHistory";

const Profile = () => {
    const { user } = useSelector((state) => state.authR);
    const [selectedImage, setSelectedImage] = useState(user?.profileImage || "/images/default_profile2.png");
    const [newUsername, setNewUsername] = useState(user?.username || "");
    const [isOpen, setIsOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isAddingProfile, setIsAddingProfile] = useState(false); // Add profile form toggle
    const [newProfile, setNewProfile] = useState({
        username: "",
        profileImage: "/images/default_profile2.png",
    });
    const [profiles, setProfiles] = useState([
        { username: user?.username, profileImage: user?.profileImage || "/images/default_profile2.png" },
    ]);

    const dispatch = useDispatch();

    const toggleProfile = () => {
        setIsOpen(!isOpen);
    };

    const handleProfileImageClick = () => {
        setIsImageModalOpen(true);
    };

    const handleProfileSelect = (image) => {
        setSelectedImage(image);
    };

    const handleSaveClick = () => {
        if (user) {
            dispatch(
                authActions.updateProfileImage({
                    id_email: user.id_email,
                    newProfileImage: selectedImage,
                    newUsername: newUsername,
                })
            );
            alert("성공적으로 변경이 완료되었습니다");
        } else {
            console.error("User is not available.");
        }
    };

    const handleDeleteProfile = () => {
        const isConfirmed = window.confirm("정말로 닉네임을 삭제하시겠습니까?");
        if (isConfirmed) {
            dispatch(authActions.removeUsername());
            setNewUsername("");
            setSelectedImage("/images/default_profile.png");
            setIsOpen(false);
            alert("닉네임이 삭제되었습니다.");
        }
    };

    const handleAddProfile = () => {
        if (newProfile.username.length < 2 || newProfile.username.length > 10) {
            alert("닉네임은 2-10자 사이어야 합니다.");
            return;
        }
        // Add new profile to the profiles list
        setProfiles([...profiles, { username: newProfile.username, profileImage: newProfile.profileImage }]);
        alert(`새 프로필이 추가되었습니다: ${newProfile.username}`);
        setIsAddingProfile(false); // Hide form
        setNewProfile({ username: "", profileImage: "/images/default_profile2.png" }); // Clear input fields
    };

    return (
        <>
            <H1>계정</H1>
            <P>프로필 및 설정 관리</P>
            <Container>
                {/* Main Profile Section */}
                <Header>
                    {profiles.length > 0 && (
                        <ProfileInfo>
                            <ProfileImageInner>
                                <img src={selectedImage} alt="Profile" />
                            </ProfileImageInner>
                            {newUsername}
                        </ProfileInfo>
                    )}

                    <span onClick={toggleProfile} style={{ cursor: "pointer" }}>
                        내 프로필 <RotateIcon isOpen={isOpen} />
                    </span>
                </Header>

                <EditContainer isOpen={isOpen}>
                    <div className="edit">
                        <Title>프로필 수정</Title>
                        <EditSection>
                            <ProfileSection>
                                <ProfileImageInner2>
                                    <ImageItem>
                                        <img src={selectedImage} alt="프로필 이미지" />
                                    </ImageItem>
                                    <span onClick={handleProfileImageClick} style={{ cursor: "pointer" }}>
                                        프로필 수정
                                    </span>
                                </ProfileImageInner2>
                            </ProfileSection>

                            <InputSection>
                                <label>닉네임</label>
                                <div className="inputWrap">
                                    <Input
                                        placeholder={user && user.username}
                                        value={newUsername}
                                        onChange={(e) => setNewUsername(e.target.value)} // 닉네임 변경
                                    />
                                    <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>
                                </div>
                            </InputSection>
                        </EditSection>

                        <ButtonGroup>
                            <Button onClick={handleSaveClick}>저장</Button>
                            <Button secondary>취소</Button>
                        </ButtonGroup>
                        <Stroke />
                        <div style={{ marginTop: "1.5rem" }}>
                            <Button2 secondary onClick={handleDeleteProfile}>
                                프로필 삭제
                            </Button2>
                        </div>
                    </div>
                </EditContainer>

                {/* Add Profile Section */}
                {isAddingProfile ? (
                    <ADD>
                        <Title>프로필 추가</Title>
                        <div className="inner">
                            <ProfileSection>
                                <ProfileImageInner2>
                                    <ImageItem>
                                        <img src={selectedImage} alt="프로필 이미지" />
                                    </ImageItem>
                                    <span onClick={handleProfileImageClick} style={{ cursor: "pointer" }}>
                                        프로필 수정
                                    </span>
                                </ProfileImageInner2>
                            </ProfileSection>
                            <InputSection>
                                <label>닉네임</label>
                                <div className="inputWrap">
                                    <Input
                                        value={newProfile.username}
                                        onChange={(e) => setNewProfile({ ...newProfile, username: e.target.value })}
                                        placeholder="새 프로필의 닉네임을 입력해주세요"
                                    />
                                    <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>
                                </div>
                            </InputSection>
                        </div>

                        <ButtonGroup>
                            <Button onClick={handleAddProfile}>저장</Button>
                            <Button secondary onClick={() => setIsAddingProfile(false)}>
                                취소
                            </Button>
                        </ButtonGroup>
                    </ADD>
                ) : (
                    <Button2 onClick={() => setIsAddingProfile(true)}>프로필 추가</Button2>
                )}

                {/* List of Profiles Section */}
                <Title>내 프로필 목록</Title>
                {profiles.map((profile, index) => (
                    <Header key={index}>
                        <ProfileInfo>
                            <ProfileImageInner>
                                <img src={profile.profileImage} alt="Profile" />
                            </ProfileImageInner>
                            {profile.username}
                        </ProfileInfo>
                    </Header>
                ))}

                <ProfileModal
                    isOpen={isImageModalOpen}
                    onClose={() => setIsImageModalOpen(false)}
                    onProfileSelect={handleProfileSelect}
                />
                <MainTitle>회원정보 수정</MainTitle>
                <ProfileEdit />
                <MainTitle>시청기록 관리</MainTitle>
                <ViewingHistory />
            </Container>
        </>
    );
};

export default Profile;
