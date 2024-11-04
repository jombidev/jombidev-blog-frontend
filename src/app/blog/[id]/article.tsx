'use client';

import ArticleDto from '@/types/articles/article.dto';
import * as A from '@/app/blog/[id]/article.styles';
import React from 'react';

export interface ArticleRenderDto {
    article: ArticleDto,
    renderer: React.ReactNode
}

export default function Article({ renderer, article }: ArticleRenderDto) {
    return (
        <A.Root>
            <A.Title>{article.title}</A.Title>
            <hr/>
            {renderer}
        </A.Root>
    );
}