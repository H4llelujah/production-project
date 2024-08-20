/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardTheme } from './Card';

const meta: Meta<typeof Card> = {
    title: 'Shared/Card',
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
        theme: CardTheme.OUTLINED,
    },
};
