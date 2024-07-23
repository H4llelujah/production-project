import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'FSDPath/StarRating',
    component: StarRating,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {};
