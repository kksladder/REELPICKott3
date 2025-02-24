// components/common/ContentGrid.jsx
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GridContainer, CardItem, PosterImage, ContentInfo, Title, Rating, ReleaseYear } from "./ContentGrid.style";

const ContentGrid = ({ items, onLoadMore, hasMore, contentType }) => {
    const observerRef = useRef(null);
    const lastItemRef = useRef(null);

    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                onLoadMore();
            }
        });

        if (lastItemRef.current) {
            observerRef.current.observe(lastItemRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [items, hasMore, onLoadMore]);

    if (!items || items.length === 0) {
        return <div>표시할 콘텐츠가 없습니다.</div>;
    }

    return (
        <GridContainer>
            {items.map((item, index) => (
                <CardItem key={`${item.id}-${index}`} ref={index === items.length - 1 ? lastItemRef : null}>
                    <Link to={`/${contentType}/${item.id}`}>
                        <PosterImage src={item.poster || "/placeholder-poster.jpg"} alt={item.title} />
                        <ContentInfo>
                            <Title>{item.title}</Title>
                            <Rating>평점: {item.rating?.toFixed(1) || "N/A"}</Rating>
                            {item.releaseDate && <ReleaseYear>{new Date(item.releaseDate).getFullYear()}</ReleaseYear>}
                        </ContentInfo>
                    </Link>
                </CardItem>
            ))}
        </GridContainer>
    );
};

export default ContentGrid;
