import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Shared/Text',
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