'use client';

import React, { useEffect, useState } from 'react';
import * as S from '@/app/blog/blog.styles';
import * as G from '@/components/globals.styles';
import ArticlePreview from '@/components/blog/articlePreview';
import articlesAPI from '@/service/articles/articles.api';
import Pagination from '@/components/blog/pagination';
import { useSearchParams } from 'next/navigation';
import PagedList from '@/types/paged.dto';
import ArticleDto from '@/types/articles/article.dto';

export default function () {
    const params = useSearchParams();
    const num = Number(params.get('page'));

    const [ articles, setArticles ] = useState<PagedList<ArticleDto> | undefined>(undefined);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                const articles = await articlesAPI.getArticles((!num || !isFinite(num) || num < 1) ? 0 : num - 1);
                console.log(articles);
                setArticles(articles as PagedList<ArticleDto>);
            } catch {
                setError(true);
            }
        };
        fetch();
    }, [ params ]);

    return (
        <S.Root>
            {error && <G.Centered>게시글을불러오는도중뭔가에러가낢...</G.Centered>}
            {articles === undefined || <>
                <S.Container>
                    {articles.data.map((it) => (<ArticlePreview key={it.id} {...it} />))}
                </S.Container>
                <G.Centered>
                    <Pagination {...articles} />
                </G.Centered>
            </>}
        </S.Root>
    );
};