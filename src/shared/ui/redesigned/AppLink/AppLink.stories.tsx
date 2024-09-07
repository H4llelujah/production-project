import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/Redesigned/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
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

export const onCancel: Story = {
    args: {
        to: '/',
        variant: 'red',
        children: 'text1',
    },
};
