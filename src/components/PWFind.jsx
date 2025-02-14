import { useState } from 'react';
import LogoWrapper from './logo/LogoWrapper';
import styled from 'styled-components';
import InputField from './input/InputField';
import { Link } from 'react-router';
import LinkedLogin from './LinkedLogin';
import Button from './Button/Button';

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const FormContainer = styled.div`
    flex: 1;

    .formInner {
        width: 808px;
        height: 705px;
        border-radius: 15px;
        background: #000;
        box-shadow: 0px 4px 30.4px 0px rgba(255, 255, 255, 0.24);
        padding: 114px 118px 160px 163px;
    }
`;
export const Title = styled.div`
    text-align: center;
    color: #fff;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 33px;
`;
export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 14px;

    div {
        display: flex;
        gap: 5px;
        .link {
            color: #7c7c7c;
            font-size: 17px;
        }
    }
    .link {
        color: #7c7c7c;
        font-size: 17px;
        color: var(--primary-color);
        &:hover {
            font-weight: bold; /* hover 상태에서 글씨를 굵게 */
        }
    }
`;
const PWFind = () => {
    const [id_email, setIdEmail] = useState('');
    const [foundPassword, setFoundPassword] = useState('');
    const [message, setMessage] = useState('');

    const changeInput = (e) => {
        setIdEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // localStorage에서 해당 이메일의 사용자 정보 검색
        const userInfo = localStorage.getItem('user_' + id_email);

        if (userInfo) {
            // 사용자 정보가 존재하면 비밀번호 표시
            const user = JSON.parse(userInfo);
            setFoundPassword(user.password);
            setMessage('비밀번호를 찾았습니다.');
        } else {
            // 사용자 정보가 없으면 에러 메시지
            setFoundPassword('');
            setMessage('해당 이메일로 등록된 계정이 없습니다.');
        }
    };
    return (
        <>
            <Wrap>
                <LogoWrapper />
                <FormContainer>
                    <div className='formInner'>
                        {' '}
                        <Title>비밀번호 찾기</Title>
                        <form onSubmit={handleSubmit}>
                            <InputField
                                label='이메일'
                                type='text'
                                id='id_email'
                                placeholder='이메일'
                                name='id_email'
                                value={id_email}
                                onChange={changeInput}
                            />
                            {message && (
                                <div
                                    style={{
                                        color: foundPassword ? '#4CAF50' : '#f44336',
                                        marginTop: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {message}
                                    {foundPassword && (
                                        <div
                                            style={{
                                                marginTop: '5px',
                                                color: '#fff',
                                            }}
                                        >
                                            비밀번호: {foundPassword}
                                        </div>
                                    )}
                                </div>
                            )}
                            <LinksContainer>
                                <div>
                                    <Link to='/idfind' className='link'>
                                        아이디 찾기
                                    </Link>
                                </div>
                            </LinksContainer>
                            {/*    <LinkedLogin /> */}
                            {/* */}
                            <Button title='비밀번호 찾기' width='100%' />
                        </form>
                    </div>
                </FormContainer>
            </Wrap>
        </>
    );
};

export default PWFind;
