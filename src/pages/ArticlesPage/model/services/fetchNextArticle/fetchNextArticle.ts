import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { articlePageActions } from '../../slice/articlesPageSlice';

export const fetchNextArticle = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticle', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticleList({}));
    }
});
