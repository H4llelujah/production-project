/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'Shared/Popover',
    component: Popover,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

const children = (
    <div>
        <div>fsafasfa</div>
        <div>fsafasfsa</div>
        <div>fsafasfa</div>
    </div>
);

export const Primary: Story = {
    args: {
        children,
        trigger: ('trigger'),
    },
};
