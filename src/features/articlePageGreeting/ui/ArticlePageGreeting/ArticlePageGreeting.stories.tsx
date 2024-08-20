import type { Meta, StoryObj } from '@storybook/react';
import { ArticlePageGreeting } from './ArticlePageGreeting';

const meta: Meta<typeof ArticlePageGreeting> = {
    title: 'Features/articlePageGreeting',
    component: ArticlePageGreeting,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;

export const Primary: Story = {};
