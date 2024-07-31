import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'Entities/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {};
