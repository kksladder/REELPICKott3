import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
// Styled Components
export const Wrapper = styled.div`
    background: #141414;
    min-height: 100vh;
    padding: 20px;
    color: white;
`;

export const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #2f2f2f;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const ProfileForm = styled.div`
    background: #2f2f2f;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    background: #3f3f3f;
    border: 1px solid #555;
    border-radius: 4px;
    color: white;
    margin-top: 8px;
`;
757575;
export const Button = styled.button`
    width: 100%;
    height: 64px;
    font-size: 15px;
    border-radius: 5px;
    background: #3b3b3b;
    border: 1px solid #757575;
    color: #757575;
    margin-top: 30px;
    &:hover {
        background: #757575;
        color: white;
        font-weight: bold;
    }
`;

export const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const HelpText = styled.p`
    color: #888;
    font-size: 0.9rem;
    margin-top: 5px;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
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
export const Container = styled.div`
    position: relative;
    max-width: 70.1875rem;
    color: white;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    justify-content: space-between;
    border-radius: 5px 5px 0px 0px;
    background: #2e2e2e;
    span {
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        color: var(--white);
    }
    .span {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        color: var(--white);
        border-radius: 33px;
        padding: 10px 20px;
        border: 1px solid var(--main-orange-normal-default, #f59c04);
    }
`;
export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 19px;

    font-weight: 400;
`;
export const ProfileImageInner = styled.div`
    width: 50px;
    height: 50px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50px;
        object-fit: cover;
    }
`;
export const ProfileSection = styled.div`
    text-align: center;

    span {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: 19px;
        font-weight: 400;
    }
`;

export const EditSection = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
`;
export const Stroke = styled.div`
    width: 100%;
    height: 1px;
    background: #4a4a4a;
    margin: 33px 0;
`;
export const ImageItem = styled.div`
    aspect-ratio: 1;
    background: #d9d9d9;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    position: relative; // 아이콘을 이미지 위에 올리기 위해

   /*  img {
        width: 80px;
        height: 80px;
        object-fit: cover; /* 이미지 비율을 유지하며 크기에 맞게 자르기 */
    } */

   
`;
export const ProfileImageInner2 = styled.div`
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ADD = styled.div`
    background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
    padding: 50px 30px;
    box-shadow: 0px 7px 10.7px 0px rgba(0, 0, 0, 0.38) inset;
    .inner {
        display: flex;
        gap: 20px;
    }
`;

export const HeaderText = styled.span``;
export const MainTitle = styled.p`
    margin-top: 60px;
    margin-bottom: 20px;
`;

export const EditContainer = styled.div`
    background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
    /*   padding: 50px 30px; */
    /* 프로필 수정 inner */
    box-shadow: 0px 7px 10.7px 0px rgba(0, 0, 0, 0.38) inset;
    height: ${(props) => (props.isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease-in-out;
    .edit {
        padding: 50px 30px;
        div {
            display: flex;
        }
    }
`;

export const RotateIcon = styled(MdKeyboardArrowDown)`
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease-in-out;
`;

export const InputSection = styled.div`
    flex: 1;
    display: flex;
    gap: 22px;
    padding-top: 20px;
    width: 100%;
    align-items: center;
    label {
        width: 61px;
        font-weight: 400;
        margin-bottom: 24px;
        font-size: 19px;
    }
    .inputWrap {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Button2 = styled.button`
    width: 100%;
    height: 64px;
    font-size: 15px;
    border-radius: 5px;

    border: 1px solid #757575;
    color: #f59c04;
    margin-top: 30px;
    background: ${(props) => (props.secondary ? "#3B3B3B" : "#141414")};
    &:hover {
        background: #f59c04;
        color: white;
        font-weight: bold;
    }
`;
export const Button3 = styled.button`
    width: 80px;
    height: 50px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #757575;
    color: #f59c04;
    background: ${(props) => (props.secondary ? "#3B3B3B" : "#141414")};
    &:hover {
        background: #f59c04;
        color: white;
        font-weight: bold;
    }
`;
