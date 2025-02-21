import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileImage from "../../ui/icon/ProfileImage";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/modules/authSlice";
import { MdKeyboardArrowDown } from "react-icons/md";

const MenuArea = styled.div`
    margin-top: 87px;
    width: 300px;
    height: 100%;
    position: relative;
    margin-right: 87px;

    /* 화면 너비가 768px 이하일 때 MenuArea 숨기기 */
    @media (max-width: 768px) {
        display: none;
    }
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

export const RotateIcon = styled(MdKeyboardArrowDown)`
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease-in-out;
`;

const Account = () => {
    const dispatch = useDispatch();
    const [myMenuOpen, setMyMenuOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
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
    const handleMyMouseEnter = () => {
        setMyMenuVisible(true);
        setMyMenuOpen(true); // "MY" 메뉴 열기 (아이콘 회전)
    };
    const handleMyMouseLeave = () => {
        setMyMenuVisible(false);
        setMyMenuOpen(false); // "MY" 메뉴 닫기 (아이콘 원래 상태로 돌아감)
    };

    // "계정" 메뉴에 마우스를 올렸을 때만 보이게
    const handleAccountMouseEnter = () => {
        setAccountMenuVisible(true);
        setAccountMenuOpen(true); // "계정" 메뉴 열기 (아이콘 회전)
    };
    const handleAccountMouseLeave = () => {
        setAccountMenuVisible(false);
        setAccountMenuOpen(false); // "계정" 메뉴 닫기 (아이콘 원래 상태로 돌아감)
    };

    const handleClick = (x) => {
        dispatch(authActions.gotoTarget(x));
        navigate("/mypage/accountcontents");
    };

    const handleClick2 = (x) => {
        dispatch(authActions.gotoTarget(x));
        navigate("/mypage/profile");
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
                    {/* My 메뉴 */}
                    <MenuItem onMouseEnter={handleMyMouseEnter} onMouseLeave={handleMyMouseLeave}>
                        <MenuLink to="/mypage/accountcontents">
                            <div>
                                <img src="/icon/my.png" alt="계정" />
                                My
                            </div>
                            <RotateIcon isOpen={myMenuOpen} />
                        </MenuLink>
                        <SubMenu show={isMyMenuVisible}>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={() => handleClick("a")}>최근 시청중인 컨텐츠</SubMenuLink2>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={() => handleClick("b")}>찜한 컨텐츠</SubMenuLink2>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={() => handleClick("c")}>현재 이용중인 멤버십</SubMenuLink2>
                            </SubMenuItem>
                        </SubMenu>
                    </MenuItem>

                    {/* 계정 메뉴 */}
                    <MenuItem onMouseEnter={handleAccountMouseEnter} onMouseLeave={handleAccountMouseLeave}>
                        <MenuLink to="/mypage/profile">
                            <div>
                                <img src="/icon/profile.png" alt="계정" />
                                계정
                            </div>
                            <RotateIcon isOpen={accountMenuOpen} />
                        </MenuLink>
                        <SubMenu show={isAccountMenuVisible}>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={() => handleClick2("d")}>프로필 및 설정 관리</SubMenuLink2>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={() => handleClick2("e")}>회원정보수정</SubMenuLink2>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink2 onClick={() => handleClick2("f")}>시청 기록 관리</SubMenuLink2>
                            </SubMenuItem>
                        </SubMenu>
                    </MenuItem>

                    {/* 다른 메뉴들 */}
                    <MenuItem>
                        <MenuLink to="/mypage/membershipmanagement">
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
