import { useNavigate } from "react-router-dom";
import { TopMenu } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/modules/authSlice"; // 로그아웃 액션을 추가합니다.

const NavBarMain = () => {
    const navigate = useNavigate(); // navigate 훅을 사용하여 라우팅
    const dispatch = useDispatch(); // dispatch 훅을 사용하여 Redux 액션을 보냅니다.

    const { authed, user } = useSelector((state) => state.authR); // 로그인 여부 상태 가져오기

    const handleLoginClick = () => {
        if (authed) {
            dispatch(authActions.logout()); // 로그아웃 상태로 변경

            navigate("/"); // 로그인 페이지로 이동
        } else {
            navigate("/login"); // 로그인 페이지로 이동
        }
    };

    const handleSignUpClick = () => {
        navigate("/signUp"); // 회원가입 페이지로 이동
    };

    return (
        <TopMenu className="Topmenu1">
            <div>
                {!authed && (
                    <button className="b1" onClick={handleSignUpClick}>
                        지금가입하기
                    </button>
                )}

                {authed ? (
                    <button onClick={handleLoginClick}>로그아웃</button> // 로그인 상태에서 로그아웃
                ) : (
                    <button onClick={handleLoginClick} className="login">
                        {" "}
                        로그인
                    </button> // 로그인하지 않았을 때 로그인
                )}
            </div>
        </TopMenu>
    );
};

export default NavBarMain;
