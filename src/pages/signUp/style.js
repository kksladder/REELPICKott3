import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .error {
        color: red;
    }
`;
export const FormContainer = styled.div`
    flex: 1;

    .formInner {
        width: 808px;
        border-radius: 15px;
        background: #000;
        box-shadow: 0px 4px 30.4px 0px rgba(255, 255, 255, 0.24);
        padding: 59px 174px 83px 182px;
        form {
            display: flex;
            flex-direction: column;
            gap: 11px;
            color: white;
            label.checkbox {
                color: white;
                font-size: 15px;
                span {
                    color: #f59c04;
                }
            }
        }
    }
`;

export const Title = styled.div`
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 39px;
`;
