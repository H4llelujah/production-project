import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { FetchArticleById } from '../services/FetchArticleById/FetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article, ArticleBlock } from '../types/article';
import { LOCAL_STORAGE_ARTICLE_EDIT_KEY } from '@/shared/const/localstorage';
import { ArticleBlockType, ArticleType } from '../consts/articleConsts';
import { updateArticleData } from '../services/updateArticleData/updateArticleData';

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
        setForm(state, action: PayloadAction<boolean>) {
            const savedFormData = localStorage.getItem(
                LOCAL_STORAGE_ARTICLE_EDIT_KEY,
            );
            if (savedFormData) {
                try {
                    const draft = JSON.parse(savedFormData) as Article;
                    if (draft.id && !action.payload) {
                        state.form = undefined;
                    } else {
                        state.form = draft;
                    }
                } catch (error) {
                    console.log(
                        'Error parsing article form data from localStorage:',
                        error,
                    );
                    state.form = undefined;
                }
            } else {
                state.form = undefined;
            }
        },
        onCancelEdit: (state) => {
            if (state.data) {
                state.form = state.data;
            } else {
                state.form = undefined;
            }
            localStorage.removeItem(LOCAL_STORAGE_ARTICLE_EDIT_KEY);
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
                        id: uuidv4(),
                        type: ArticleBlockType.TEXT,
                        title: payload.title ?? 'defaultTitile',
                        paragraphs: payload.value.split('\n'),
                    };
                    break;
                case ArticleBlockType.CODE:
                    newBlock = {
                        id: uuidv4(),
                        type: ArticleBlockType.CODE,
                        code: payload.value,
                    };
                    break;
                case ArticleBlockType.IMAGE:
                    newBlock = {
                        id: uuidv4(),
                        type: ArticleBlockType.IMAGE,
                        title: payload.title ?? 'defaultTitile',
                        src: payload.value,
                    };
                    break;
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
        updateArticleType: (state, action: PayloadAction<ArticleType>) => {
            if (state.form) {
                state.form.type = state.form.type ?? [];
                if (state.form.type.includes(action.payload)) {
                    const index = state.form.type.indexOf(action.payload);
                    state.form.type.splice(index, 1);
                } else {
                    state.form.type.push(action.payload);
                }
            }
        },
        deleteArticleBlock: (state, action: PayloadAction<string>) => {
            if (state.form) {
                state.form.blocks = state.form.blocks?.filter(
                    (item) => item.id !== action.payload,
                );
            }
            localStorage.setItem(
                LOCAL_STORAGE_ARTICLE_EDIT_KEY,
                JSON.stringify(state.form),
            );
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
                const { user, ...articleWithoutUser } = action.payload;
                state.form = articleWithoutUser;
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
        builder.addCase(
            updateArticleData.fulfilled,
            (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            },
        );
        builder.addCase(updateArticleData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
