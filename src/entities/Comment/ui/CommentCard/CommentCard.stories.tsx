import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
};

const FirstAvatar =
    'https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled';

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'comment 1',
            user: { id: '1', username: 'Vlad', avatar: FirstAvatar },
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
