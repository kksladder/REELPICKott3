import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { HeaderWrap } from "./style";
import NavBarMain from "./NavBarMain";
import { useSelector } from "react-redux";

const Header = () => {
    const { authed } = useSelector((state) => state.authR);
    return (
        <HeaderWrap>
            <div className="header_inner">
                <h1>
                    <Link to="/">
                        <img src="/images/logo.svg" alt="logo" />
                    </Link>
                </h1>
                {/*  */}
                {/*     <NavBar /> */}
                {/* 로그인 후 Nav */}
                {authed ? <NavBar /> : <NavBarMain />}

                {/* 로그인 전 Nav */}
            </div>
        </HeaderWrap>
    );
};

export default Header;
