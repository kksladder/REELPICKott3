import styled from "styled-components";

export const CastListWrap = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 16px;
    width: 100%;
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
    
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;

export const CastItemWrap = styled.div`
    .actor {
        min-width: 120px;
        text-align: center;
        
        .actor_img {
            width: 120px;
            height: 180px;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 8px;
            background: #333;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
        .actor_name {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 4px;
        }
        
        .actor_part {
            font-size: 12px;
            color: #999;
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
`

export const EpisodeItemWrap = styled.section`
.season_vid {
img{
        width: 317px;
        height: 166px;
        flex-shrink: 0;
        background-color: aliceblue;
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

`