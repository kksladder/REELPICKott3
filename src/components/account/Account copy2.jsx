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
    width: 100%;
`;

const MainMenu = styled.ul``;

const MenuItem = styled.li`
    position: relative;
    transition: all 0.3s ease; /* 메뉴의 높이가 변화할 때 부드럽게 변하도록 추가 */
    &:hover {
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
        display: inline-block;
    }
    ${({ expanded }) =>
        expanded &&
        `
        padding-bottom: 20px; /* 서브메뉴가 표시되면 메뉴 항목의 아래 여백을 추가 */
    `}
`;

const MenuLink = styled(Link)`
    width: 100%;
    display: flex;
    text-decoration: none;
    color: inherit;
    padding: 8px 15px;
`;

const SubMenu = styled.ul`
    display: ${({ show }) => (show ? 'block' : 'none')};
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--black-black-b-500-notice-hover-bg, #3b3b3b);
    border-radius: 5px;
    width: 200px;
    padding: 10px 0; /* 서브메뉴의 여백을 조정 */
`;

const SubMenuItem = styled.li`
    display: flex;

    color: white;
    &:hover {
        background: var(--black-black-b-400, #2a2a2a);
    }
`;

const SubMenuLink = styled(Link)`
    display: inline-block;
    padding: 8px 15px;
    text-decoration: none;
    color: inherit;
`;

const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authed, user } = useSelector((state) => state.authR);

    const handleLoginClick = () => {
        if (authed) {
            dispatch(authActions.logout());
            navigate('/');
        } else {
            navigate('/login');
        }
    };

    const [isMyMenuVisible, setMyMenuVisible] = useState(false);
    const [isAccountMenuVisible, setAccountMenuVisible] = useState(false);

    // "My" 메뉴에 마우스를 올렸을 때만 보이게
    const handleMyMouseEnter = () => setMyMenuVisible(true);
    const handleMyMouseLeave = () => setMyMenuVisible(false);

    // "계정" 메뉴에 마우스를 올렸을 때만 보이게
    const handleAccountMouseEnter = () => setAccountMenuVisible(true);
    const handleAccountMouseLeave = () => setAccountMenuVisible(false);

    return (
        <MenuArea>
            <MainMenu>
                <div>
                    <ProfileImage />
                </div>
                <p>{user && user.username}</p>
                <p>{user && user.id_email}</p>

                {/* "My" 메뉴에 대한 항목 */}
                <MenuItem
                    expanded={isMyMenuVisible}
                    onMouseEnter={handleMyMouseEnter}
                    onMouseLeave={handleMyMouseLeave}
                >
                    <MenuLink to="/">
                        <div>
                            <AccountMy />
                            My
                        </div>
                        <SlArrowUp />
                    </MenuLink>
                    <SubMenu show={isMyMenuVisible}>
                        <SubMenuItem>
                            <SubMenuLink to="/">최근 시청중인 컨텐츠</SubMenuLink>
                        </SubMenuItem>
                        <SubMenuItem>
                            <SubMenuLink to="/">찜한 컨텐츠</SubMenuLink>
                        </SubMenuItem>
                        <SubMenuItem>
                            <SubMenuLink to="/">현재 이용중인 멤버십</SubMenuLink>
                        </SubMenuItem>
                    </SubMenu>
                </MenuItem>

                {/* "계정" 메뉴에 대한 항목 */}
                <MenuItem
                    expanded={isAccountMenuVisible}
                    onMouseEnter={handleAccountMouseEnter}
                    onMouseLeave={handleAccountMouseLeave}
                >
                    <MenuLink to="/">
                        <div>
                            <AccountProfile />
                            계정
                        </div>
                    </MenuLink>
                    <SubMenu show={isAccountMenuVisible}>
                        <SubMenuItem>
                            <SubMenuLink to="/">프로필 및 설정 관리</SubMenuLink>
                        </SubMenuItem>
                        <SubMenuItem>
                            <SubMenuLink to="/">회원정보수정</SubMenuLink>
                        </SubMenuItem>
                        <SubMenuItem>
                            <SubMenuLink to="/">시청 기록 관리</SubMenuLink>
                        </SubMenuItem>
                    </SubMenu>
                </MenuItem>

                {/* 다른 메뉴 항목들 */}
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
            </MainMenu>
        </MenuArea>
    );
};

export default Account;
