import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Wrapper = styled.div`
    background: #141414;
    min-height: 100vh;
    padding: 20px;
`;

const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 30px;
`;

const P = styled.p`
    margin-bottom: 22px;
    color: #757575;
    font-size: 19px;
`;

const Container = styled.div`
    color: white;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    justify-content: space-between;
    border-radius: 5px 5px 0 0;
    background: #2e2e2e;
`;

const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const ProfileImage = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    background: #d9d9d9;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeaderText = styled.span`
    font-size: 1.1875rem;
    color: white;
`;

const ProfileButton = styled.button`
    font-size: 13px;
    font-weight: 400;
    color: white;
    border-radius: 33px;
    padding: 10px 20px;
    border: 1px solid #f59c04;
    background: transparent;
    cursor: pointer;
`;

const AdditionalProfiles = styled.div`
    border-top: 1px solid gray;
    background: #2e2e2e;
    overflow: hidden;
    border-radius: 0px 0px 5px 5px;
    margin-top: 30px; /* To add spacing between main profile and additional profiles */
`;

const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #4a4a4a;
    justify-content: space-between;
`;

const ProfileDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
`;

const ActionButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: #3b3b3b;
    color: #f59c04;
    border: 1px solid #757575;
    cursor: pointer;
`;

const AddButton = styled.button`
    width: 100%;
    height: 64px;
    font-size: 15px;
    border-radius: 5px;
    margin-top: 35px;
    transition: background-color 0.2s;
    color: #f59c04;
    background: #141414;
    border: 1px solid #757575;
    cursor: pointer;
`;

const ProfileImageChangeButton = styled.button`
    margin-top: 10px;
    cursor: pointer;
`;

const Input = styled.input`
    padding: 10px;
    width: 100%;
`;

const NicknameHelpText = styled.p`
    color: #757575;
    font-size: 0.875rem;
`;

const FormWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const ProfileFormSection = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

const DramaPage = () => {
    // 상태 설정
    const [mainProfile, setMainProfile] = useState({
        username: "기본 사용자",
        profileImage: "/images/default_profile2.png",
    });

    const [additionalProfiles, setAdditionalProfiles] = useState([]); // 추가 프로필 목록
    const [newProfile, setNewProfile] = useState({ username: "", profileImage: "/images/default_profile2.png" }); // 새로운 프로필
    const [isAddingProfile, setIsAddingProfile] = useState(false); // 프로필 추가 폼 토글

    // 프로필 추가 함수
    const handleAddProfile = () => {
        if (newProfile.username.length < 2 || newProfile.username.length > 10) {
            alert("닉네임은 2-10자 사이어야 합니다.");
            return;
        }
        setAdditionalProfiles([...additionalProfiles, newProfile]);
        setIsAddingProfile(false); // 폼 숨기기
        setNewProfile({ username: "", profileImage: "/images/default_profile2.png" }); // 입력값 초기화
    };

    // 프로필 삭제 함수
    const handleDeleteProfile = (index) => {
        const newProfiles = additionalProfiles.filter((_, i) => i !== index);
        setAdditionalProfiles(newProfiles);
    };

    // 프로필 선택 함수 (이미지 변경)
    const handleProfileImageChange = () => {
        setNewProfile({
            ...newProfile,
            profileImage: "/images/default_profile2.png", // You can replace this with an image selection logic.
        });
    };

    return (
        <Wrapper>
            <H1>계정</H1>
            <P>프로필 및 설정 관리</P>

            {/* 메인 프로필 */}
            <Container>
                <Header>
                    <ProfileInfo>
                        <ProfileImage>
                            <Img src={mainProfile.profileImage} alt="프로필" />
                        </ProfileImage>
                        <HeaderText>{mainProfile.username}</HeaderText>
                    </ProfileInfo>
                    <ProfileButton>내 프로필</ProfileButton>
                </Header>
            </Container>

            {/* 추가 프로필 목록 */}
            {additionalProfiles.length > 0 && (
                <AdditionalProfiles>
                    {additionalProfiles.map((profile, index) => (
                        <ProfileCard key={index}>
                            <ProfileDetails>
                                <ProfileImage>
                                    <Img src={profile.profileImage} alt="프로필" />
                                </ProfileImage>
                                <span>{profile.username}</span>
                            </ProfileDetails>
                            <ActionButtons>
                                <ActionButton>수정</ActionButton>
                                <ActionButton onClick={() => handleDeleteProfile(index)}>삭제</ActionButton>
                            </ActionButtons>
                        </ProfileCard>
                    ))}
                </AdditionalProfiles>
            )}

            {/* 프로필 추가 폼 */}
            {isAddingProfile ? (
                <AdditionalProfiles>
                    <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", textAlign: "center", marginTop: "50px" }}>
                        프로필 추가
                    </h2>
                    <FormWrapper>
                        <img
                            src={newProfile.profileImage}
                            alt="새 프로필"
                            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        />
                        <ProfileImageChangeButton onClick={handleProfileImageChange}>
                            프로필 선택
                        </ProfileImageChangeButton>

                        <div>
                            <label>닉네임</label>
                            <Input
                                type="text"
                                value={newProfile.username}
                                onChange={(e) => setNewProfile({ ...newProfile, username: e.target.value })}
                                placeholder="닉네임을 입력해주세요"
                            />
                            <NicknameHelpText>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.</NicknameHelpText>
                        </div>

                        <ProfileFormSection>
                            <ActionButton onClick={handleAddProfile}>저장</ActionButton>
                            <ActionButton onClick={() => setIsAddingProfile(false)}>취소</ActionButton>
                        </ProfileFormSection>
                    </FormWrapper>
                </AdditionalProfiles>
            ) : (
                <AddButton onClick={() => setIsAddingProfile(true)}>프로필 추가</AddButton>
            )}
        </Wrapper>
    );
};

export default DramaPage;
