import { validateArticleError } from '../consts/articleConsts';
import { Article } from './article';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
    form?: Partial<Article>;
    validateErrors?: validateArticleError[];
}
