import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'Shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {
        label: 'Введите значение',
        items: [
            { content: 'Первый пункт', value: '123' },
            { content: 'Второй пункт', value: '1234', disabled: true },
            { content: 'Третий пункт', value: '1235' },
        ],
        value: '1235',
    },
};
