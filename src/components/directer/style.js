import styled from "styled-components";

export const DirecMovItemWrap = styled.section`
display: flex;
.movie-img img{
    width: 190px;
    height: 260px;
    margin-right: 104px;

}
.movie-info{
    .info_title{
        font-size: var(--font-body-Xlarge);
        margin-bottom: 22px;
    }
    .info-desc{
        font-size: var(--font-content-XXsmall);
        color: var(--secondary-60);
    }
}
`