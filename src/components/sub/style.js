import styled from "styled-components";

export const CastListWrap = styled.div`
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }
`;

export const CastItemWrap = styled.div`
    .actor {
        width: 120px;
        text-align: center;

        .actor_img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 8px;
            background: #333;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .placeholder {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background-color: #f0f0f0;
                color: #999;
                font-size: 14px;
            }
        }

        .actor_name {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .actor_part {
            font-size: 12px;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;

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
`;

export const EpisodeItemWrap = styled.section`
    .season_vid {
        a {
            img {
                width: 317px;
                height: 166px;
                flex-shrink: 0;
                background-color: aliceblue;
            }
        }
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
`;
export const MovieSeriesWrap = styled.section`
    .season_vid {
        a {
            img {
                width: 273px;
                height: 338px;
                flex-shrink: 0;
                background-color: aliceblue;
            }
        }
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
`;

export const SimilarItemWrap = styled.section`
.con-item{
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}
transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

 .no-poster{
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(-white);
 }
 
}
.con-title{
  width: 100%;
  font-size: var(--font-content-XXsmall);
  text-align: center;
  margin-top: 20px;
 }
`;
