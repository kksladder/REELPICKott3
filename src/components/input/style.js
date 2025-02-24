import styled from 'styled-components';

export const StyledInput = styled.input`
    padding: 12px;
    margin-bottom: 15px;
    background: var(--bg-color-gray-color-normal-hover, #2e2e2e);
    width: 100%;
    height: 48px;
    color: white;
    border: none;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    color: white;
    font-size: 14px;
    .nomargin {
        border: 10px solid red;
    }
`;
