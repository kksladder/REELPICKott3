import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./common/Layout";
import Main from "./pages/main";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/login/Login";
import SignUpPage from "./pages/signUp";
import ServePage from "./pages/serve";
import Membership from "./components/membership/Membership";
import DramaPage from "./pages/drama";
import IdFind from "./components/IdFind";
import PWFind from "./components/PWFind";
import Basket from "./pages/basket";
import SearchPage from "./pages/search";
import Landing from "./pages/landing";
import Reelpick from "./pages/reelpick";
import MoviePage from "./pages/movie";
import MyPageLayout from "./common/mypageLayout/mypageLayout";
import AccountNull from "./components/account/AccountNull";
import Profile from "./components/account/Profile";
import ViewingHistory from "./components/account/ViewingHistory";
import ProfileEdit from "./components/account/ProfileEdit";
import ProfileModal from "./components/account/ProfileModal";
import Mypage from "./pages/mypage/Mypage";
import ProfileAdd from "./components/account/ProfileAdd";
import AccountMembership from "./components/account/AccountMembership";
import AccountCS from "./components/account/AccountCS";
import TestPage from "./pages/test";
import DirectorPage from "./pages/directer";

function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signUp" element={<SignUpPage />} />
                        {/* <Route path="/serve" element={<ServePage />} /> */}
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/drama" element={<DramaPage />} />
                        <Route path="/idfind" element={<IdFind />} />
                        <Route path="/pwfind" element={<PWFind />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signUp" element={<SignUpPage />} />
                        <Route path="/serve/:moviId" element={<ServePage />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/reelpick" element={<Reelpick />} />
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/drama" element={<DramaPage />} />
                        <Route path="/movie" element={<MoviePage />} />
                        <Route path="/idfind" element={<IdFind />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/pwfind" element={<PWFind />} />
                        <Route path="/test" element={<TestPage />} />
                        <Route path="/director" element={<DirectorPage />} />
                        {/* 조심 */}
                        <Route path="/mypage" element={<MyPageLayout />}>
                            <Route index element={<Mypage />} />
                            <Route path="accountnull" element={<AccountNull />} />
                            <Route path="profile" element={<Profile />} />/
                            <Route path="profileedit" element={<ProfileEdit />} />
                            <Route path="viewing" element={<ViewingHistory />} />
                            <Route path="profilemodal" element={<ProfileModal />} />
                            <Route path="profileAdd" element={<ProfileAdd />} />
                            <Route path="membership" element={<AccountMembership />} />
                            <Route path="cs" element={<AccountCS />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
