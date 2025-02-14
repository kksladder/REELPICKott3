import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovie } from "../../store/modules/getThunk";

const MoviePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie());
    }, []);
    return <div>MOVIE</div>;
};

export default MoviePage;
