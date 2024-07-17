import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '@/entities/Article';
import ArticlesPage from './ArticlesPage';

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

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_expand=user&_page=21&_limit=4&_sort=createdAt&_order=asc&q=`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                    { ...article, id: '4' },
                    { ...article, id: '5' },
                    { ...article, id: '6' },
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {};
