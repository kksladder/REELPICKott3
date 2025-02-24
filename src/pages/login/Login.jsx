import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoWrapper from '../../components/logo/LogoWrapper';
import Button from '../../components/Button/Button';
import {
    DividerContainer,
    FormContainer,
    InputField,
    LinksContainer,
    SocialIcon,
    SocialLogin,
    WelcomeText,
    Wrap,
} from './style';

import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import { InputFillDe } from '../../ui/Button/InputButton';

const Login = () => {
    const { authed, isSignUpComplete } = useSelector((state) => state.authR);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id_email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태 추가
    const { id_email, password } = user;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    // 로그인 처리
    const handleLogin = (e) => {
        e.preventDefault();

        // 아이디 또는 비밀번호가 비어있는 경우 에러 메시지 설정
        if (!id_email && !password) {
            setErrorMessage('아이디와 비밀번호를 입력하세요.');
            return;
        }

        if (!id_email) {
            setErrorMessage('아이디를 입력하세요.');
            return;
        }

        if (!password) {
            setErrorMessage('비밀번호를 입력하세요.');
            return;
        }

        // 로컬스토리지에서 해당 사용자 정보 가져오기
        const storedUser = JSON.parse(localStorage.getItem('user_' + id_email)); // 'user_' + 이메일로 로컬스토리지에서 정보 가져오기

        // 로컬스토리지에 사용자 정보가 없다면
        if (!storedUser) {
            setErrorMessage('등록된 사용자가 없습니다.');
            return;
        }

        // 로그인 유효성 검사
        if (id_email.toLowerCase().trim() === storedUser.id_email.toLowerCase() && password === storedUser.password) {
            // 로그인 성공 시 디스패치
            dispatch(authActions.login(storedUser));
            setErrorMessage(''); // 에러 메시지 초기화
            navigate('/'); // 로그인 후 홈 화면으로 리디렉션
        } else {
            setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
        }

        // 로그인 후 input 필드를 비움
        setUser({ id_email: '', password: '' });
    };

    useEffect(() => {
        if (authed) {
            navigate('/');
        }
    }, [authed]);

    return (
        <Wrap>
            <LogoWrapper />
            <FormContainer>
                <div className='formInner'>
                    <WelcomeText>
                        {isSignUpComplete ? (
                            <span>
                                회원가입이 완료되었습니다. <br />
                                아래 로그인 바랍니다.
                            </span>
                        ) : (
                            <span>
                                회원님,
                                <br />
                                릴픽에 방문해주셔서 반갑습니다.
                            </span>
                        )}
                    </WelcomeText>

                    <form onSubmit={handleLogin}>
                        <InputField
                            type='text'
                            placeholder='아이디'
                            name='id_email'
                            value={id_email}
                            onChange={changeInput}
                        />
                        <InputField
                            type='password'
                            placeholder='비밀번호'
                            name='password'
                            value={password}
                            onChange={changeInput}
                        />

                        {/* 에러 메시지가 있을 때만 표시 */}
                        {errorMessage && (
                            <div style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{errorMessage}</div>
                        )}
                        {/*  <InputFillDe>로그인</InputFillDe> */}

                        <Button title='로그인' width='527px' />
                    </form>

                    <LinksContainer>
                        <div>
                            <Link to='/pwfind' className='link'>
                                비밀번호 찾기
                            </Link>
                            <span>|</span>
                            <Link to='/idfind' className='link'>
                                아이디 찾기
                            </Link>
                        </div>
                        <Link to='/signUp' className='link'>
                            회원가입
                        </Link>
                    </LinksContainer>

                    <DividerContainer>
                        <div className='divider-line'></div>
                        <div className='divider-text'>또는</div>
                        <div className='divider-line'></div>
                    </DividerContainer>

                    <SocialLogin>
                        <SocialIcon>
                            <img src='./images/icon/google.svg' />
                        </SocialIcon>
                        <SocialIcon>
                            <img src='./images/icon/youtube.svg' />
                        </SocialIcon>
                        <SocialIcon>
                            <img src='./images/icon/apple.svg' />
                        </SocialIcon>
                    </SocialLogin>
                </div>
            </FormContainer>
        </Wrap>
    );
};

export default Login;
