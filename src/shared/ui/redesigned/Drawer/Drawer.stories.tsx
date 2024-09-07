import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Drawer> = {
    title: 'Shared/Redesigned/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <div>afsfasfsafsa</div>,
        isOpen: true,
    },
};
