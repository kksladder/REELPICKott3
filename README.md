# REELPICK (릴픽) - OTT Content Curation Platform

## 프로젝트 소개 🎬
릴픽은 사용자가 직접 보고싶은 영화 또는 영상을 선택하여 자신만의 취향대로 선택해서 볼수 있는 OTT 플랫폼입니다. 
프로젝트명 'REELPICK'은 영화 촬영 시 사용되는 필름 릴(REEL)에서 착안하여, 
사용자가 선택(PICK)한 콘텐츠를 중심으로 서비스를 제공한다는 의미를 담고 있습니다.

## 개발 기간 ⏰
* 2024.12.31 ~ 2025.02.24 (약 2개월)
* 기획 및 디자인: 3주
* 개발: 5주

## 팀 구성 👥
* **김기섭**: API 필터 설계, 릴픽 추천 페이지, 카테고리 API 통합 담당
* **안예지**: 홈페이지 랜딩 페이지, 마이페이지 담당(회원가입,로그인,로그아웃 구현) 
* **정희수**: 서브페이지, API 연동, 카테고리별 영상연결 감독 필모그라피 페이지 구현 

## 기술 스택 🛠
### Frontend
* HTML5
* CSS3
* React
* JavaScript

### Design
* Figma
* 주조색: Orange & Black
* Font: Pretendard

## 주요 기능 🔍
### 1. 사용자 맞춤형 콘텐츠 큐레이션
* 사용자가 선호하는 장르, 배우, 감독 기반 콘텐츠 추천
* 현재 관심사 즉각 반영 시스템
* 위시리스트를 통한 콘텐츠 관리

### 2. 차별화된 추천 시스템 
* 알고리즘 기반이 아닌 사용자 주도적 콘텐츠 선택
* 특정 배우/감독 작품 모아보기 기능
* 개인화된 맞춤형 영화관 경험 제공

