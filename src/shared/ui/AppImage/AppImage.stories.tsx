import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
    title: 'Shared/AppImage',
    component: AppImage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {};
