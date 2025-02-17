import styled from "styled-components";

export const DirectorWrap = styled.section`
.detail-sec{
    width: 100%;
    height: 876px;
    
    .info-left{
        .left_detail{
            .left_name{
                font-size: var(--font-body-Super);
            }
            .left_birt, .left_natinal{
                color: var(--secondary-60);
                font-size: var(--font-content-Small);
            }
            .left_birt{
                margin: 19px 0 15px 0;
            }
        }
        .desc_tit{
            font-size: var(--font-content-XXsmall);
            font-weight: var( --font-weight-Regular);
            margin: 35px 0 22px 0;
        }
        .desc_txt{
            font-size: var(--font-content-XXsmall);
            line-height: 30px;
        }
        .desc_add{
            font-size: var(--font-content-XXsmall);
            margin-top: 3px;
        }
    }
    .info-right{

    }
}
`

export const DirectorMovie = styled.section`

`