import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('should return state value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
