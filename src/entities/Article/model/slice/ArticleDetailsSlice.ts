import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchArticleById } from '../services/FetchArticleById/FetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            FetchArticleById.fulfilled,
            (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            },
        );
        builder.addCase(FetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
