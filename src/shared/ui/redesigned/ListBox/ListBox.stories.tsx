/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ListBox } from './ListBox';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof ListBox> = {
    title: 'Shared/Redesigned/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    render: (args) => {
        const [value, setValue] = useState('Первый пункт');

        const onChange = (newValue: string) => {
            setValue(newValue);
        };

        return <ListBox {...args} value={value} onChange={onChange} />;
    },
    args: {
        label: 'Выберите вариант',
        items: [
            { value: 'Первый пункт', content: 'Первый пункт' },
            { value: 'Второй пункт', content: 'Второй пункт' },
            { value: 'Третий пункт', content: 'Третий пункт' },
        ],
    },
};

export const WithDisabledOption: Story = {
    render: (args) => {
        const [value, setValue] = useState('Первый пункт');

        const onChange = (newValue: string) => {
            setValue(newValue);
        };

        return <ListBox {...args} value={value} onChange={onChange} />;
    },
    args: {
        label: 'Выберите вариант',
        items: [
            { value: 'Первый пункт', content: 'Первый пункт' },
            { value: 'Второй пункт', content: 'Второй пункт', disabled: true },
            { value: 'Третий пункт', content: 'Третий пункт' },
        ],
    },
};

export const DisabledListBox: Story = {
    render: (args) => {
        const [value, setValue] = useState('Первый пункт');

        const onChange = (newValue: string) => {
            setValue(newValue);
        };

        return <ListBox {...args} value={value} onChange={onChange} />;
    },
    args: {
        label: 'Выберите вариант',
        items: [
            { value: 'Первый пункт', content: 'Первый пункт' },
            { value: 'Второй пункт', content: 'Второй пункт', disabled: true },
            { value: 'Третий пункт', content: 'Третий пункт' },
        ],
        readonly: true,
    },
};
