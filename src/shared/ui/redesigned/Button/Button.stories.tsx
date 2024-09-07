import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { Icon } from '../Icon';
import SVG from '@/shared/assets/icons/arrow-bottom.svg';

const meta: Meta<typeof Button> = {
    title: 'Shared/Redesigned/Button',
    component: Button,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
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
        variant: 'clear',
    },
};

export const filled: Story = {
    args: {
        children: 'text',
        variant: 'filled',
    },
};

export const ColorError: Story = {
    args: {
        children: 'text',
        color: 'error',
    },
};

export const ColorSuccess: Story = {
    args: {
        children: 'text',
        color: 'success',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'text',
        size: 'l',
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'text',
        size: 'm',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'text',
        size: 'xl',
    },
};

export const FullWitdh: Story = {
    args: {
        children: 'text',
        fullWidth: true,
    },
};

export const WithAddonLeft: Story = {
    args: {
        children: 'text',
        addonLeft: <Icon Svg={SVG} />,
    },
};

export const WithAddonRight: Story = {
    args: {
        children: 'text',
        addonRight: <Icon Svg={SVG} />,
    },
};

export const WithBothAddons: Story = {
    args: {
        children: 'text',
        addonRight: <Icon Svg={SVG} />,
        addonLeft: <Icon Svg={SVG} />,
    },
};

export const Disabled: Story = {
    args: {
        children: 'text',
        disabled: true,
    },
};
