import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
    title: 'FSDPath/RatingCard',
    component: RatingCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Primary: Story = {};
