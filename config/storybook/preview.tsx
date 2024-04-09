import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/index';

const preview: Preview = {
    parameters: {
        backgrounds: {
            values: [
                { name: 'light', value: '#fff' },
                { name: 'dark', value: '#000' },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        ThemeDecorator,
        StyleDecorator,
    ],
};

export const globalTypes = {
    theme: {
        name: 'theme',
        description: 'Select light or dark theme',
        defaultValue: 'light',
        toolbar: {
            icon: 'mirror',
            items: [Theme.LIGHT, Theme.DARK],
            dynamicTitle: true,
        },
    },
};

export default preview;
