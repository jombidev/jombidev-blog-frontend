'use client';

import * as A from '@/components/blog/articlePreview.styles';
import ArticleDto from '@/types/articles/article.dto';


export default function ArticlePreview({ id, title, content, images }: ArticleDto) {
    return (
        <A.RootContainer href={`/blog/${id}`}>
            {images.length !== 0 ?
                <A.ImageContainer>
                    <A.ImageInner src={images[0]} fill alt="alt"></A.ImageInner>
                </A.ImageContainer>
                : <></>
            }
            <A.TextContainer>
                <A.TitleP>{title}</A.TitleP>
                <A.ContentP>{content}</A.ContentP>
            </A.TextContainer>
        </A.RootContainer>
    );
}