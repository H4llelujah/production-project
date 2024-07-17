import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return state value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: '123' },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
