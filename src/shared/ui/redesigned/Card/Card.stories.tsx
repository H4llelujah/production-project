/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'Shared/Redesigned/Card',
    component: Card,
    tags: ['autodocs'],
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
