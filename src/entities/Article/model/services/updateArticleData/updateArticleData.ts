import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';
import { validateArticleError } from '../../consts/articleConsts';
import { getArticleDetailsForm } from '../../selectors/ArticleDetails';
import { validateArticleData } from '../validateArticleData/validateArticleData';

export const updateArticleData = createAsyncThunk<
    Article,
    void,
    ThunkConfig<validateArticleError[]>
>('Article/updateArticleData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getArticleDetailsForm(getState());

    const errors = validateArticleData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Article>(
            `/articles/${formData?.id}`,
            formData,
        );
        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue([validateArticleError.SERVER_ERROR]);
    }
});
