import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'FSDPath/UiDesignSwitcher',
    component: UiDesignSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;

export const Primary: Story = {};
