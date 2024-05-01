import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/utils';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
                password: '123123',
                username: 'admin',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            isLoading: false,
            password: '123123',
            username: 'admin',
        });
    });
});
