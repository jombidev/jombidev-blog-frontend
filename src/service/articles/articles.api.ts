import blogAxios from '@/lib/blogAxios';
import PagedList from '@/types/paged.dto';
import ArticleDto from '@/types/articles/article.dto';

class ArticlesApi {
    constructor(fetchCount: number) {
        this.fetchCount = fetchCount;
    }

    private readonly fetchCount: number;
    private static readonly PATH = '/articles';

    async getArticles(page: number): Promise<PagedList<ArticleDto>> {
        const fetched = await blogAxios.get(`${ArticlesApi.PATH}`, {
            params: { page, size: this.fetchCount }
        });

        return fetched.data.data;
    }
    async getArticle(id: string): Promise<ArticleDto> {
        const fetched = await blogAxios.get(`${ArticlesApi.PATH}/${id}`);

        return fetched.data.data;
    }
}

const ArticlesAPI = new ArticlesApi(10);
export default ArticlesAPI;