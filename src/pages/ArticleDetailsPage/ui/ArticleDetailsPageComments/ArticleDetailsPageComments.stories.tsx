import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { ArticleDetailsPageComments } from './ArticleDetailsPageComments';
import { articleDetailsPageReducer } from '../../model/slice/index';

const meta: Meta<typeof ArticleDetailsPageComments> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPageComments',
    component: ArticleDetailsPageComments,
    tags: ['autodocs'],
};

const comment: Comment = {
    id: '1',
    text: 'SomeComment',
    user: { id: '1', username: 'Pavel' },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageComments>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articleDetailsPage: articleDetailsPageReducer }}
                initialState={{
                    articleDetailsPage: {
                        comments: {
                            ids: ['1', '2', '3'],
                            entities: {
                                1: { ...comment, id: '1' },
                                2: { ...comment, id: '2' },
                                3: { ...comment, id: '3' },
                            },
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const Loading: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ articleDetailsPage: articleDetailsPageReducer }}
                initialState={{
                    articleDetailsPage: {
                        comments: {
                            isLoading: true,
                            ids: ['1', '2', '3'],
                            entities: {
                                1: { ...comment, id: '1' },
                                2: { ...comment, id: '2' },
                                3: { ...comment, id: '3' },
                            },
                        },
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
                asyncReducers={{ articleDetailsPage: articleDetailsPageReducer }}
                initialState={{
                    articleDetailsPage: {
                        comments: {
                            error: 'Ошибка',
                            ids: [],
                            entities: {},
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
