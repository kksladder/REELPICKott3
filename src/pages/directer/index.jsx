import MovList from "../../components/directer/MovList";

import DirecMovItem from "../../components/directer/DirecMovItem.jsx";
import { DirectorWrap } from "../../pages/directer/style.js";

const DirectorPage = () => {
    return (
        <DirectorWrap>
                <DirecMovItem className="mov-item" />
                <MovList className="mov-list" />
        </DirectorWrap>
    );
};

export default DirectorPage;
