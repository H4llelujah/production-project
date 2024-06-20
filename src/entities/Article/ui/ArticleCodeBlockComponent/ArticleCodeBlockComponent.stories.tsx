/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlockCode } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'entities/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

const codeBlock = {
    id: '3',
    type: 'CODE',
    code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
} as ArticleBlockCode;

export const Primary: Story = {
    args: {
        block: codeBlock,
    },
};
