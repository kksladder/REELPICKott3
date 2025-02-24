import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputField from '../../components/input/InputField';
import LogoWrapper from '../../components/logo/LogoWrapper';
import { FormContainer, Title, Wrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { authActions } from '../../store/modules/authSlice';

const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id_email: '',
        password: '',
        pwCheck: '', // 비밀번호 확인을 위한 state 추가
        username: '',
        telFirst: '',
        telSecond: '',
        telThird: '',
    });
    const { id_email, password, pwCheck, username, telFirst, telSecond, telThird } = user;
    const [errors, setErrors] = useState({});

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    useEffect(() => {
        // 비밀번호와 비밀번호 확인이 일치하는지 체크
        if (password && pwCheck && password !== pwCheck) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                pwCheck: '비밀번호가 일치하지 않습니다',
            }));
        } else {
            setErrors((prevErrors) => {
                const { pwCheck, ...rest } = prevErrors;
                return rest;
            });
        }
    }, [password, pwCheck]); // pw와 pwCheck 값이 변경될 때마다 실행

    const isValid = id_email !== '' && password === pwCheck && username !== '';

    // Inline validation for password
    const validateForm = () => {
        const newErrors = {};
        /*  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; */

        if (!id_email) {
            newErrors.id_email = '이메일을 입력해주세요';
        }
        if (!password) {
            newErrors.password = '비밀번호를 입력해주세요';
        } /* else if (!passwordPattern.test(pw)) {
            newErrors.pw = '영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요';
        } */

        if (!pwCheck) {
            newErrors.pwCheck = '비밀번호를 확인해주세요';
        }

        if (!username) {
            newErrors.username = '닉네임을 입력해주세요';
        }

        if (!telFirst || !telSecond || !telThird) {
            newErrors.tel = '휴대폰 번호를 모두 입력해주세요';
        }

        setErrors(newErrors); // 오류 상태 업데이트
        return Object.keys(newErrors).length === 0;
    };

    // Form submission logic
    const onSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            dispatch(authActions.signup(user));
            dispatch(authActions.setSignUpComplete(true));

            // 로그인 페이지로 리디렉션
            setTimeout(() => {
                navigate('/membership');
            }, 1000); // 2초 후 로그인 페이지로 이동
        }
    };

    return (
        <Wrap>
            <LogoWrapper />
            <FormContainer>
                <div className="formInner">
                    <Title>회원가입</Title>
                    <form onSubmit={onSubmit}>
                        <InputField
                            label="이메일"
                            type="text"
                            id="id_email"
                            placeholder="이메일"
                            name="id_email"
                            value={id_email}
                            onChange={changeInput}
                        />
                        {errors.id_email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.id_email}</p>}
                        <InputField
                            name="password"
                            id="password"
                            value={password}
                            label="비밀번호"
                            maxLength="15"
                            type="password"
                            placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 ~ 20자)"
                            onChange={changeInput}
                        />
                        {errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>}
                        <InputField
                            name="pwCheck"
                            id="pwCheck"
                            value={pwCheck}
                            label="비밀번호 확인"
                            type="password"
                            maxLength="15"
                            placeholder="비밀번호 확인"
                            onChange={changeInput}
                        />
                        {errors.pwCheck && <p style={{ color: 'red', fontSize: '14px' }}>{errors.pwCheck}</p>}
                        <InputField
                            label="닉네임"
                            type="text"
                            id="username"
                            placeholder="닉네임"
                            name="username"
                            value={username}
                            onChange={changeInput}
                        />
                        {errors.username && <p style={{ color: 'red', fontSize: '14px' }}>{errors.username}</p>}
                        <label htmlFor="tel">휴대폰번호 </label>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <InputField
                                type="text"
                                name="telFirst"
                                maxLength="3"
                                placeholder="010"
                                id="tel"
                                value={telFirst}
                                onChange={changeInput}
                            />
                            -
                            <InputField
                                type="text"
                                name="telSecond"
                                maxLength="4"
                                placeholder="0000"
                                id="telSecond"
                                value={telSecond}
                                onChange={changeInput}
                            />
                            -
                            <InputField
                                type="text"
                                name="telThird"
                                maxLength="4"
                                placeholder="0000"
                                id="telThird"
                                value={telThird}
                                onChange={changeInput}
                            />
                        </div>
                        {errors.tel && <p style={{ color: 'red', fontSize: '14px' }}>{errors.tel}</p>}
                        <label className="checkbox">
                            <input type="checkbox" name="terms" required />
                            예,저는 <span>개인정보 처리방침</span>에 따른 개인정보 수집 및 활용에 동의합니다.&nbsp;
                            <Link to="/terms">(약관 동의 보기)</Link>
                        </label>
                        <Button title="가입하기" width="452px" />
                    </form>
                </div>
            </FormContainer>
        </Wrap>
    );
};

export default SignUpPage;
