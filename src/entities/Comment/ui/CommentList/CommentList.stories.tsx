import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

const FirstAvatar = 'https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled';
const SecondAvatar = 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png';

export const Primary: Story = {
    args: {
        comments: [
            { id: '1', text: 'comment 1', user: { id: '1', username: 'Vlad', avatar: FirstAvatar } },
            { id: '2', text: 'comment 2', user: { id: '2', username: 'Artem', avatar: SecondAvatar } },
            { id: '3', text: 'comment 3', user: { id: '1', username: 'Vlad', avatar: FirstAvatar } },
            { id: '4', text: 'comment 4', user: { id: '2', username: 'Artem', avatar: SecondAvatar } },
            { id: '5', text: 'comment 5', user: { id: '1', username: 'Vlad', avatar: FirstAvatar } },
        ],
    },
};

export const Loading: Story = {
    args: {
        comments: [
            { id: '1', text: 'comment 1', user: { id: '1', username: 'Vlad', avatar: FirstAvatar } },
            { id: '2', text: 'comment 2', user: { id: '2', username: 'Artem', avatar: SecondAvatar } },
            { id: '3', text: 'comment 3', user: { id: '1', username: 'Vlad', avatar: FirstAvatar } },
            { id: '4', text: 'comment 4', user: { id: '2', username: 'Artem', avatar: SecondAvatar } },
            { id: '5', text: 'comment 5', user: { id: '1', username: 'Vlad', avatar: FirstAvatar } },
        ],
        isLoading: true,
    },
};

export const NoComments: Story = {
    args: {
        comments: [],
    },
};
