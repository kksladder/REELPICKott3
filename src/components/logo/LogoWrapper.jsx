import Logo from './Logo';
import LogoSpell from './LogoSpell';

import styled from 'styled-components';
const LogoWrap = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 59px;
    margin-bottom: 30px;
`;

const LogoWrapper = () => {
    return (
        <>
            <LogoWrap>
                <Logo />
                <LogoSpell />
            </LogoWrap>
        </>
    );
};

export default LogoWrapper;
