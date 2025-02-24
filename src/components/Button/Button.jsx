import styled from 'styled-components';

const ButtonInner = styled.button`
    display: flex;
    width: ${({ width }) => width || 'auto'};
    height: 56px;
    padding: 19px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--main-orange-light-active, #fce0b1);
    margin-top: 8px;
    margin-bottom: 18px;
    &:hover {
        background-color: #f59c04;
    }
`;

const Button = ({ title, width }) => {
    return (
        <>
            <ButtonInner type='submit' width={width}>
                {title}
            </ButtonInner>
        </>
    );
};

export default Button;
