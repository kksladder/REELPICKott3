import Account from "../../components/account/Account";

const Mypage = () => {
    // 1. localStorage에서 'selectedMembership' 값을 가져옵니다.
    const selectedMembershipString = localStorage.getItem("selectedMembership");

    // 2. JSON으로 파싱하여 객체로 변환합니다.
    const selectedMembership = selectedMembershipString ? JSON.parse(selectedMembershipString) : null;

    // 3. 객체의 내용을 확인합니다.
    console.log(selectedMembership);

    // 예시로 특정 값에 접근할 때:
    if (selectedMembership) {
        console.log(selectedMembership.type); // 'AD_standard'
        console.log(selectedMembership.price); // '5,500'
        console.log(selectedMembership.date); // '2025-02-12T01:37:39.259Z'
    }

    return (
        <Wrap>
            <Account />
            <LeftAccount />
        </Wrap>
    );
};

export default Mypage;
