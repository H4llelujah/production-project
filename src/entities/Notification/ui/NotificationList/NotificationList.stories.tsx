import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

const notification = {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
    userId: '1',
};

const meta: Meta<typeof NotificationList> = {
    title: 'Entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notification, id: '1' },
                    { ...notification, id: '2' },
                    { ...notification, id: '3' },
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {};
