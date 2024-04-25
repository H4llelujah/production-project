import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/utils';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue selector', () => {
    test('should return coutner value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
