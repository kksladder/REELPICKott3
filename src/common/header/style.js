import styled from "styled-components";
import { Link } from "react-router-dom";

// 링크에 대한 스타일 정의
export const StyledLink = styled(Link)`
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: var(--primary-40);
    }
`;

// HeaderWrap 컴포넌트
export const HeaderWrap = styled.header`
    margin: 0 70px;
    width: calc(100% - 140px);
    height: 70px;
    max-width: 1920px;
    min-width: 390px;

    .header_inner {
        display: flex;
        width: 100%;
        height: 100%;

        h1 {
            width: 13%;
            margin: 0;
            padding: 0;
            height: 100%;
            line-height: 82px;
        }
    }
`;

// NavWrap 컴포넌트
export const NavWrap = styled.nav`
    width: 100%;
`;

// TopMenu 컴포넌트
export const TopMenu = styled.div`
    width: 87%;
    height: 70px;

    div {
        width: 100%;
        height: 100%;
        gap: 12px;
        align-items: center;
        display: flex;
        justify-content: flex-end;

        button {
            color: var(--white);
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 14px;
            padding: 10px 16px;
            font-weight: 600;
            background: #dedede;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: var(--primary-40);
            }
        }
    }

    .b1 {
        background-color: var(--primary-40);

        &:hover {
            background-color: var(--primary-50);
        }
    }
`;

export const TopMenu2 = styled.nav`
    width: 85%;
    display: flex;
    justify-content: space-between;

    ul {
        display: flex;
        gap: 1.875rem;
        align-items: center;
        margin-left: 82px;
    }

    .left-menu {
        color: var(--white);
        font-size: var(--font-header-Small);
        gap: 40px;
    }

    .right-menu {
        height: 70px;
        display: flex;
        align-items: center;
        color: var(--white);

        ul {
            display: flex;
            list-style: none;
            gap: 1.625rem;
            align-items: center;
            height: 100%;
            margin: 0;
        }

        li {
            display: flex;
            align-items: center;
            height: 100%;
        }

        a {
            display: flex;
            align-items: center;
            transition: opacity 0.3s ease;
        }

        img {
            width: 28px;
            height: 28px;
        }
    }
`;
