import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Account from "../../components/account/Account";
export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 184px;
    display: flex;
`;
export const LeftAccount = styled.div`
    width: calc(100% - 270px);
    min-width: 390px;
`;

const MyPageLayout = () => {
    return (
        <Wrap>
            <Account />
            <LeftAccount>
                <Outlet />
            </LeftAccount>
        </Wrap>
    );
};

export default MyPageLayout;
