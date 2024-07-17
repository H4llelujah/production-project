import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const avatar = 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png';

export const Primary: Story = {
    args: {
        data: {
            age: 21,
            first: 'Pavel',
            lastname: 'Baldin',
            username: 'admin',
            city: 'Kopeysk',
            country: Country.Russia,
            currency: Currency.USD,
            avatar,
        },
        readonly: true,
    },
};

export const Editing: Story = {
    args: {
        data: {
            age: 21,
            first: 'Pavel',
            lastname: 'Baldin',
            username: 'admin',
            city: 'Kopeysk',
            country: Country.Russia,
            currency: Currency.USD,
            avatar,
        },
        readonly: false,
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const Error: Story = {
    args: {
        error: 'Произошла ошибка!',
    },
};
