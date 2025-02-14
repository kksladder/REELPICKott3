import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 링크에 대한 스타일 정의
export const StyledLink = styled(Link)`
    text-decoration: none; /* 링크에 밑줄 없애기 */
    color: inherit; /* 상속된 색상 사용 (링크 색상 수정 시 이 부분도 필요할 수 있습니다) */
`;

// HeaderWrap 컴포넌트
export const HeaderWrap = styled.header`
    margin: 0 70px;
    width: calc(100% - 140px); // 전체 너비에서 좌우 마진 빼기
    height: 70px;
    max-width: 1920px; // 최대 너비 설정 (선택사항)
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
            line-height: 70px;
        }
    }
`;

// NavWrap 컴포넌트 (비어 있는 경우 불필요할 수 있음)
export const NavWrap = styled.nav``;

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
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 14px;
            padding: 10px 16px;
            font-weight: 600;
            background: #dedede;
}
        }

        .b1 {
            background-color: #f59c04;
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
        margin-left: 51px;
    }

    .left-menu {
        color: white;
        font-size: 18px;
        li {
        }
    }

    .right-menu {
        height: 70px; // 원하는 높이 설정
        display: flex;
        align-items: center; // 세로 중앙 정렬
        color: white;
        ul {
            display: flex;
            list-style: none;
            gap: 1.625rem;
            align-items: center;
            height: 100%;
        }

        li {
            display: flex;
            align-items: center;
            height: 100%;
        }

        a {
            display: flex;
            align-items: center;
        }

        img {
            width: 28px;
            height: 28px;
        }
    }
`;
