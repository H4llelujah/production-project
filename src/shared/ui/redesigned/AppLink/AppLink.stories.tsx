import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        to: '/',
        variant: 'primary',
        children: 'text1',
    },
};

export const Inverted: Story = {
    args: {
        to: '/',
        variant: 'primary',
        children: 'text1',
    },
};
