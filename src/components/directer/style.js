import styled from "styled-components";

export const DirecMovItemWrap = styled.section`
    .detail-sec {
        width: 100%;
        /* position: absolute; */
        /* background: url("/images/direc.png") no-repeat right; */
        .info-left {
            width: fit-content;
            height: 100%;
            /* top: 0;
            left: 0;
            z-index: 0; */
            .left_detail {
                .left_name {
                    font-size: var(--font-body-Super);
                    margin-top: 215px;
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
            .desc_tit {
                font-size: var(--font-content-XXsmall);
                font-weight: var(--font-weight-Regular);
                margin: 35px 0 22px 0;
            }
            .desc_txt {
                font-size: var(--font-content-XXsmall);
                line-height: 30px;
            }
            .desc_add {
                font-size: var(--font-content-XXsmall);
                margin-top: 3px;
            }
        }
        .info-right {
            img {
                width: auto;
                height: 700px;
                position: absolute;
                top: 0;
                right: 0;
                z-index: -1;
            }
        }
    }

    .dir-list {
        margin-top: 80px;
    }
`;
export const MovListWrap = styled.section`
    display: flex;
    .mov-wrap {
        display: flex;

        .style-step {
            width: fit-content;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            margin-right: 24px;
            .step-icon {
                margin-bottom: 24px;
            }
        }
        .mov-date{
            margin-right:50px ;
            font-size: var(--font-header-Medium);
        }
        .step-line {
            width: 1px;
            height: 283px;
            background-color: var(--primary-40);
            /* background-color: var(--secondary-200);  활성화 안됐을 때 색상*/
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
                        font-size: var(--font-content-Xlarge);
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
