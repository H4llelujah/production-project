import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/StorybookAvatar.jpg';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { validateProfileError } from '../../model/consts/ProfileCardConsts';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slices/ProfileSlice';

const form: Profile = {
    age: 21,
    first: 'Pavel',
    lastname: 'Baldin',
    username: 'adming',
    country: Country.Belarus,
    currency: Currency.EUR,
    city: 'Kopeysk',
    avatar,
};

const meta: Meta<typeof EditableProfileCard> = {
    title: 'Features/ProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        readonly: true,
                        data: form,
                        form,
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const EditMode: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        readonly: false,
                        data: form,
                        form,
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const isLoading: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        readonly: true,
                        data: form,
                        form,
                        isLoading: true,
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
                        readonly: true,
                        data: form,
                        form,
                        error: 'ошибка',
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const OneValidateError: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        readonly: true,
                        data: form,
                        form,
                        validateErrors: [validateProfileError.INCORRECT_USER_DATA],
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};

export const MultiValidateError: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ profile: profileReducer }}
                initialState={{
                    profile: {
                        readonly: true,
                        data: form,
                        form,
                        validateErrors: [validateProfileError.INCORRECT_USER_DATA, validateProfileError.INCORRECT_USER_AGE],
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
