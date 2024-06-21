import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { articlePageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const inited = getArticlesPageInit(getState());

        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticleList(
                { page: 1 },
            ));
        }
    },
);
