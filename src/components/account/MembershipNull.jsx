import React from "react";
import { SlArrowRight } from "react-icons/sl";

const MembershipNull = () => {
    return (
        <>
            <div className="contents">
                현재 이용중인 멤버십이 없습니다.
                <p>
                    가입하러가기
                    <SlArrowRight size={12} />
                </p>
            </div>
        </>
    );
};

export default MembershipNull;
