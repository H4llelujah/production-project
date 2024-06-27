import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from '../../model/slice/loginSlice';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
};

export const Error: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider
                initialState={{
                    loginForm: {
                        error: 'ERROR',
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
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ loginForm: loginReducer }}
                initialState={{ loginForm: { isLoading: true } }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
