import { useDispatch } from "react-redux";
import { InputFill, InputFillDe, InputLine } from "../../ui/Button/InputButton";
import { useEffect } from "react";
import { getMovie } from "../../store/modules/getThunk";
import TestList from "../../components/test/TestList";

const TestPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie());
    }, []);
    return (
        <div>
            <InputFill>ReelPick 시작하기</InputFill>
            <InputFillDe>test</InputFillDe>
            <InputLine customWidth="452px">로그인</InputLine>
            <TestList/>
        </div>

    );
};

export default TestPage;
