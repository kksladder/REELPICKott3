import { Link } from "react-router-dom";
import { StyledLink, TopMenu, TopMenu2 } from "./style";
import { useSelector } from "react-redux"; // You can remove useDispatch if not using it
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
    return (
        <>
            <TopMenu2 className="top-menu">
                <ul className="left-menu">
                    <li>
                        <StyledLink to="/movie">영화</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/drama">드라마</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/ani">애니</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/director">감독별</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/reelpick">릴픽추천</StyledLink>
                    </li>
                </ul>
                <div className="right-menu">
                    <ul>
                        <li>
                            <StyledLink to="/search">
                                <IoSearchOutline size={28} />
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink
                                to="/mypage/accountnull
                        "
                            >
                                <img src="./images/profile.svg" alt="Profile" />
                            </StyledLink>
                        </li>
                    </ul>
                </div>
            </TopMenu2>
        </>
    );
};

export default NavBar;
