import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator: Decorator = (Story, context) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { theme } = context.globals;
    return (
        <div className={`app ${theme}`}>
            <ThemeProvider initialTheme={theme}>
                <Story />
            </ThemeProvider>
        </div>
    );
};
