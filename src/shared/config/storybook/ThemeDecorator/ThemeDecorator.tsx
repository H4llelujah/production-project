import { Decorator } from '@storybook/react';

export const ThemeDecorator: Decorator = (Story, context) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { theme } = context.globals;
    return <div className={`app ${theme}`}><Story /></div>;
};
