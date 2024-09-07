/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Popover> = {
    title: 'Shared/Redesigned/Popover',
    component: Popover,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
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
        trigger: 'trigger',
    },
};
