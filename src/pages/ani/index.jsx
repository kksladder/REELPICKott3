// pages/Anime/index.jsx
import { useSearchParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import ContentGrid from "../../components/common/ContentGrid";
import FilterBar from "../../components/common/FilterBar";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { PageWrapper, PageHeader, PageTitle } from "../../components/common/PageLayout.style";

const AnimePage = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");

    const { data, loading, error, activeFilters, applyFilter, loadMore, hasMore } = useCategory("ani", searchQuery);

    if (error) {
        return <div>오류가 발생했습니다: {error}</div>;
    }

    return (
        <PageWrapper>
            <PageHeader>
                <PageTitle>{searchQuery ? `"${searchQuery}" 검색 결과` : "애니메이션"}</PageTitle>

                {!searchQuery && (
                    <FilterBar mediaType="ani" onFilterChange={applyFilter} activeFilters={activeFilters} />
                )}
            </PageHeader>

            <ContentGrid items={data} onLoadMore={loadMore} hasMore={hasMore} contentType="ani" />

            {loading && <LoadingSpinner />}
        </PageWrapper>
    );
};

export default AnimePage;
