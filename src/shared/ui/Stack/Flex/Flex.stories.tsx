/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'Shared/Flex',
    component: Flex,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const JustifyStart: Story = {
    args: {
        justify: 'start',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const JustifyCenter: Story = {
    args: {
        justify: 'center',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const JustifyEnd: Story = {
    args: {
        justify: 'end',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const JustifyBetween: Story = {
    args: {
        justify: 'between',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const AlignStart: Story = {
    args: {
        direction: 'column',
        align: 'start',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const AlignCenter: Story = {
    args: {
        direction: 'column',
        align: 'center',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const AlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const Gap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const Gap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const Gap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};

export const Gap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>row</div>
                <div>row</div>
                <div>row</div>
                <div>row</div>
            </>
        ),
    },
};
