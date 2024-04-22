import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'text',
    },
};

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const Background: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.M,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SizeM: Story = {
    args: {
        children: 'text',
        size: ButtonSize.M,
    },
};

export const SizeL: Story = {
    args: {
        children: 'text',
        size: ButtonSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        children: 'text',
        size: ButtonSize.XL,
    },
};

export const disabled: Story = {
    args: {
        children: 'text',
        size: ButtonSize.L,
        disabled: true,
    },
};
