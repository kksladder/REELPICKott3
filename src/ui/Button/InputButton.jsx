import { useState } from 'react';
// import { InputFillDeWrapper, StyledInputWrapper } from "../../pages/test/style";
import { StyledInputWrapper } from '../../pages/test/style';
import { InputFillDeWrapper } from '../../pages/serve/style';
/* import { InputFillDeWrapper } from '../../pages/login/style'; */
const InputButtonPage = () => {
    return <div></div>;
};

export default InputButtonPage;

//////////////////////////////////////////
// default InputButton
//////////////////////////////////////////
export const InputFillDe = ({ children, customWidth }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <InputFillDeWrapper>
            <div
                style={{ cursor: 'pointer', position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <input
                    type="button"
                    value={children}
                    style={{
                        all: 'unset',
                        position: 'relative',
                        width: customWidth || '291px',
                        height: '48px',
                        backgroundColor: `${isHovered ? 'var(--primary-50)' : 'var(--primary-40)'}`,
                        borderRadius: '5px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: 'white',
                        cursor: 'pointer',
                        textAlign: 'center',
                    }}
                />
            </div>
        </InputFillDeWrapper>
    );
};
////////////////////////////////////////////
// 모든 입력값 완료되지 않았을 때 Button ex) 회원가입, 로그인
////////////////////////////////////////////
export const InputFill = ({ children, customWidth }) => {
    return (
        <div style={{ cursor: 'pointer', position: 'relative', display: 'inline-block' }}>
            <input
                type="button"
                value={children}
                style={{
                    all: 'unset',
                    position: 'relative',
                    width: customWidth || '527px',
                    height: '48px',
                    backgroundColor: 'var(--primary-30)',
                    borderRadius: '5px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: 'white',
                    cursor: 'pointer',
                    textAlign: 'center',
                }}
            />
        </div>
    );
};

//////////////////////////////////////////
// 실선 InputButton
//////////////////////////////////////////
export const InputLine = ({ children, customWidth }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledInputWrapper>
            <div
                style={{ cursor: 'pointer', position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <input
                    type="button"
                    value={children}
                    style={{
                        all: 'unset',
                        position: 'relative',
                        width: customWidth || '527px',
                        height: '48px',
                        borderRadius: '4.5px',
                        border: `1px solid ${isHovered ? 'var(--primary-50)' : 'var(--secondary-100)'}`,
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: `${isHovered ? 'var(--primary-50)' : 'var(--secondary-100)'}`,
                        cursor: 'pointer',
                        textAlign: 'center',
                        padding: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
            </div>
        </StyledInputWrapper>
    );
};
