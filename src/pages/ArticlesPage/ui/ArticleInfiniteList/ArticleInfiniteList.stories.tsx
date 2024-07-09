import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 124,
    user: { id: '1', username: 'test' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asgasfasfa',
};

export const BigView: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articlesPage: articlesPageReducer }}
                initialState={{
                    articlesPage: {
                        view: ArticleView.BIG,
                        ids: ['1', '2', '3', '4', '5', '6'],
                        entities: {
                            1: { ...article, id: '1' },
                            2: { ...article, id: '2' },
                            3: { ...article, id: '3' },
                            4: { ...article, id: '4' },
                            5: { ...article, id: '5' },
                            6: { ...article, id: '6' },
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const BigViewLoading: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articlesPage: articlesPageReducer }}
                initialState={{
                    articlesPage: {
                        isLoading: true,
                        view: ArticleView.BIG,
                        ids: ['1', '2'],
                        entities: {
                            1: { ...article, id: '1' },
                            2: { ...article, id: '2' },
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const SmallView: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articlesPage: articlesPageReducer }}
                initialState={{
                    articlesPage: {
                        view: ArticleView.SMALL,
                        ids: ['1', '2', '3', '4', '5', '6'],
                        entities: {
                            1: { ...article, id: '1' },
                            2: { ...article, id: '2' },
                            3: { ...article, id: '3' },
                            4: { ...article, id: '4' },
                            5: { ...article, id: '5' },
                            6: { ...article, id: '6' },
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const SmallViewLoading: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articlesPage: articlesPageReducer }}
                initialState={{
                    articlesPage: {
                        view: ArticleView.SMALL,
                        isLoading: true,
                        ids: ['1', '2', '3', '4', '5', '6'],
                        entities: {
                            1: { ...article, id: '1' },
                            2: { ...article, id: '2' },
                            3: { ...article, id: '3' },
                            4: { ...article, id: '4' },
                            5: { ...article, id: '5' },
                            6: { ...article, id: '6' },
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const ArticlesNotFound: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articlesPage: articlesPageReducer }}
                initialState={{
                    articlesPage: {
                        ids: [],
                        entities: {},
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const Error: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articlesPage: articlesPageReducer }}
                initialState={{
                    articlesPage: {
                        error: 'Ошибка',
                        ids: [],
                        entities: {},
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
