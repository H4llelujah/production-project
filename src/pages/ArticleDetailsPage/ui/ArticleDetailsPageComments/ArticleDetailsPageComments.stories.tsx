import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageComments } from './ArticleDetailsPageComments';

const meta: Meta<typeof ArticleDetailsPageComments> = {
    title: 'FSDPath/ArticleDetailsPageComments',
    component: ArticleDetailsPageComments,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageComments>;

export const Primary: Story = {};
