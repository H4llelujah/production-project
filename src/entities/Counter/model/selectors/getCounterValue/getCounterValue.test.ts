import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue selector', () => {
    test('should return coutner value', () => {
        const state: StateSchema = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
