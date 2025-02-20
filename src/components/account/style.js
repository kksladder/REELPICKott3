import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

// Styled Components
export const Wrapper = styled.div`
    background: var(--background-color);
    min-height: 100vh;
    padding: 20px;
    color: var(--white);
`;

export const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: var(--secondary-600);
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const ProfileForm = styled.div`
    background: var(--secondary-600);
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    background: var(--secondary-400);
    border: 1px solid var(--secondary-200);
    border-radius: 4px;
    color: var(--white);
    margin-top: 8px;
`;

export const Button = styled.button`
    width: 100%;
    height: 64px;
    font-size: var(--font-body-Small);
    border-radius: 5px;
    background: var(--secondary-500);
    border: 1px solid var(--secondary-100);
    color: var(--secondary-100);
    margin-top: 30px;
    &:hover {
        background: var(--secondary-100);
        color: var(--white);
        font-weight: var(--font-weight-Bold);
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
    color: var(--secondary-90);
    font-size: 0.9rem;
    margin-top: 5px;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
`;

export const H1 = styled.h1`
    font-size: var(--font-header-Xlarge);
    font-weight: var(--font-weight-Bold);
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const P = styled.p`
    margin-bottom: 22px;
`;

export const Container = styled.div`
    position: relative;
    max-width: 70.1875rem;
    color: var(--white);
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    justify-content: space-between;
    border-radius: 5px 5px 0px 0px;
    background: var(--secondary-600);
    span {
        font-size: var(--font-header-Small);
        font-style: normal;
        font-weight: var(--font-weight-Regular);
        color: var(--white);
    }
    .span {
        font-size: var(--font-body-Xsmall);
        font-style: normal;
        font-weight: var(--font-weight-Regular);
        color: var(--white);
        border-radius: 33px;
        padding: 10px 20px;
        border: 1px solid var(--primary-40);
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: var(--font-header-Small);
    font-weight: var(--font-weight-Regular);
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
        color: var(--white);
        font-size: var(--font-header-Small);
        font-weight: var(--font-weight-Regular);
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
    background: var(--secondary-400);
    margin: 33px 0;
`;

export const ImageItem = styled.div`
    aspect-ratio: 1;
    background: var(--secondary-50);
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
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
    background: var(--secondary-500);
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
    background: var(--secondary-500);
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
        font-weight: var(--font-weight-Regular);
        margin-bottom: 24px;
        font-size: var(--font-header-Small);
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
    font-size: var(--font-body-Small);
    border-radius: 5px;
    border: 1px solid var(--secondary-100);
    color: var(--primary-40);
    margin-top: 30px;
    background: ${(props) => (props.secondary ? "var(--secondary-500)" : "var(--background-color)")};
    &:hover {
        background: var(--primary-40);
        color: var(--white);
        font-weight: var(--font-weight-Bold);
    }
`;

export const Button3 = styled.button`
    width: 80px;
    height: 50px;
    font-size: var(--font-body-Small);
    border-radius: 5px;
    border: 1px solid var(--secondary-100);
    color: var(--primary-40);
    background: ${(props) => (props.secondary ? "var(--secondary-500)" : "var(--background-color)")};
    &:hover {
        background: var(--primary-40);
        color: var(--white);
        font-weight: var(--font-weight-Bold);
    }
`;
