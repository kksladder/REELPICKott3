import { useEffect, useState } from "react";
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
    Button3,
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
import ProfileEdit from "./ProfileEdit";
import ViewingHistory from "./ViewingHistory";
import { authActions } from "../../store/modules/authSlice";

const Profile = () => {
    const { user } = useSelector((state) => state.authR);
    const [selectedImage, setSelectedImage] = useState(user?.profileImage || "/images/default_profile2.png");
    const [newUsername, setNewUsername] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isAddingProfile, setIsAddingProfile] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({
        username: "",
        password: "",
        profileImage: "/images/default_profile2.png", // 추가 프로필의 초기 이미지
    });
    const [editingIndex, setEditingIndex] = useState(null);
    const [addIndex, setADDIndex] = useState(null);
    const [isEditingProfile, setIsEditingProfile] = useState(false);

    const dispatch = useDispatch();

    const handleProfileImageClick = () => {
        setIsImageModalOpen(true);
    };

    const handleProfileSelect = (image) => {
        // 프로필 수정 ---이미지 check하면 변경완료
        if (isEditingProfile) {
            // 추가 프로필 수정 시 이미지 변경
            const updatedProfiles = [...profiles];
            updatedProfiles[editingIndex].profileImage = image; // 해당 프로필의 이미지만 변경
            setProfiles(updatedProfiles);
            localStorage.setItem("profiles", JSON.stringify(updatedProfiles)); // 추가 프로필 이미지도 로컬 저장
        } else {
            // 기본 프로필 수정 시 이미지 변경
            setSelectedImage(image); // 기본 프로필 이미지 변경
            localStorage.setItem("profileImage", image); // 기본 프로필 이미지를 로컬 저장
        }
    };
    const addhandleProfileSelect = (image) => {
        if (isAddingProfile) {
            // 추가 프로필 수정 시 이미지 변경
            const updatedProfiles = [...profiles];
            updatedProfiles[addIndex].profileImage = image; // 해당 프로필의 이미지만 변경
            setProfiles(updatedProfiles);
            localStorage.setItem("profiles", JSON.stringify(updatedProfiles)); // 추가 프로필 이미지도 로컬 저장
        }
    };

    const toggleProfile = () => {
        setIsOpen(!isOpen);
    };

    const handleAddProfile = () => {
        if (currentProfile.username.length < 2 || currentProfile.username.length > 10) {
            alert("닉네임은 2-10자 사이어야 합니다.");
            return;
        }

        // 프로필 추가 시 이미지를 제대로 반영하도록 변경
        const newProfiles = [...profiles, { ...currentProfile }];
        setProfiles(newProfiles); // 새로운 프로필 목록에 추가
        localStorage.setItem("profiles", JSON.stringify(newProfiles)); // 로컬 저장
        setCurrentProfile({ username: "", profileImage: "/images/default_profile2.png" }); // 프로필 초기화
        setIsAddingProfile(false);
        alert(`새 프로필이 추가되었습니다: ${currentProfile.username}`);
    };

    const handleEditProfile = (index) => {
        if (index === null) return;

        if (index !== "default") {
            // 추가 프로필을 수정하는 경우
            setEditingIndex(index);
            setCurrentProfile(profiles[index]); // 해당 프로필로 currentProfile 업데이트
            setIsEditingProfile(true); // 수정 모드로 전환
            setIsOpen(true); // 프로필 수정 창 열기
        } else {
            // 기본 프로필 수정
            setIsEditingProfile(true);
            setIsOpen(true);
        }
    };

    const handleUpdateProfile = () => {
        if (currentProfile.username.trim() === "") {
            alert("닉네임을 입력해주세요.");
            return;
        }

        const id_email = user?.id_email; // id_email을 user 객체에서 가져옴

        if (editingIndex === null) {
            // localStorage에서 해당 사용자의 정보를 가져옴
            const userData = JSON.parse(localStorage.getItem("user_" + id_email));

            if (userData) {
                // username을 currentProfile.username으로 변경
                userData.username = currentProfile.username;
                localStorage.setItem("user_" + id_email, JSON.stringify(userData)); // localStorage에 저장

                // Redux 상태도 업데이트
                dispatch(authActions.updateUsername(currentProfile.username));
                setNewUsername(currentProfile.username);
                alert("기본 프로필이 수정되었습니다!");
            } else {
                alert("사용자를 찾을 수 없습니다.");
            }
        } else {
            // 추가 프로필 수정
            const updatedProfiles = [...profiles];
            updatedProfiles[editingIndex] = { ...currentProfile }; // 수정된 프로필 반영
            setProfiles(updatedProfiles);

            // 로컬 저장
            localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
            alert("프로필 수정이 완료되었습니다!");
        }

        // 수정 후 초기화
        setIsEditingProfile(false);
        setEditingIndex(null);
        setCurrentProfile({
            username: "",
            profileImage: "/images/default_profile2.png",
        });
    };

    const handleDeleteProfile = (index) => {
        if (index === "default") {
            alert("기본 프로필은 삭제할 수 없습니다.");
            return;
        }

        if (window.confirm("프로필을 삭제하시겠습니까?")) {
            const updatedProfiles = profiles.filter((_, i) => i !== index); // 해당 프로필 삭제
            setProfiles(updatedProfiles);
            localStorage.setItem("profiles", JSON.stringify(updatedProfiles)); // 로컬 저장
        }
    };

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const savedImage = localStorage.getItem("profileImage");
        const savedProfiles = localStorage.getItem("profiles");

        if (savedImage) {
            setSelectedImage(savedImage); // 기본 프로필 이미지에 반영
        }
        if (storedUsername) {
            setNewUsername(storedUsername);
            dispatch(authActions.updateUsername(storedUsername));
        }
        if (savedProfiles) {
            setProfiles(JSON.parse(savedProfiles)); // 추가 프로필도 로컬에서 불러옴
        }
    }, [dispatch]);

    return (
        <>
            <H1>계정</H1>
            <P>프로필 및 설정 관리</P>
            <Container>
                {/* Main Profile */}
                <Header>
                    <ProfileInfo>
                        <ProfileImageInner>
                            <img src={selectedImage} alt="Profile" />
                        </ProfileImageInner>
                        <span>{newUsername || user.username}</span>
                    </ProfileInfo>
                    <span className="span" onClick={toggleProfile} style={{ cursor: "pointer" }}>
                        내 프로필 <RotateIcon isOpen={isOpen} />
                    </span>
                </Header>

                {/* Edit Profile Form */}
                <EditContainer isOpen={isOpen}>
                    <div className="edit">
                        <Title>프로필 수정</Title>
                        <EditSection>
                            <ProfileSection>
                                <ProfileImageInner2>
                                    <ImageItem>
                                        <img
                                            src={isEditingProfile ? currentProfile.profileImage : selectedImage}
                                            alt="프로필 이미지"
                                        />
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
                                        value={currentProfile.username}
                                        onChange={(e) =>
                                            setCurrentProfile({ ...currentProfile, username: e.target.value })
                                        }
                                        placeholder="수정할 닉네임을 입력해주세요"
                                    />
                                    <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>
                                </div>
                            </InputSection>
                        </EditSection>

                        <ButtonGroup>
                            <Button onClick={handleUpdateProfile}>저장</Button>
                            <Button
                                secondary
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsEditingProfile(false);
                                    setCurrentProfile({ username: "", profileImage: "/images/default_profile2.png" });
                                }}
                            >
                                취소
                            </Button>
                        </ButtonGroup>
                        <Stroke />
                        <div style={{ marginTop: "1.5rem" }}>
                            <Button2 secondary onClick={() => handleDeleteProfile("default")}>
                                기본 프로필 삭제
                            </Button2>
                        </div>
                    </div>
                </EditContainer>

                {/* Additional Profiles Section */}
                {profiles.map((profile, index) => (
                    <Header key={index} style={{ borderTop: "1px solid #4A4A4A" }}>
                        <ProfileInfo>
                            <ProfileImageInner>
                                <img src={profile.profileImage} alt="Profile" />
                            </ProfileImageInner>
                            <span>{profile.username}</span>
                        </ProfileInfo>
                        <ButtonGroup>
                            <Button3 onClick={() => handleEditProfile(index)}>수정</Button3>
                            <Button3 onClick={() => handleDeleteProfile(index)}>삭제</Button3>
                        </ButtonGroup>
                    </Header>
                ))}

                {/* Add Profile Section */}
                {isAddingProfile ? (
                    <ADD>
                        <Title>프로필 추가</Title>
                        <div className="inner">
                            <ProfileSection>
                                <ProfileImageInner2>
                                    <ImageItem>
                                        <img
                                            src={isEditingProfile ? currentProfile.profileImage : selectedImage}
                                            alt="프로필 이미지"
                                        />
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
                                        value={currentProfile.username}
                                        onChange={(e) =>
                                            setCurrentProfile({ ...currentProfile, username: e.target.value })
                                        }
                                        placeholder="새 프로필의 닉네임을 입력해주세요"
                                    />
                                    <HelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</HelpText>
                                </div>
                            </InputSection>
                        </div>

                        <ButtonGroup>
                            <Button onClick={handleAddProfile}>저장</Button>
                            <Button
                                secondary
                                onClick={() => {
                                    setIsAddingProfile(false);
                                    setCurrentProfile({ username: "", profileImage: "/images/default_profile2.png" });
                                }}
                            >
                                취소
                            </Button>
                        </ButtonGroup>
                    </ADD>
                ) : (
                    <Button2 onClick={() => setIsAddingProfile(true)}>프로필 추가</Button2>
                )}

                <ProfileModal
                    isOpen={isImageModalOpen}
                    onClose={() => setIsImageModalOpen(false)}
                    onProfileSelect={handleProfileSelect}
                    onProfileSelect2={addhandleProfileSelect}
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
