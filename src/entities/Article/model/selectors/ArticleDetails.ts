import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => state.ArticleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.ArticleDetails?.isLoading || false;
export const getArticleDetailsError = (state: StateSchema) => state.ArticleDetails?.error;
