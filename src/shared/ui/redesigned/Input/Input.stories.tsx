import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import SVG from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../Icon';

const meta: Meta<typeof Input> = {
    title: 'Shared/Redesigned/Input',
    component: Input,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {},
};

export const WithLabel: Story = {
    args: {
        label: 'label for storybook',
    },
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'placeholder for storybook',
    },
};

export const WithAddonLeft: Story = {
    args: {
        placeholder: 'placeholder for storybook',
        addonLeft: <Icon Svg={SVG} />,
    },
};

export const WithAddonRight: Story = {
    args: {
        placeholder: 'placeholder for storybook',
        addonRight: <Icon Svg={SVG} />,
    },
};

export const WithBothAddons: Story = {
    args: {
        placeholder: 'placeholder for storybook',
        addonRight: <Icon Svg={SVG} />,
        addonLeft: <Icon Svg={SVG} />,
    },
};

export const SizeS: Story = {
    args: {
        placeholder: 'placeholder for storybook',
        size: 's',
    },
};

export const SizeM: Story = {
    args: {
        placeholder: 'placeholder for storybook',
        size: 'm',
    },
};

export const SizeL: Story = {
    args: {
        placeholder: 'placeholder for storybook',
        size: 'l',
    },
};
