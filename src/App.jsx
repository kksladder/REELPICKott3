import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./common/Layout";
import Main from "./pages/main";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/login/Login";
import SignUpPage from "./pages/signUp";
import ServePage from "./pages/serve";
import Membership from "./components/membership/Membership";
import IdFind from "./components/IdFind";
import PWFind from "./components/PWFind";
import Basket from "./pages/basket";
import SearchPage from "./pages/search";
import Landing from "./pages/landing";
import Reelpick from "./pages/reelpick";
import MoviePage from "./pages/movie";
import Profile from "./components/account/Profile";
import ViewingHistory from "./components/account/ViewingHistory";
import ProfileEdit from "./components/account/ProfileEdit";
import ProfileModal from "./components/account/ProfileModal";
import ProfileAdd from "./components/account/ProfileAdd";
import AccountMembership from "./components/account/AccountMembership";
import AccountCS from "./components/account/AccountCS";
import TestPage from "./pages/test";
import DirectorPage from "./pages/directer";
import AccountContents from "./components/account/AccountContents";
import WatchingContent from "./components/account/WatchingContent";
import MembershipManagement from "./components/account/MembershipManagement";
import Cancelmembership from "./components/account/Cancelmembership";
import NoticeContents from "./components/account/NoticeContents";
import MyPageLayout from "./common/myPageLayout/MyPageLayout";
import AnimePage from "./pages/ani";
import DramaPage from "./pages/drama";
import DirectorPage2 from "./pages/bong";

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
                        <Route path="/serve" element={<ServePage />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/idfind" element={<IdFind />} />
                        <Route path="/pwfind" element={<PWFind />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signUp" element={<SignUpPage />} />
                        <Route path="/serve/:movieId" element={<ServePage />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/reelpick" element={<Reelpick />} />
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/movie" element={<MoviePage />} />
                        <Route path="/drama" element={<DramaPage />} />
                        <Route path="/ani" element={<AnimePage />} />
                        <Route path="/idfind" element={<IdFind />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/pwfind" element={<PWFind />} />
                        <Route path="/test" element={<TestPage />} />
                        <Route path="/bong" element={<DirectorPage2 />} />
                        <Route path="/directer/:id" element={<DirectorPage />} />

                        {/* 조심 */}
                        <Route path="/mypage" element={<MyPageLayout />}>
                            <Route index element={<MyPageLayout />} />
                            <Route path="accountcontents" element={<AccountContents />} />
                            <Route path="profile" element={<Profile />} />/
                            <Route path="profileedit" element={<ProfileEdit />} />
                            <Route path="viewing" element={<ViewingHistory />} />
                            <Route path="profilemodal" element={<ProfileModal />} />
                            <Route path="profileAdd" element={<ProfileAdd />} />
                            <Route path="membership" element={<AccountMembership />} />
                            <Route path="cs" element={<AccountCS />} />
                            <Route path="watchingcontent" element={<WatchingContent />} />
                            <Route path="membershipmanagement" element={<MembershipManagement />} />
                            <Route path="cancelmembership" element={<Cancelmembership />} />
                            <Route path="noticecontents" element={<NoticeContents />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
