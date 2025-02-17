import React, { useState } from "react";
import styled from "styled-components";
const styles = {
    container: {
        /*   maxWidth: "70.1875rem", */
        color: "white",
        position: "relative",
    },
    wrapper: {
        background: "#141414",
        minHeight: "100vh",
        padding: "20px",
    },
    h1: {
        fontSize: "40px",
        fontWeight: "700",
        marginTop: "50px",
        marginBottom: "30px",
    },
    p: {
        marginBottom: "22px",
        color: "#757575",
        fontSize: "19px",
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: "1.5rem",
        justifyContent: "space-between",
        borderRadius: "5px 5px 0 0",
        background: "#2e2e2e",
    },
    profileInfo: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
    },
    profileImage: {
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        overflow: "hidden",
        background: "#d9d9d9",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    headerText: {
        fontSize: "1.1875rem",
        color: "white",
    },
    profileButton: {
        fontSize: "13px",
        fontWeight: "400",
        color: "white",
        borderRadius: "33px",
        padding: "10px 20px",
        border: "1px solid #f59c04",
        background: "transparent",
        cursor: "pointer",
    },
    additionalProfiles: {
        borderTop: "1px solid gray",
        background: "#2e2e2e",
        /*   borderRadius: "5px", */
        overflow: "hidden",
        borderRadius: "0px 0px 5px 5px",
    },
    profileCard: {
        display: "flex",
        alignItems: "center",
        padding: "1.5rem",
        borderBottom: "1px solid #4a4a4a",
        justifyContent: "space-between",
    },
    profileDetails: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flex: 1,
    },
    actionButtons: {
        display: "flex",
        gap: "1rem",
    },
    actionButton: {
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        background: "#3B3B3B",
        color: "#f59c04",
        border: "1px solid #757575",
        cursor: "pointer",
    },
    addButton: {
        width: "100%",
        height: "64px",
        fontSize: "15px",
        borderRadius: "5px",
        marginTop: "35px",
        transition: "background-color 0.2s",
        color: "#f59c04",
        background: "#141414",
        border: "1px solid #757575",
        cursor: "pointer",
    },
};
const profileImages = ["/images/default_profile2.png", "/images/default_profile2.png", "/images/default_profile2.png"];

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
            profileImage: profileImages[Math.floor(Math.random() * profileImages.length)],
        });
    };

    return (
        <div style={styles.wrapper}>
            <h1 style={styles.h1}>계정</h1>
            <p style={styles.p}>프로필 및 설정 관리</p>

            {/* 메인 프로필 */}
            <div style={styles.container}>
                <div style={styles.header}>
                    <div style={styles.profileInfo}>
                        <div style={styles.profileImage}>
                            <img src={mainProfile.profileImage} alt="프로필" style={styles.img} />
                        </div>
                        <span style={styles.headerText}>{mainProfile.username}</span>
                    </div>
                    <button style={styles.profileButton}>내 프로필</button>
                </div>
            </div>

            {/* 추가 프로필 목록 */}
            {additionalProfiles.length > 0 && (
                <div style={styles.additionalProfiles}>
                    {additionalProfiles.map((profile, index) => (
                        <div key={index} style={styles.profileCard}>
                            <div style={styles.profileDetails}>
                                <div style={styles.profileImage}>
                                    <img src={profile.profileImage} alt="프로필" style={styles.img} />
                                </div>
                                <span>{profile.username}</span>
                            </div>
                            <div style={styles.actionButtons}>
                                <button style={styles.actionButton}>수정</button>
                                <button onClick={() => handleDeleteProfile(index)} style={styles.actionButton}>
                                    삭제
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* 프로필 추가 폼 */}
            {isAddingProfile ? (
                <div style={styles.additionalProfiles}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "center" }}>프로필 추가</h2>
                    <div>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src={newProfile.profileImage}
                                alt="새 프로필"
                                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                            />
                            <button onClick={handleProfileImageChange} style={{ marginTop: "10px" }}>
                                프로필 선택
                            </button>
                        </div>

                        <div>
                            <label>닉네임</label>
                            <input
                                type="text"
                                value={newProfile.username}
                                onChange={(e) => setNewProfile({ ...newProfile, username: e.target.value })}
                                placeholder="닉네임을 입력해주세요"
                                style={{ padding: "10px", width: "100%" }}
                            />
                            <p style={{ color: "#757575", fontSize: "0.875rem" }}>
                                2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button onClick={handleAddProfile} style={styles.actionButton}>
                                저장
                            </button>
                            <button onClick={() => setIsAddingProfile(false)} style={styles.actionButton}>
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button onClick={() => setIsAddingProfile(true)} style={styles.addButton}>
                    프로필 추가
                </button>
            )}
        </div>
    );
};

export default DramaPage;
