import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { validateArticleError } from '../../consts/articleConsts';
import { Article } from '../../types/article';
import { validateArticleData } from '../validateArticleData/validateArticleData';
import { getArticleDetailsForm } from '../../selectors/ArticleDetails';
import { getUserAuthData } from '@/entities/User';

export const createArticleData = createAsyncThunk<
    Article,
    void,
    ThunkConfig<validateArticleError[]>
>('Article/createArticleData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getArticleDetailsForm(getState());

    const userData = getUserAuthData(getState());

    if (!userData) {
        rejectWithValue([validateArticleError.NO_DATA]);
    }

    const errors = validateArticleData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.post<Article>('/articles', {
            id: uuidv4(),
            userId: userData?.id,
            formData,
        });
        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue([validateArticleError.SERVER_ERROR]);
    }
});
