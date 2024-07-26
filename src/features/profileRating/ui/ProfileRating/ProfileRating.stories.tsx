import type { Meta, StoryObj } from '@storybook/react';
import ProfileRating from './ProfileRating';

const meta: Meta<typeof ProfileRating> = {
    title: 'FSDPath/ProfileRating',
    component: ProfileRating,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Primary: Story = {};
