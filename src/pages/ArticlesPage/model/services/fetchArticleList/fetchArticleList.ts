/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQuerryParams } from 'shared/lib/url/addQuerryParams/addQuerryParams';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface fetchArticleListArgs {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListArgs, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (args, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const type_like = getArticlesPageType(getState());

        try {
            addQuerryParams({
                sort, order, search, type_like,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type_like: type_like === ArticleType.ALL ? undefined : type_like,
                },
            });
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
