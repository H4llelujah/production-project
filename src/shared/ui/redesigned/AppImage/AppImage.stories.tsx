import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof AppImage> = {
    title: 'Shared/Redesigned/AppImage',
    component: AppImage,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {};
