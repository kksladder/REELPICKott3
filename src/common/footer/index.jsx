import styled from "styled-components";

const Footer = styled.footer`
    width: 100%;
    height: 285px;
    background-color: #424242;
    padding: 60px 80px;
    color: #ffffff;
`;

const FooterContent = styled.div`
    position: relative;
    height: 100%;
`;

const LogoImg = styled.img`
    height: 30px;
    margin-bottom: 30px;
`;

const CompanyInfoContainer = styled.div`
    display: flex;
    gap: 50px;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
`;

const InfoColumn = styled.div``;

const EmailContainer = styled.div`
    font-size: 14px;
    a {
        color: #ffffff;
        text-decoration: none;
    }
`;

const BottomContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Copyright = styled.div`
    font-size: 14px;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 10px;

    a {
        color: #ffffff;
        text-decoration: none;
        font-size: 14px;
    }
`;
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <Footer>
            <FooterContent>
                <LogoImg src="/logo.png" alt="ReelPick" />
                <CompanyInfoContainer>
                    <InfoColumn>
                        상호명 (주)릴픽
                        <br />
                        대표이사 홍길동
                    </InfoColumn>
                    <InfoColumn>
                        사업자등록번호 106-86-43373
                        <br />
                        주소 서울특별시 용산구 원갈래로 100(한강로2가)
                    </InfoColumn>
                </CompanyInfoContainer>
                <EmailContainer>
                    <a href="mailto:support_kr@reelpick.com">support_kr@reelpick.com</a>
                    {", "}
                    <a href="mailto:biz_@reelpick.com">biz_@reelpick.com</a>
                    {" (비즈니스 문의)"}
                </EmailContainer>
                <BottomContainer>
                    <Copyright>© REELPICK CORPORATION. All rights reserved.</Copyright>
                    <SocialLinks>
                        <FaYoutube />

                        <a href="#">Youtube</a>
                        <FaFacebookSquare />

                        <a href="#">Facebook</a>
                        <FaInstagram />

                        <a href="#">Instagram</a>
                    </SocialLinks>
                </BottomContainer>
            </FooterContent>
        </Footer>
    );
};

export default FooterComponent;
