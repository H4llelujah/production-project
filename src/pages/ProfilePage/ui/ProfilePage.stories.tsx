import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/StorybookAvatar.jpg';
import { profileReducer } from '@/features/editableProfileCard';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        form: {
                            age: 21,
                            first: 'Pavel',
                            lastname: 'Baldin',
                            username: 'adming',
                            country: Country.Belarus,
                            currency: Currency.EUR,
                            city: 'Kopeysk',
                            avatar,
                        },
                        readonly: true,
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const Loading: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        isLoading: true,
                        form: {
                            age: 21,
                            first: 'Pavel',
                            lastname: 'Baldin',
                            username: 'adming',
                            country: Country.Belarus,
                            currency: Currency.EUR,
                            city: 'Kopeysk',
                            avatar,
                        },
                        readonly: true,
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const Error: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        error: 'error',
                        form: {
                            age: 21,
                            first: 'Pavel',
                            lastname: 'Baldin',
                            username: 'adming',
                            country: Country.Belarus,
                            currency: Currency.EUR,
                            city: 'Kopeysk',
                            avatar,
                        },
                        readonly: true,
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
