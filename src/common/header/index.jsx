import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { HeaderWrap } from "./style";
import NavBarMain from "./NavBarMain";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
    const { authed } = useSelector((state) => state.authR);

    // 컴포넌트 내부 상태로 로그인 여부 관리

    // authed 값이 바뀔 때마다 화면을 업데이트
    useEffect(() => {
        // 로그인 상태가 변경되면 메뉴바를 갱신
        {
            authed ? <NavBar /> : <NavBarMain />;
        }
    }, [authed]); // authed가 변경될 때마다 실행
    return (
        <HeaderWrap>
            <div className="header_inner">
                <h1>
                    <Link to="/">
                        <img src="/images/logo.svg" alt="logo" className="logo_desktop" />
                        <img src="/images/logo_m.png" alt="logo" className="logo_m" />
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
