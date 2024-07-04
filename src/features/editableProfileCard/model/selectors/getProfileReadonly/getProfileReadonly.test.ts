import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return state value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: true },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
