import styled from "styled-components";

export const DirecMovItemWrap = styled.section`
     .detail-sec {
        width: 100%;
        min-height: 700px;
        position: relative;
        overflow: hidden;

        .info-left {
            position: relative;
            z-index: 2;
            width: fit-content;
            .left_detail {
                .left_name {
                    font-size: var(--font-body-Super);
                    margin-top: 215px;
                    color: #fff;
                }
                .left_birt,
                .left_natinal {
                    color: var(--secondary-60);
                    font-size: var(--font-content-Small);
                }
                .left_birt {
                    margin: 19px 0 15px 0;
                }
            }
            .desc {
                .desc_tit {
                    font-size: var(--font-content-XXsmall);
                    font-weight: var(--font-weight-Regular);
                    margin: 35px 0 22px 0;
                }
                .desc_txt {
                    font-size: var(--font-content-XXsmall);
                    line-height: 30px;
                }
            }
        }

        .info-right {
            .background-wrapper {
                position: absolute;
                top: 0;
                right: 0;
                width: 60%;
                height: 100%;
                z-index: 1;

                img {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 800px;
                    height: 700px;
                    object-fit: cover;
                }

                .gradient-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                    background: linear-gradient(351.7deg, rgba(20.2, 20, 20, 0.18) -8.27%, #141414 301.66%),
                        linear-gradient(270.4deg, rgba(0, 0, 0, 0.11) 49.94%, rgba(14.8, 9, 9, 1.97) 77.78%, #141414 93.53%),
                        linear-gradient(to bottom, rgba(20, 20, 20, 0) 60%, #141414 100%);
                }
            }
        }
    }
`;
export const MovListWrap = styled.section`
    display: flex;
    .mov-wrap {
        display: flex;
        margin-top: 20px;
        .style-step {
            width: fit-content;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            margin-right: 24px;
            .step-icon {
                margin-bottom: 24px;
                transition: opacity 0.3s ease;
            }
            .step-line {
            width: 1px;
                height: 283px;
                margin-top: 20px;
                background-color: #666666; // 비활성화 상태의 색상
                transition: background-color 0.3s ease;

                &.active {
                    background-color: var(--primary-40); // 활성화 상태의 색상
                }
        }
        }
        .mov-date{
            margin-right:50px ;
            font-size: var(--font-header-Medium);
        }
        
        .list-wrap {
            display: flex;
            .mov-poster {
                
                margin-right: 94px;

                    img {
                        width: 190px;
                        height: 260px;
                    }
            }
            .mov-info-wrap {
                width: fit-content;
                display: flex;
                flex-direction: column;
                .info-title {
                    display: flex;
                    width: 100%;
                    margin-bottom: 22px;
                    .mov_title {
                        font-size: var(--font-content-Medium);
                        width: fit-content;
                        margin-right: 34px;
                    }
                    .mov_tag {
                        display: flex;
                        gap: 10px;
                        .mov-birt,
                        .mov-cate,
                        .mov-time {
                            border: 1px solid #c7c7cc;
                            border-radius: 3px;
                            width: fit-content;
                            /* height: 100%; */
                            padding: 7px;
                            color: #c7c7cc;
                        }
                        .mov-age {
                            width: 32px;
                            height: 32px;
                            background-color: #d92b35;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 3px;
                            font-size: var(--font-content-Xsmall);
                            font-weight: var(--font-weight-Bold);
                            padding: 2px;
                        }
                    }
                }
                .info-desc {
                    color: #c7c7cc;
                    font-size: var(--font-content-XXsmall);
                    line-height: 30px;
                }
            }
        }
    }
`;
