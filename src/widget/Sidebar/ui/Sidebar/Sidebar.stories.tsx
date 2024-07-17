import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'Widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                initialState={{
                    user: { authData: {} },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const noAuth: Story = {};
