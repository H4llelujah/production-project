import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Shared/Deprecated/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: 200,
        height: '200px',
    },
};

export const Border: Story = {
    args: {
        width: 200,
        height: 200,
        border: '50%',
    },
};