### 3. 폴더 구조 📂
```bash
REELPICK
┣ public
┃ ┣ fonts
┃ ┃ ┣ Pretendard-Black.woff
┃ ┃ ┣ Pretendard-Bold.woff
┃ ┃ ┣ Pretendard-ExtraBold.woff
┃ ┃ ┣ Pretendard-ExtraLight.woff
┃ ┃ ┣ Pretendard-Light.woff
┃ ┃ ┣ Pretendard-Medium.woff
┃ ┃ ┣ Pretendard-Regular.woff
┃ ┃ ┣ Pretendard-SemiBold.woff
┃ ┃ ┗ Pretendard-Thin.woff
┃ ┣ images
┃ ┃ ┣ directors
┃ ┃ ┃ ┣ director1.jpg
┃ ┃ ┃ ┣ director2.jpg
┃ ┃ ┃ ┗ director3.jpg
┃ ┃ ┣ icons
┃ ┃ ┃ ┣ arrow_down.svg
┃ ┃ ┃ ┗ search.svg
┃ ┃ ┣ img_actors
┃ ┃ ┃ ┣ actor1.jpg
┃ ┃ ┃ ┣ actor2.jpg
┃ ┃ ┃ ┗ actor3.jpg
┃ ┃ ┣ img_landing
┃ ┃ ┃ ┣ landing1.jpg
┃ ┃ ┃ ┣ landing2.jpg
┃ ┃ ┃ ┗ landing3.jpg
┃ ┃ ┣ img_login
┃ ┃ ┃ ┣ kakao_login.png
┃ ┃ ┃ ┗ naver_login.png
┃ ┃ ┣ img_logo
┃ ┃ ┃ ┣ reelpick_logo.png
┃ ┃ ┃ ┗ reelpick_logo_small.png
┃ ┃ ┣ img_main
┃ ┃ ┃ ┣ main_banner1.jpg
┃ ┃ ┃ ┣ main_banner2.jpg
┃ ┃ ┃ ┗ main_banner3.jpg
┃ ┃ ┣ img_membership
┃ ┃ ┃ ┣ basic.png
┃ ┃ ┃ ┣ premium.png
┃ ┃ ┃ ┗ standard.png
┃ ┃ ┗ img_movies
┃ ┃   ┣ movie1.jpg
┃ ┃   ┣ movie2.jpg
┃ ┃   ┗ movie3.jpg
┃ ┣ favicon.ico
┃ ┗ index.html
┣ src
┃ ┣ components
┃ ┃ ┣ common
┃ ┃ ┃ ┣ Button
┃ ┃ ┃ ┃ ┣ Button.jsx
┃ ┃ ┃ ┃ ┗ Button.css
┃ ┃ ┃ ┗ Input
┃ ┃ ┃   ┣ Input.jsx
┃ ┃ ┃   ┗ Input.css
┃ ┃ ┣ DirectorComponents
┃ ┃ ┃ ┣ DirectorBanner.jsx
┃ ┃ ┃ ┣ DirectorContent.jsx
┃ ┃ ┃ ┗ DirectorTitle.jsx
┃ ┃ ┣ LandingComponents
┃ ┃ ┃ ┣ LandingBanner.jsx
┃ ┃ ┃ ┣ LandingContent.jsx
┃ ┃ ┃ ┗ LandingTitle.jsx
┃ ┃ ┣ MainComponents
┃ ┃ ┃ ┣ MainBanner.jsx
┃ ┃ ┃ ┣ MainContent.jsx
┃ ┃ ┃ ┗ MainTitle.jsx
┃ ┃ ┣ MembershipComponents
┃ ┃ ┃ ┣ MembershipCard.jsx
┃ ┃ ┃ ┗ MembershipList.jsx
┃ ┃ ┣ MovieComponents
┃ ┃ ┃ ┣ MovieCard.jsx
┃ ┃ ┃ ┣ MovieDetail.jsx
┃ ┃ ┃ ┗ MovieList.jsx
┃ ┃ ┣ MyPageComponents
┃ ┃ ┃ ┣ MyPageContent.jsx
┃ ┃ ┃ ┣ MyPageSidebar.jsx
┃ ┃ ┃ ┗ WishList.jsx
┃ ┃ ┗ layout
┃ ┃   ┣ Footer.jsx
┃ ┃   ┣ Header.jsx
┃ ┃   ┣ Layout.jsx
┃ ┃   ┗ Navbar.jsx
┃ ┣ hooks
┃ ┃ ┣ useAuth.js
┃ ┃ ┗ useMovies.js
┃ ┣ pages
┃ ┃ ┣ DirectorPage
┃ ┃ ┃ ┣ DirectorPage.jsx
┃ ┃ ┃ ┗ DirectorPage.css
┃ ┃ ┣ LandingPage
┃ ┃ ┃ ┣ LandingPage.jsx
┃ ┃ ┃ ┗ LandingPage.css
┃ ┃ ┣ LoginPage
┃ ┃ ┃ ┣ LoginPage.jsx
┃ ┃ ┃ ┗ LoginPage.css
┃ ┃ ┣ MainPage
┃ ┃ ┃ ┣ MainPage.jsx
┃ ┃ ┃ ┗ MainPage.css
┃ ┃ ┣ MembershipPage
┃ ┃ ┃ ┣ MembershipPage.jsx
┃ ┃ ┃ ┗ MembershipPage.css
┃ ┃ ┣ MovieDetailPage
┃ ┃ ┃ ┣ MovieDetailPage.jsx
┃ ┃ ┃ ┗ MovieDetailPage.css
┃ ┃ ┣ MyPage
┃ ┃ ┃ ┣ MyPage.jsx
┃ ┃ ┃ ┗ MyPage.css
┃ ┃ ┗ SearchPage
┃ ┃   ┣ SearchPage.jsx
┃ ┃   ┗ SearchPage.css
┃ ┣ services
┃ ┃ ┣ api.js
┃ ┃ ┗ auth.js
┃ ┣ styles
┃ ┃ ┣ common.css
┃ ┃ ┣ reset.css
┃ ┃ ┗ variables.css
┃ ┣ utils
┃ ┃ ┣ constants.js
┃ ┃ ┗ helpers.js
┃ ┣ App.css
┃ ┣ App.js
┃ ┣ index.css
┃ ┗ index.js
┣ .env
┣ .gitignore
┣ package-lock.json
┣ package.json
┗ README.md

# 프로젝트명

## 시연 영상 📱
* 랜딩페이지
* 회원가입 
* 멤버십 선택
* 카테고리 네비게이션
* 검색 및 서브페이지
* 마이페이지
* 로그아웃

## Git 협업 방식 👨‍💻
* develop 브랜치를 기준으로 각자 작업 브랜치 생성
* 작업 완료 후 develop 브랜치에 병합
* 총 3개의 저장소를 통해 최종 완성

## 향후 계획 🚀
* 메인페이지 추가 개발
* 반응형 웹 구현 
* 모바일 앱 버전 개발

## 프로젝트 소감 💡
본 프로젝트를 통해 React 기반 웹 개발의 전반적인 과정을 경험하고, 팀 협업의 중요성을 배웠습니다. 특히 Git을 통한 버전 관리와 팀원 간의 소통이 프로젝트 성공의 핵심임을 깨달았습니다.

## 라이센스 📌
This project is licensed under the MIT License - see the LICENSE.md file for details

---
본 프로젝트에 대해 더 자세한 내용이나 문의사항이 있으시다면 언제든 연락주시기 바랍니다.
