import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfilePageHeader } from './EditableProfilePageHeader';

const meta: Meta<typeof EditableProfilePageHeader> = {
    title: 'FSDPath/EditableProfilePageHeader',
    component: EditableProfilePageHeader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfilePageHeader>;

export const Primary: Story = {};
