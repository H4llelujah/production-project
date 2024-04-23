import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
};

export const Error: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        (Story) => (
            <StoreProvider initialState={{
                loginForm: {
                    isLoading: true, password: '', username: '', error: 'ERROR',
                },
            }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const Loading: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        (Story) => (
            <StoreProvider initialState={{ loginForm: { isLoading: true, password: '', username: '' } }}>
                <Story />
            </StoreProvider>
        ),
    ],
};
