import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileImage from '../../ui/icon/ProfileImage';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import AccountMy from '../../ui/icon/AccountMy';
import AccountProfile from '../../ui/icon/AccountProfile';
import AccountMembership from '../../ui/icon/AccountMembership';
import AccountCs from '../../ui/icon/AccountCs';
import { SlArrowUp } from 'react-icons/sl';
import Logout from '../../ui/icon/Logout';
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
    width: 300px;
    padding: 8px 0;
    &:hover {
        color: var(--primary-40);
        border-radius: 5px;
        background: var(--black-black-b-600-input-hover-bg, #2e2e2e);
    }
    button {
        all: unset;
        background: transparent;
        border: none;
        padding: 0;
        font: inherit;
        color: inherit;
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
        .account-my-svg {
            // 첫 번째 'type'이 svg인 요소를 선택
            margin-left: 2.8px;
        }
        svg {
            margin-right: 8px;
        }
    }
`;

const SubMenu = styled.ul`
    display: ${({ show }) => (show ? 'block' : 'none')};
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 150px;
`;

const SubMenuItem = styled.li`
    color: var(--Black-Black-B50, #bfbfbf);
    border-bottom: 1px solid #2e2e2e;
    padding: 8px 15px;
    display: flex;
    justify-content: flex-end;
    background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
    &:hover {
    }
`;

const SubMenuLink = styled(Link)`
    padding: 8px 0;
    &:hover {
        font-weight: bold;
    }
`;

const Account = () => {
    const dispatch = useDispatch(); // dispatch 훅을 사용하여 Redux 액션을 보냅니다.
    const navigate = useNavigate();
    const { authed, user } = useSelector((state) => state.authR);
    const handleLoginClick = () => {
        if (authed) {
            dispatch(authActions.logout()); // 로그아웃 상태로 변경

            navigate('/'); // 로그인 페이지로 이동
        } else {
            navigate('/login'); // 로그인 페이지로 이동
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
                        <MenuLink to="/">
                            {' '}
                            <div>
                                <AccountMy />
                                My
                            </div>
                            <SlArrowUp />
                        </MenuLink>
                        <SubMenu show={isMyMenuVisible}>
                            <SubMenuItem>
                                <SubMenuLink to="/mypage/accountnull">최근 시청중인 컨텐츠</SubMenuLink>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink to="/mypage/accountnull">찜한 컨텐츠</SubMenuLink>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink to="/mypage/accountnull">현재 이용중인 멤버십</SubMenuLink>
                            </SubMenuItem>
                        </SubMenu>
                    </MenuItem>

                    {/* 계정 메뉴 */}
                    <MenuItem onMouseEnter={handleAccountMouseEnter} onMouseLeave={handleAccountMouseLeave}>
                        <MenuLink to="/mypage/profile">
                            {' '}
                            <div>
                                <AccountProfile />
                                계정
                            </div>
                            <SlArrowUp />
                        </MenuLink>
                        <SubMenu show={isAccountMenuVisible}>
                            <SubMenuItem>
                                <SubMenuLink to="/mypage/profile">프로필 및 설정 관리</SubMenuLink>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink to="/mypage/profileedit">회원정보수정</SubMenuLink>
                            </SubMenuItem>
                            <SubMenuItem>
                                <SubMenuLink to="/mypage/viewing">시청 기록 관리</SubMenuLink>
                            </SubMenuItem>
                        </SubMenu>
                    </MenuItem>

                    {/* 다른 메뉴들 */}
                    <MenuItem>
                        <MenuLink to="/">
                            <div>
                                <AccountMembership />
                                멤버십 관리
                            </div>
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/">
                            <div>
                                <AccountCs />
                                고객센터
                            </div>
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/">
                            <div>
                                <Logout />
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
