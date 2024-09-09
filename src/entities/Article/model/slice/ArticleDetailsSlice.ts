import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchArticleById } from '../services/FetchArticleById/FetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article, ArticleBlock } from '../types/article';
import { LOCAL_STORAGE_ARTICLE_EDIT_KEY } from '@/shared/const/localstorage';
import { ArticleBlockType } from '../consts/articleConsts';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    form: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        setForm(state) {
            const savedFormData = localStorage.getItem(
                LOCAL_STORAGE_ARTICLE_EDIT_KEY,
            );
            if (savedFormData) {
                try {
                    state.form = JSON.parse(savedFormData) as Article;
                } catch (error) {
                    console.error(
                        'Error parsing article form data from localStorage:',
                        error,
                    );
                    state.form = undefined;
                }
            } else {
                state.form = undefined;
            }
        },
        updateArticle: (state, action: PayloadAction<Partial<Article>>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
            localStorage.setItem(
                LOCAL_STORAGE_ARTICLE_EDIT_KEY,
                JSON.stringify(state.form),
            );
        },
        addNewArticleBlock: (
            state,
            {
                payload,
            }: PayloadAction<{
                blockType: ArticleBlockType;
                index: number;
                value: string;
                title?: string;
            }>,
        ) => {
            let newBlock: ArticleBlock;
            // eslint-disable-next-line default-case
            switch (payload.blockType) {
                case ArticleBlockType.TEXT:
                    newBlock = {
                        id: `${payload.index + 2}`,
                        type: ArticleBlockType.TEXT,
                        title: payload.title ?? 'defaultTitile',
                        paragraphs: payload.value.split('\n'),
                    };
                    break;
                case ArticleBlockType.CODE:
                    newBlock = {
                        id: `${payload.index + 2}`,
                        type: ArticleBlockType.CODE,
                        code: payload.value,
                    };
                    break;
                case ArticleBlockType.IMAGE:
                    newBlock = {
                        id: `${payload.index + 2}`,
                        type: ArticleBlockType.IMAGE,
                        title: payload.title ?? 'defaultTitile',
                        src: payload.value,
                    };
            }
            if (state.form) {
                state.form.blocks = state.form.blocks ?? [];

                state.form.blocks.splice(payload.index + 1, 0, newBlock);

                localStorage.setItem(
                    LOCAL_STORAGE_ARTICLE_EDIT_KEY,
                    JSON.stringify(state.form),
                );
            }
        },
    },
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
                state.form = action.payload;
                localStorage.setItem(
                    LOCAL_STORAGE_ARTICLE_EDIT_KEY,
                    JSON.stringify(state.form),
                );
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
