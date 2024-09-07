import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/Deprecated/AppLink',
    component: AppLink,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        to: '/',
        theme: AppLinkTheme.PRIMARY,
        children: 'text1',
    },
};

export const Inverted: Story = {
    args: {
        to: '/',
        theme: AppLinkTheme.INVERTED,
        children: 'text1',
    },
};
