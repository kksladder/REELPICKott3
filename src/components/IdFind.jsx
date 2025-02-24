import { useState } from 'react';
import LogoWrapper from './logo/LogoWrapper';
import styled from 'styled-components';
import InputField from './input/InputField';
import Button from './Button/Button';
import { Link } from 'react-router';
import LinkedLogin from './LinkedLogin';

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
        form {
            display: flex;
            flex-direction: column;
            gap: 11px;
            color: white;
        }
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
const IdFind = () => {
    const [username, setUsername] = useState('');
    const [telFirst, setTelFirst] = useState('');
    const [telSecond, setTelSecond] = useState('');
    const [telThird, setTelThird] = useState('');
    const [foundEmail, setFoundEmail] = useState('');
    const [message, setMessage] = useState('');

    const changeInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'telFirst':
                setTelFirst(value);
                break;
            case 'telSecond':
                setTelSecond(value);
                break;
            case 'telThird':
                setTelThird(value);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullPhoneNumber = telFirst + telSecond + telThird;

        // localStorage의 모든 키를 순회하면서 사용자 찾기
        let found = false;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('user_')) {
                const userInfo = JSON.parse(localStorage.getItem(key));

                // username과 전화번호가 모두 일치하는지 확인
                if (userInfo.username === username && userInfo.tel === fullPhoneNumber) {
                    setFoundEmail(userInfo.id_email);
                    setMessage('회원님의 아이디를 찾았습니다.');
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            setFoundEmail('');
            setMessage('일치하는 회원 정보가 없습니다.');
        }
    };
    return (
        <>
            <Wrap>
                <LogoWrapper />
                <FormContainer>
                    <div className='formInner'>
                        {' '}
                        <Title>아이디 찾기</Title>
                        <form onSubmit={handleSubmit}>
                            <InputField
                                label='닉네임'
                                type='text'
                                id='username'
                                placeholder='닉네임'
                                name='username'
                                value={username}
                                onChange={changeInput}
                            />

                            <label htmlFor='tel'>휴대폰번호 </label>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <InputField
                                    type='text'
                                    name='telFirst'
                                    maxLength='3'
                                    placeholder='010'
                                    id='tel'
                                    value={telFirst}
                                    onChange={changeInput}
                                />
                                -
                                <InputField
                                    type='text'
                                    name='telSecond'
                                    maxLength='4'
                                    placeholder='0000'
                                    id='telSecond'
                                    value={telSecond}
                                    onChange={changeInput}
                                />
                                -
                                <InputField
                                    type='text'
                                    name='telThird'
                                    maxLength='4'
                                    placeholder='0000'
                                    id='telThird'
                                    value={telThird}
                                    onChange={changeInput}
                                />
                            </div>
                            {message && (
                                <div
                                    style={{
                                        color: foundEmail ? '#4CAF50' : '#f44336',
                                        marginTop: '10px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {message}
                                    {foundEmail && (
                                        <div
                                            style={{
                                                marginTop: '5px',
                                                color: '#fff',
                                            }}
                                        >
                                            아이디: {foundEmail}
                                        </div>
                                    )}
                                </div>
                            )}
                            <LinksContainer>
                                <div>
                                    <Link to='/pwfind' className='link'>
                                        비밀번호 찾기
                                    </Link>
                                </div>
                            </LinksContainer>
                            {/*     <LinkedLogin /> */}
                            {/* */}
                            <Button title='아이디 찾기' width='100%' />
                        </form>
                    </div>
                </FormContainer>
            </Wrap>
        </>
    );
};

export default IdFind;
