import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                content: 'Choosen variant',
                value: '1',
            },
            {
                content: '2 variant',
                value: '2',
            },
            {
                content: '3 variant',
                value: '3',
            },
        ],
        value: '1',
    },
};
