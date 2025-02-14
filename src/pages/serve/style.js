import styled from 'styled-components';

export const Inner = styled.section`
    padding: 0 64px;
`;

export const MoveDetailWrap = styled.section`
    width: 100%;
    height: auto;
    display: block;
`;

export const MovieVideo = styled.section`
    position: relative;
    width: 100%;
    height: 1035px;

    .video {
        position: relative;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60.95%, rgba(12, 12, 12, 0.61) 87.65%, #141414 100%),
            url('/images/test.jpg') lightgray 50% / cover no-repeat;
        background-size: cover;
    }

    .video > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .video-item {
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, -43%);
        width: 100%;
        padding: 0 62px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .playGroup {
        display: flex;
        gap: 16px;
    }

    .playItem {
        display: flex;
        gap: 22px;
        margin-left: 45px;
    }

    .desc {
        flex: 1;
        margin-left: 35px;
        p {
            width: 100%;
            max-width: 1282px;
            font-size: var(--font-content-Small);
            font-weight: var(--font-weight-Regular);
            line-height: 34px;
        }
    }
`;

export const PlayButton = styled.section`
    width: 142px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 6px;
    background: var(--secondary-00);
    border-style: none;
    backdrop-filter: blur(2px);
    font-size: var(--font-content-Large);
    color: var(--secondary-900);
    cursor: pointer;
`;

export const HeartButton = styled.section`
    display: flex;
    width: 53px;
    height: 54px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    background-color: var(--btn-play);
    border-radius: 6px;
    cursor: pointer;
`;

export const ProductDetail = styled.section`
    width: 100%;
    flex-shrink: 1;
    display: block;
    margin-top: 58px;
    padding-left: 64px;
    height: 378px;
    overflow: hidden; // 불필요한 스크롤 방지
    /* background-color: aliceblue; */
    .title {
        font-size: var(--font-content-XXsmall);
    }
    .pd_sec,
    .actor_sec {
        display: flex;
        overflow-y: hidden;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    .pd {
        width: fit-content;
        padding-right: 20px;

        margin-top: 16px;
        flex-shrink: 1;
        height: auto;

        font-size: var(--font-content-XXsmall);
        flex-wrap: wrap;
        align-content: flex-start;
        position: relative;
        position: sticky;
        top: 0;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .pd_img {
            width: 137px;
            height: 130px;
            border-radius: 50%;
            background: #d9d9d9;
        }
        .pd_name {
            margin: 10px 0;
        }
        .pd_part {
            color: var(--secondary-300);
        }
    }
    .pd::after {
        content: '';
        position: absolute;
        right: 0;
        width: 2px;
        height: 50%;
        background-color: var(--secondary-600);
        top: 50%;
        transform: translateY(-50%);
    }

    .actor_sec {
        overflow-x: auto;
        align-items: flex-start;
        /* gap: 20px; */
        padding-left: 40px;
    }
    .actor {
        width: fit-content;
        margin: 16px 40px 0 0;
        flex-shrink: 1;
        height: auto;

        flex-direction: column;
        font-size: var(--font-content-XXsmall);
        flex-wrap: wrap;
        align-content: flex-start;
        position: relative;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .actor_img {
            width: 137px;
            height: 130px;
            border-radius: 50%;
            background: #d9d9d9;
        }
        .actor_name {
            margin: 10px 0;
        }
        .actor_part {
            color: var(--secondary-300);
        }
    }
`;

/////////////////////
// 시즌 Section
/////////////////////

export const SeasonVideo = styled.section`
    margin-bottom: 85px;

    .under-line {
        padding-top: 85px;
        border-bottom: 2px solid var(--secondary-600);
    }

    .season-title {
        font-size: var(--font-header-Medium);
        width: fit-content;
        margin-bottom: 20px;
    }

    /* Hover effect for season-slide */
    .season-slide {
        position: relative;
        &:hover .season_slide-button {
            opacity: 1;
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .season-sec {
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        gap: 24px; /* Optional: Add gap between items */
        scroll-behavior: smooth;
        a {
            display: inline-block;
            width: fit-content;
            height: fit-content;
        }
    }

    .season_vid {
        width: 317px;
        height: 166px;
        flex-shrink: 0;
        background-color: aliceblue;
    }

    .season-vid_tit {
        font-size: var(--font-content-XXsmall);
        padding-top: 24px;
    }

    .season-vid_info {
        display: flex;
        color: var(--secondary-200);
        padding-top: 5px;
        .season-vid_day {
            position: relative;
            padding-right: 7px;
            border-right: 2px solid var(--secondary-600);
        }
        .season-vid_time {
            margin-left: 7px;
        }
    }

    /* Button visibility and positioning */
    .season_slide-button {
        position: absolute;
        top: 38%;
        left: -40px; /* Adjusted positioning */
        right: -40px; /* Adjusted positioning */
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        z-index: 1;

        opacity: 0; /* Initially hidden */
        transition: opacity 0.3s ease; /* Smooth fade-in */
    }
`;

/////////////////////
//비슷한 컨텐츠 Section
/////////////////////
export const SimilarCont = styled.section`
    .con-title {
        font-size: var(--font-header-Medium);
        width: fit-content;
        margin-bottom: 20px;
    }
    &:hover .con-slide .con_slide-button {
        opacity: 1; /* Show buttons when hovering over SimilarCont */
    }
    ::-webkit-scrollbar {
        display: none;
    }

    .con-slide {
        position: relative;

        .con-sec {
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            gap: 30px;
            scroll-behavior: smooth;

            .con-item {
                width: 273px;
                height: 338px;
                background-color: aliceblue;
            }
        }
    }
    .season_slide-button,
    .con_slide-button {
        position: absolute;
        top: 50%;
        left: -40px;
        right: -40px;
        transform: translateY(-50%); // ✅ Y축 중앙 정렬
        display: flex;
        justify-content: space-between; // ✅ 좌우 정렬
        z-index: 1;

        opacity: 0; /* Initially hidden */
        transition: opacity 0.3s ease;
    }
`;

export const InputFillDeWrapper = styled.section`
    margin-left: 20px;
`;
