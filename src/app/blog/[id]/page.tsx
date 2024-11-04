import articlesApi from '@/service/articles/articles.api';
import Article from '@/app/blog/[id]/article';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function BlogSlugPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const data = await articlesApi.getArticle(id);

    return (
        <Article article={data} renderer={<MDXRemote source={data.content} />} />
    );
}