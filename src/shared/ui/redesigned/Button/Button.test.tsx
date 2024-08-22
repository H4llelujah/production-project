import { render, screen } from '@testing-library/react';
import { Button } from '../Button/Button';

describe('Button', () => {
    test('Render button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Render button with class props', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
