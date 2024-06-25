import { getQuerryParams } from './addQuerryParams';

describe('addQuerryParams', () => {
    test('with one param', () => {
        const params = getQuerryParams({
            test: 'value1',
        });
        expect(params).toBe('?test=value1');
    });
    test('with multiple params', () => {
        const params = getQuerryParams({
            test: 'value1',
            value2: 'value12',
        });
        expect(params).toBe('?test=value1&value2=value12');
    });
    test('with undefined', () => {
        const params = getQuerryParams({
            test: 'value1',
            value2: undefined,
        });
        expect(params).toBe('?test=value1');
    });
});
