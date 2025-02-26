import { Outlet } from "react-router-dom";
import Header from "./header";
import styled from "styled-components";
export const Wrap = styled.div``;

const Layout = () => {
    return (
        <Wrap className="wrap">
            <Header />
            <main className="main">
                {/* 라우터 페이지들어오기  */}
                <Outlet />
            </main>
            {/*      <Footer /> */}
        </Wrap>
    );
};

export default Layout;
