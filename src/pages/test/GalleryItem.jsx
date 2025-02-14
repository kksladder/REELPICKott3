import { GalleryItemContainer } from "./style";

const GalleryItem = ({ item }) => {
    const { backdrop_path, title } = item;
    const bgurl = `https://image.tmdb.org/t/p/w500/`;
    return (
        <GalleryItemContainer>
            <img src={`${bgurl}${backdrop_path}`} alt="" />
            <h3> {title} </h3>
            <ul>
                <li>조회수 : </li>
                <li>다운로드 : </li>
                <li>좋아요 : </li>
            </ul>
            <p>
                <span># xx</span>
            </p>
        </GalleryItemContainer>
    );
};

export default GalleryItem;
