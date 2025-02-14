import { useSelector } from "react-redux";
import styled from "styled-components";
export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 30px;
`;
const Profile = () => {
    const { user } = useSelector((state) => state.authR);
    return (
        <>
            <H1>계정</H1>
            <p>프로필 및 설정 관리</p>
            <ul>
                <li>
                    {user && user.username}
                    <span>내프로필</span>
                    <div className="sub">
                        <form action="">
                            <li>프로필 수정</li>
                            <li>img </li>
                            <label>닉네임</label>
                            <input type="text" name="username" id="username" />
                            <p>2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다. </p>
                            <button type="submit">저장</button>
                            <button>취소</button>
                        </form>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Profile;
