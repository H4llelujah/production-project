/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {};

export const UserLogin: Story = {
    decorators: [
        (Story) => (
            <StoreProvider initialState={{
                user: {
                    authData: {
                        id: '1', username: '1', avatar: 'https://masterpiecer-images.s3.yandex.net/df0c6044571f11ee8131aaafe6635749:upscaled',
                    },
                },
            }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
