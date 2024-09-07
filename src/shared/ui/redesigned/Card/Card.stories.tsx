/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Card> = {
    title: 'Shared/Redesigned/Card',
    component: Card,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: { children: <div>hello my card</div> },
};

export const Outlined: Story = {
    args: {
        children: <div>hello my card</div>,
        variant: 'outlined',
    },
};

export const Light: Story = {
    args: {
        children: <div>hello my card</div>,
        variant: 'light',
    },
};

export const BorderRound: Story = {
    args: {
        children: (
            <>
                <div>hello my card</div>
                <div>hello my card</div>
            </>
        ),
        border: 'round',
    },
};

export const BorderPartial: Story = {
    args: {
        children: (
            <>
                <div>hello my card</div>
                <div>hello my card</div>
            </>
        ),
        border: 'partial',
    },
};

export const Padding0: Story = {
    args: {
        children: <div>hello my card</div>,
        padding: '0',
    },
};

export const Padding8: Story = {
    args: {
        children: <div>hello my card</div>,
        padding: '8',
    },
};

export const Padding16: Story = {
    args: {
        children: <div>hello my card</div>,
        padding: '16',
    },
};

export const Padding24: Story = {
    args: {
        children: <div>hello my card</div>,
        padding: '24',
    },
};
