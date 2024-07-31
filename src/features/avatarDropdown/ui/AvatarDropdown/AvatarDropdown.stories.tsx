import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { AvatarDropdown } from './AvatarDropdown';
import { userReducer, UserRole } from '@/entities/User';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <StoreProvider
                asyncReducers={{ user: userReducer }}
                initialState={{
                    user: {
                        authData: {
                            id: '1',
                            roles: [UserRole.ADMIN],
                            username: 'Test',
                            avatar: 'https://masterpiecer-images.s3.yandex.net/7acd4d176efe11ee9ef9beb332dff282:upscaled',
                        },
                    },
                }}
            >
                <Story />
            </StoreProvider>
        ),
    ],
};
