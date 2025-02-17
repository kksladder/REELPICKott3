import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileImage from "../../ui/icon/ProfileImage";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/modules/authSlice";
import { IoIosArrowUp } from "react-icons/io";

const MenuArea = styled.div`
    margin-top: 87px;
    width: 300px;
    height: 100%;
    position: relative;
    margin-right: 87px;
`;

const MainMenu = styled.ul`
    list-style-type: none;

    .profile {
        margin-left: 12px;
        margin-bottom: 47px;
        div {
            margin-bottom: 18px;
        }
        p {
            margin-bottom: 6px;
        }
    }
`;

const MenuItem = styled.li`
    width: 280px;
    padding: 1px 0;
    &:hover {
        color: var(--primary-40);
        border-radius: 5px;
        background: var(--black-black-b-600-input-hover-bg, #2e2e2e);
    }
    button {
        all: unset;
        background: transparent;
        border: none;
        cursor: pointer;
        display: inline-block; /* 추가 */
    }
`;

const MenuLink = styled(Link)`
    width: 100%;
    display: flex;
    text-decoration: none;
    color: inherit;
    padding: 8px 15px;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    div {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`;

const SubMenu = styled.ul`
    display: ${({ show }) => (show ? "block" : "none")};
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 137px;
    border-radius: 0px 0px 5px 5px;
    background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
`;

const SubMenuItem = styled.li`
    color: var(--Black-Black-B50, #bfbfbf);
    border-bottom: 1px solid #2e2e2e;
    padding: 8px 15px;
    display: flex;
    justify-content: flex-end;

    &:last-child {
        border-bottom: none;
    }
`;

const SubMenuLink = styled(Link)`
    padding: 8px 0;
    &:hover {
        color: white;
    }
`;
const SubMenuLink2 = styled.div`
    padding: 8px 0;
    cursor: pointer;
    &:hover {
        color: white;
    }
`;
const Account = () => {
    const dispatch = useDispatch(); // dispatch 훅을 사용하여 Redux 액션을 보냅니다.
    const navigate = useNavigate();
    const { authed, user } = useSelector((state) => state.authR);
    const handleLoginClick = () => {
        if (authed) {
            dispatch(authActions.logout()); // 로그아웃 상태로 변경

            navigate("/"); // 로그인 페이지로 이동
        } else {
            navigate("/login"); // 로그인 페이지로 이동
        }
    };

    const [isMyMenuVisible, setMyMenuVisible] = useState(false);
    const [isAccountMenuVisible, setAccountMenuVisible] = useState(false);

    // "MY" 메뉴에 마우스를 올렸을 때만 보이게
    const handleMyMouseEnter = () => setMyMenuVisible(true);
    const handleMyMouseLeave = () => setMyMenuVisible(false);

    // "계정" 메뉴에 마우스를 올렸을 때만 보이게
    const handleAccountMouseEnter = () => setAccountMenuVisible(true);
    const handleAccountMouseLeave = () => setAccountMenuVisible(false);

    const handleClick2 = () => {
        navigate("/mypage/accountcontents");
        // 여기서 'myPage'라는 ID로 설정된 위치로 스크롤 이동
    };

    const viewingHandleClick = () => {
        navigate("/mypage/profile");
    };

    const profileEditHandleClick = () => {
        navigate("/mypage/profile");
        // 여기서 'myPage'라는 ID로 설정된 위치로 스크롤 이동
    };

    const handleClick = () => {
        navigate("/mypage/accountcontents");
    };

    return (
        <MenuArea>
            <MainMenu>
                <div className="profile">
                    <div>
                        <ProfileImage />
                    </div>
                    <p>{user && user.username}</p>
                    <p>{user && user.id_email}</p>
                </div>
                <ul>
                    <MenuItem onMouseEnter={handleMyMouseEnter} onMouseLeave={handleMyMouseLeave}>
                        <MenuLink to="/mypage/accountcontents">
                            {" "}
                            <div>
                                <img src="/icon/my.png" alt="계정" />
                                My
                            </div>
                            <IoIosArrowUp />
                        </MenuLink>
                        <SubMenu show={isMyMenuVisible}>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={handleClick}>최근 시청중인 컨텐츠</SubMenuLink2>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={handleClick}>찜한 컨텐츠</SubMenuLink2>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={handleClick}>현재 이용중인 멤버십</SubMenuLink2>
                            </SubMenuItem>
                        </SubMenu>
                    </MenuItem>

                    {/* 계정 메뉴 */}
                    <MenuItem onMouseEnter={handleAccountMouseEnter} onMouseLeave={handleAccountMouseLeave}>
                        <MenuLink to="mypage/accountcontents">
                            {" "}
                            <div>
                                <img src="/icon/profile.png" alt="계정" />
                                계정
                            </div>
                            <IoIosArrowUp />
                        </MenuLink>
                        <SubMenu show={isAccountMenuVisible}>
                            <SubMenuItem>
                                <SubMenuLink to="/mypage/profile">프로필 및 설정 관리</SubMenuLink>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={profileEditHandleClick}>회원정보수정</SubMenuLink2>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={viewingHandleClick}>시청 기록 관리</SubMenuLink2>
                            </SubMenuItem>
                        </SubMenu>
                    </MenuItem>

                    {/* 다른 메뉴들 */}
                    <MenuItem>
                        <MenuLink to="/mypage/membership">
                            <div>
                                <img src="/icon/membership.png" alt="계정" />
                                멤버십 관리
                            </div>
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/mypage/cs">
                            <div>
                                <img src="/icon/cs.png" alt="계정" />
                                고객센터
                            </div>
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/">
                            <div>
                                <img src="/icon/logout.png" alt="계정" />
                                <button onClick={handleLoginClick}>로그아웃</button>
                            </div>
                        </MenuLink>
                    </MenuItem>
                </ul>
            </MainMenu>
        </MenuArea>
    );
};

export default Account;
