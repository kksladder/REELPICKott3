import { useSelector } from "react-redux";
import Button from "../../ui/button";
import Button1 from "../../ui/button";
import GalleryItem from "./GalleryItem";
import { GalleryListContainer } from "./style";
import Masonry from "react-masonry-css";

const GalleryList = () => {
    const { movieData } = useSelector((state) => state.movieR);

    if (!movieData) {
        return <div>loading...</div>;
    }
    if (movieData.length > 0)
        return (
            <GalleryListContainer>
                <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {movieData.map((item) => (
                        <GalleryItem  key={item.id} item={item}/>
                    ))}
                </Masonry>
                <p>
                    <Button title="고양이" width="300px" bgColor="pink" />
                    <Button title="강아지 입양하기" width="500px" />
                </p>
                <p>
                    <Button1 />
                    <Button1 />
                </p>
            </GalleryListContainer>
        );
};

export default GalleryList;
