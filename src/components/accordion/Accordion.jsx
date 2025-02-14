import { useState } from 'react';
import styled from 'styled-components';

// Wrapper 스타일 정의
const Wrapper = styled.div`
    margin-top: 269px;
    width: 91.66%; /* w-11/12 */
    margin-left: auto; /* mx-auto */
    margin-right: auto; /* mx-auto */
    font-size: 24px; /* text-lg */
    color: white; /* text-white */
    font-weight: bold; /* font-bold */
    margin-bottom: 203px;
`;

// AccordionItem 스타일
const AccordionItemStyled = styled.div`
    padding: 0.75rem 0; /* py-3 */
    border-bottom: 1px solid #333; /* 항목 간 구분선 */
`;

// AccordionButton 스타일
const AccordionButtonStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    border-radius: 5px;
    padding: 10px; /* 패딩 */
    color: white;
    &:hover {
        background-color: #444; /* hover 시 색상 변화 */
    }
`;

// AccordionPanel 스타일
const AccordionPanelStyled = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 31px; /* 129.167% */

    padding: 10px;

    color: var(--Bg-Color-Gray-Color-Lighter, #a5a5a5);
    border-radius: 5px;
    margin-top: 10px;
    white-space: pre-line;
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

const AccordionComponent = () => {
    // 열리는 패널 상태 관리
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            value: 'a',
            title: '[요금제] 이용권 신규 구독 및 가격이 궁금해요',
            text: '안녕하세요! 릴픽의 이용권은 여러 가지 요금제가 있으며, 각 요금제는 사용 기간과 제공되는 서비스에 따라 가격이 달라집니다. \n 가장 인기 있는 요금제는 월간/연간 구독 옵션이 있으며, 가격은 月 9900원과 年 99,000원입니다.',
        },
        {
            value: 'b',
            title: '[로그인] 로그인이 안될 때 고객문의를 남길 수 있는 방법이 있나요?',
            text: '로그인이 되지 않으시는 경우 고객문의 게시물에 문의를 남겨주시면 확인 후 답변드리겠습니다.\n 문의 내용에 발생 증상 외 기모델명, OS버전, 브라우저, 네트워크 등 상세 정보를 남겨주시면 더욱 빠른 조치가 가능하오니 이용에 참고 부탁드립니다.',
        },
        {
            value: 'c',
            title: '[인증] 성인인증은 어떻게 하나요?',
            text: "성인인증을 위해서는 신분증을 사진으로 찍어 업로드하거나, 모바일 인증을 통해 본인 인증을 진행하셔야 합니다. \n 회원가입' 또는 '성인 인증' 페이지에서 안내를 받으실 수 있습니다. 인증이 완료되면, 성인 전용 콘텐츠를 시청하실 수 있습니다.",
        },
        {
            value: 'd',
            title: '[멤버십] 멤버십을 해지하려면 어떻게 해야하나요?',
            text: "멤버십 해지는 매우 간단합니다! '내 계정' > '구독 관리' 메뉴로 들어가시면 '멤버십 해지' 옵션을 찾을 수 있습니다. \n 해지 절차를 진행하시면 멤버십이 자동으로 취소됩니다. 해지 후에는 다음 결제일에 요금이 청구되지 않으며, 이미 결제된 금액은 환불되지 않으니 참고해 주세요.",
        },
        {
            value: 'e',
            title: '[컨텐츠] 릴픽에서 어떤 컨텐츠를 시청할 수 있나요?',
            text: "릴픽에서는 다양한 영화, 드라마, 예능 프로그램, 애니메이션 등을 시청할 수 있습니다. \n 최근 업데이트된 콘텐츠에는 인기 드라마와 최신 영화가 포함되어 있으며, 각 카테고리별로 쉽게 찾아볼 수 있는 필터링 기능을 제공합니다. \n '릴픽의 추천' 섹션에서 새로운 콘텐츠를 확인해보세요!",
        },
    ];

    // 클릭된 Accordion을 열고 닫는 함수
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Wrapper>
            {items.map((item, index) => (
                <AccordionItemStyled key={item.value}>
                    <AccordionButtonStyled onClick={() => handleToggle(index)}>
                        <span>{item.title}</span>
                        <span>{openIndex === index ? '-' : '+'}</span>
                    </AccordionButtonStyled>
                    <AccordionPanelStyled $isOpen={openIndex === index}>{item.text}</AccordionPanelStyled>
                </AccordionItemStyled>
            ))}
        </Wrapper>
    );
};

export default AccordionComponent;
