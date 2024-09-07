import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Text> = {
    title: 'Shared/Redesigned/Text',
    component: Text,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
    },
};

export const AccentVariant: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        variant: 'accent',
    },
};

export const ErrorVariant: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        variant: 'error',
    },
};

export const SizeS: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        size: 's',
    },
};

export const SizeM: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        size: 'm',
    },
};

export const SizeL: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        size: 'l',
    },
};

export const Bold: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        bold: true,
    },
};
