import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Shared/Deprecated/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Введите значение',
        options: [
            { content: 'Первый пункт', value: '123' },
            { content: 'Второй пункт', value: '1234' },
            { content: 'Третий пункт', value: '1235' },
        ],
    },
};
