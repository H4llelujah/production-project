import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Modal> = {
    title: 'Shared/Redesigned/Modal',
    component: Modal,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'test text for storybook here',
        isOpen: true,
    },
};
