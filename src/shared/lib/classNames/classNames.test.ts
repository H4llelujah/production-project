import { classNames } from '../classNames/classNames';

describe('classNames', () => {
    test('with only one first param', () => {
        expect(classNames('className')).toBe('className');
    });

    test('with additional class', () => {
        const exptected = 'className class1 class2';
        expect(classNames('className', {}, ['class1', 'class2'])).toBe(
            exptected,
        );
    });

    test('With true mods params', () => {
        const exptected = 'className class1 target checked';
        expect(
            classNames('className', { target: true, checked: true }, [
                'class1',
            ]),
        ).toBe(exptected);
    });

    test('With false mods params', () => {
        const exptected = 'className class1 target';
        expect(
            classNames('className', { target: true, checked: false }, [
                'class1',
            ]),
        ).toBe(exptected);
    });

    test('With undefined mods params', () => {
        const exptected = 'className class1 target';
        expect(
            classNames('className', { target: true, checked: undefined }, [
                'class1',
            ]),
        ).toBe(exptected);
    });
});
