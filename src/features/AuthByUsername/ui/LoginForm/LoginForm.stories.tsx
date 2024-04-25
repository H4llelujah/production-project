import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import LoginForm from './LoginForm';

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
            <StoreProvider
                initialState={{
                    loginForm: {
                        isLoading: true, password: '', username: '', error: 'ERROR',
                    },
                }}
                asyncReducers={{ loginForm: loginReducer }}
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
            <StoreProvider
                asyncReducers={{ loginForm: loginReducer }}
                initialState={{ loginForm: { isLoading: true, password: '', username: '' } }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
