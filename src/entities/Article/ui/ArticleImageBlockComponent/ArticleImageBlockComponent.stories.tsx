import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockImage } from '../../model/types/article';

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

const imageBlock = {
    id: '2',
    type: 'IMAGE',
    src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
    title: 'Рисунок 1 - скриншот сайта',
} as ArticleBlockImage;

export const Primary: Story = {
    args: {
        block: imageBlock,
    },
};
