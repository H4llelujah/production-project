import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'Widget/Page',
    component: Page,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: (<div>Hello!</div>),
    },
};
