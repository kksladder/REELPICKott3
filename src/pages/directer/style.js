import styled from "styled-components";

export const DirectorWrap = styled.section`
/* position: relative; */
    .detail-sec {
        width: 100%;
        height: 876px;
        position: relative;

        position: absolute;
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
    .dir-list{
        display: block;
    }
    .dir-list{
        margin-top: 80px;
    }
`;

export const DirectorMovie = styled.section``;
