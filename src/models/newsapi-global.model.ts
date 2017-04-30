import { NewsApiArticle } from './newsapi-article.model';

export class NewsApiGlobal {
    status: string;
    source: string;
    sortBy: string;
    articles: NewsApiArticle[];
}