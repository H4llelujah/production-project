import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface fetchArticleListArgs {
    page: number;
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListArgs, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (args, thunkAPI) => {
        const { page } = args;
        const { extra, rejectWithValue, getState } = thunkAPI;

        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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
