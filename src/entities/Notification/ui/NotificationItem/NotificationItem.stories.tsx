import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'Entities/Notification/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {
        item: {
            id: '1',
            description: 'Произошло какое-то событие',
            title: 'Уведомление',
        },
    },
};

export const Link: Story = {
    args: {
        item: {
            id: '1',
            description: 'Произошло какое-то событие',
            title: 'Уведомление',
            href: '/',
        },
    },
};
