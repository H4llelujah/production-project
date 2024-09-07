import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from './StorybookAvatar.jpg';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Deprecated/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        size: 150,
    },
};

export const Small: Story = {
    args: {
        src: AvatarImg,
        size: 50,
    },
};

export const NoAvatar: Story = {
    args: {
        src: '',
        size: 50,
    },
};
