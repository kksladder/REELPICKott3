import { Outlet } from 'react-router-dom';
import Header from './header';

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            <main className="main">
                {/* 라우터 페이지들어오기  */}
                <Outlet />
            </main>
            {/*      <Footer /> */}
        </div>
    );
};

export default Layout;
