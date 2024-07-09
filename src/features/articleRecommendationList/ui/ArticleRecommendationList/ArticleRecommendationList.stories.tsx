import type { Meta, StoryObj } from '@storybook/react';
import { Article } from 'entities/Article';
import { ArticleRecommendationList } from './ArticleRecommendationList';

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

const meta: Meta<typeof ArticleRecommendationList> = {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    tags: ['autodocs'],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Primary: Story = {};
