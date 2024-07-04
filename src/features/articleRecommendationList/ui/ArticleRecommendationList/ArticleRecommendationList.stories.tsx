import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationList } from './ArticleRecommendationList';

const meta: Meta<typeof ArticleRecommendationList> = {
    title: 'FSDPath/ArticleRecommendationList',
    component: ArticleRecommendationList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Primary: Story = {};
