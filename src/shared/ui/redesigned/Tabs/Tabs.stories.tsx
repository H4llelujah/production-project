import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Tabs> = {
    title: 'Shared/Redesigned/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
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
