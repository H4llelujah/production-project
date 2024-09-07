import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from './StorybookAvatar.jpg';
import { Avatar } from './Avatar';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Redesigned/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
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
