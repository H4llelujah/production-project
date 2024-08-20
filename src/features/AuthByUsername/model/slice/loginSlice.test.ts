import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: 'test' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('test5'),
            ),
        ).toEqual({
            username: 'test5',
        });
    });
    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: 'test' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('test5'),
            ),
        ).toEqual({
            password: 'test5',
        });
    });
});
