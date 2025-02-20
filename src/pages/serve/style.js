import styled from "styled-components";

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
    height: 900px;
    
    .video {
        position: relative;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60.95%, rgba(12, 12, 12, 0.61) 87.65%, #141414 100%);
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60.95%, rgba(12, 12, 12, 0.61) 87.65%, #141414 100%);
            pointer-events: none;
        }
        
    }

    .video > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .video-item {
        display: flex;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, -43%);
        width: 100%;
        height: 100px;
        padding: 0 62px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        z-index: 1;
        .desc {
            flex: 1;
            margin-left: 35px;
            max-width: 1282px;
            font-size: var(--font-content-Small);
            font-weight: var(--font-weight-Regular);
            line-height: 34px;

            p {
                overflow: hidden;
                transition: max-height 0.3s ease-in-out;

                &.collapsed {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2; /* 두 줄만 보이도록 설정 */
                    max-height: 68px;
                    text-overflow: ellipsis;
                }

                &.full-text {
                    -webkit-line-clamp: unset;
                    max-height: 1000px;
                }
            }

            .desc_add {
                display: flex;
                align-items: center;
                gap: 4px;
                cursor: pointer;
                user-select: none;
            }
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

        .tag {
            display: flex;
            gap: 9px;
            margin-top: 10px;

            .tag_age {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                font-weight: var(--font-weight-ExtraBold);
                width: 28px;
                height: 28px;
                background-color: #d92b35;
            }

            .tag_year,
            .tag_genre,
            .tag_time {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                padding: 4.5px 6.5px;
                border: 1px solid var(--secondary-60);
                color: var(--secondary-60);
            }
        }
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
        .desc_add {
            display: flex;
            align-items: center;
            gap: 4px;
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
    height: 310px;
    overflow: hidden;
    position: relative;
    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .pd_sec {
        display: flex;
        align-items: flex-start;
    }

    .director {
        width: 130px;
        text-align: center;
        margin-right: 30px;
        position: sticky;
        top: 0;

        .pd_img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 10px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .pd_name {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .pd_part {
            font-size: 14px;
            color: #999;
        }
    }

    .cast {
        flex: 1;
        overflow-x: auto;
        white-space: nowrap;
        padding-left: 30px;
        .cast-no{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60%;
    height: 60%;
            position: absolute;
        }
    }
`;

/////////////////////
// 시즌 Section
/////////////////////

export const SeasonVideo = styled.section`
    margin-bottom: 85px;
    .season-title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;

    .season-title {
        width: fit-content;
        font-size: var(--font-header-Medium);
        margin: 0;
    }
    
    .glass-icon {
        width: auto;
        height: auto;
        margin: 0 15px 0 9px;
        cursor: pointer;
    }
    
    .season-selector-wrap {
        display: none; 
        position: absolute; 
        left: 0; 
        top: 0; 
        z-index: 10;
        
        .season-selector {
            display: flex;
            padding: 10px;
            gap: 5px;
            
            button {
                width: auto;
                height: 28px;
                background-color: var(--secondary-600);
                color: var(--white);
                border-radius: 7px;
                padding: 0 12px;
                
                &:hover {
                    background-color: var(--secondary-500);
                }
                
                &.active {
                    background-color: var(--secondary-500);
                }
            }
        }
    }
    
   
    .glass-icon:hover + .season-selector-wrap,
    .season-selector-wrap:hover { 
        display: flex;
    }
}

    .under-line {
        padding-top: 85px;
        border-bottom: 2px solid var(--secondary-600);
    }

    
    .season-slide {
        position: relative;
        &:hover .season_slide-button {
            opacity: 1;
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

    /* Button visibility and positioning */
    .season_slide-button {
        position: absolute;
        top: 38%;
        left: -40px; 
        right: -40px; 
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        z-index: 1;

        opacity: 0; 
        transition: opacity 0.3s ease; 
    }
`;

/////////////////////
//비슷한 컨텐츠 Section
/////////////////////
export const SimilarCont = styled.section`
margin-bottom: 70px;
    .con-title {
        font-size: var(--font-header-Medium);
        width: fit-content;
        margin-bottom: 20px;
    }
    &:hover .con-slide .con_slide-button {
        opacity: 1; 
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

export const StyledEpisodeList = styled.div`
    .series-movies {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        .movie-item {
            display: flex;
            gap: 20px;
            background: rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            overflow: hidden;
            
            .movie-poster {
                width: 200px;
                height: 300px;
                flex-shrink: 0;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            
            .movie-info {
                padding: 20px;
                flex: 1;
                
                .movie-title {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                }
                
                .movie-overview {
                    color: #666;
                    margin-bottom: 15px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .movie-meta {
                    display: flex;
                    gap: 15px;
                    color: #888;
                }
            }
            
            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
        }
    }
`;