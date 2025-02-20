// components/common/PageLayout.style.js
import styled from "styled-components";

export const PageWrapper = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
`;

export const PageTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
`;
