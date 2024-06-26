import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
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
        StoreDecorator,
        ThemeDecorator,
        StyleDecorator,
        RouteDecorator,
    ],
};

export const globalTypes = {
    theme: {
        name: 'theme',
        description: 'Select light or dark theme',
        defaultValue: Theme.LIGHT,
        toolbar: {
            icon: 'mirror',
            items: [Theme.LIGHT, Theme.DARK, Theme.GREEN],
            dynamicTitle: true,
        },
    },
};

export default preview;
