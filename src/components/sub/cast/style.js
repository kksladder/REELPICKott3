import styled from "styled-components";

export const CastListWrap = styled.section`
overflow-x: auto;
        align-items: flex-start;
        padding-left: 40px; 

/* 
        width: fit-content;
        margin: 16px 40px 0 0;
        flex-shrink: 1;
        height: auto; */

        flex-direction: row;
        font-size: var(--font-content-XXsmall);
        flex-wrap: nowrap;
        align-content: flex-start;
        position: relative; 
        display: flex;
`

export const CastItemWrap = styled.section`

.actor {
        width: fit-content;
        margin: 16px 40px 0 0;
        flex-shrink: 1;
        height: auto;

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
`

export const EpisodeListWrap = styled.section`
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
`

export const EpisodeItemWrap = styled.section`
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

`