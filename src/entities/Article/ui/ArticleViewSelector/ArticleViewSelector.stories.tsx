import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/consts/articleConsts';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {};

export const GridChoosen: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};

export const ListChoosen: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
