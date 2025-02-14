import { useState } from 'react';
import { GalleryFormContainer } from './style';

const GalleryForm = () => {
    return (
        <GalleryFormContainer onSubmit={onSubmit}>
            <input type="text" />
            <button type="submit">검색</button>

            <select onChange={changeInput}>
                <option value="">=== 정렬 === </option>
                <option value="views">제목</option>
                <option value="user">조회수</option>
                <option value="downloads">다운로드</option>
                <option value="likes">좋아요 </option>
            </select>
        </GalleryFormContainer>
    );
};

export default GalleryForm;
