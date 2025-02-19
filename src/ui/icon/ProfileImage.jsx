import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const ImageItem = styled.div`
    width: 100px;
    height: 100px;
    background: #d8d8d8;
    border-radius: 50%;
    img {
        width: 100px;
        height: 100px;
        object-fit: cover; /* 이미지 비율을 유지하며 크기에 맞게 자르기 */
        border-radius: 50%;
    }
`;

const ProfileImage = () => {
    const { user } = useSelector((state) => state.authR);
    const dispatch = useDispatch();

    const [selectedImage, setSelectedImage] = useState("/images/default_profile2.png");
    const savedImage = localStorage.getItem("profileImage");
    // 페이지가 로드될 때 로컬스토리지에서 기존 프로필 이미지 확인 (초기값 설정)
    useEffect(() => {
        if (user && user.profileImage) {
            setSelectedImage(user.profileImage); // 이미 등록된 이미지가 있으면 그 이미지를 사용
        }
    }, [user]);

    return (
        <ImageItem>
            <img src={savedImage ? savedImage : "/images/default_profile2.png"} alt="프로필 이미지" />
        </ImageItem>
    );
};

export default ProfileImage;
