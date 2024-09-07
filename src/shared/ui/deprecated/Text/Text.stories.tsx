import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Shared/Deprecated/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
    },
};

export const Inverted: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        theme: TextTheme.INVERTED,
    },
};

export const TitleOnly: Story = {
    args: {
        title: 'title',
    },
};

export const TextOnly: Story = {
    args: {
        text: 'sometext some text some',
    },
};

export const ErrorText: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        theme: TextTheme.ERROR,
    },
};

export const TextSizeS: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        theme: TextTheme.PRIMARY,
        size: TextSize.S,
    },
};

export const TextSizeM: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        theme: TextTheme.PRIMARY,
        size: TextSize.M,
    },
};

export const TextSizeL: Story = {
    args: {
        title: 'title',
        text: 'sometext some text some',
        theme: TextTheme.PRIMARY,
        size: TextSize.L,
    },
};
